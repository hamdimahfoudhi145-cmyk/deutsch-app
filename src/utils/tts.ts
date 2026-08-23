export class TTSManager {
  private static synth: SpeechSynthesis | null = null;
  private static germanVoice: SpeechSynthesisVoice | null = null;
  private static isInitialized = false;

  private static init() {
    if (this.isInitialized) return;
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
      this.isInitialized = true;
    }
  }

  private static initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    this.germanVoice =
      voices.find((v) => v.lang.startsWith("de") && (v.name.includes("Google") || v.name.includes("Natural") || v.name.includes("Premium"))) ||
      voices.find((v) => v.lang.startsWith("de")) ||
      null;
  }

  public static speak(
    text: string,
    options?: {
      rate?: number;
      pitch?: number;
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (e: any) => void;
    }
  ): void {
    this.init();
    if (!this.synth) {
      options?.onEnd?.();
      return;
    }

    this.synth.cancel();

    const cleanText = text.replace(/[🇩🇪🇸🇦🗣️🔊▶️⏸️🔁]/g, "").trim();
    if (!cleanText) {
      options?.onEnd?.();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "de-DE";
    if (this.germanVoice) {
      utterance.voice = this.germanVoice;
    }
    utterance.rate = options?.rate ?? 0.85;
    utterance.pitch = options?.pitch ?? 1.0;

    utterance.onstart = () => {
      options?.onStart?.();
    };

    utterance.onend = () => {
      options?.onEnd?.();
    };

    utterance.onerror = (e) => {
      options?.onError?.(e);
      options?.onEnd?.();
    };

    this.synth.speak(utterance);
  }

  public static stop(): void {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

export const tts = {
  speak: (text: string) => TTSManager.speak(text),
  stop: () => TTSManager.stop(),
};
