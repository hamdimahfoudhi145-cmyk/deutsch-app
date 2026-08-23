import React from "react";
import { Sparkles, Volume2, BookOpen, RotateCcw } from "lucide-react";
import { Level } from "../types";
import { TTSManager } from "../utils/tts";

interface HeaderProps {
  currentLevel: Level;
  onSelectLevel: (level: Level) => void;
  onOpenAiTutor: () => void;
  onResetProgress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLevel,
  onSelectLevel,
  onOpenAiTutor,
  onResetProgress,
}) => {
  const levels: Level[] = ["A1.1", "A1.2", "A2.1", "A2.2"];

  return (
    <header className="bg-[#161616] border-b border-white/5 sticky top-0 z-30 px-4 sm:px-8 py-4 text-white shadow-xl backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-500 via-red-500 to-black flex items-center justify-center text-2xl shadow-lg border border-white/10 select-none">
            🇩🇪
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
              تعلم اللغة الألمانية
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 font-medium border border-white/10">
                {currentLevel}
              </span>
            </h1>
            <p className="text-white/50 text-xs font-medium">تعلم الألمانية من الصفر حتى مستوى A2</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2.5">
          {/* Active Level indicator pill */}
          <div className="hidden sm:flex bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-medium text-white/90">مستوى: {currentLevel}</span>
          </div>

          {/* AI Tutor Assistant Button */}
          <button
            id="header-ai-tutor-btn"
            onClick={onOpenAiTutor}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md active:scale-95"
            title="المعلم الذكي للألمانية"
          >
            <Sparkles className="w-4 h-4 text-indigo-300 animate-pulse" />
            <span className="hidden sm:inline">مساعد الذكاء الاصطناعي</span>
            <span className="sm:hidden">المساعد الذكي</span>
          </button>
        </div>
      </div>

      {/* Level Selection Pill Bar */}
      <div className="max-w-5xl mx-auto mt-3 pt-3 border-t border-white/5 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/40 font-medium ml-1 whitespace-nowrap">اختر المستوى:</span>
          {levels.map((lvl) => {
            const isActive = currentLevel === lvl;
            return (
              <button
                key={lvl}
                id={`level-tab-${lvl}`}
                onClick={() => onSelectLevel(lvl)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20 scale-105"
                    : "bg-[#1E1E1E] text-white/60 hover:text-white hover:bg-[#252525] border border-white/5"
                }`}
              >
                {lvl}
              </button>
            );
          })}
        </div>

        {/* Audio Test */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => TTSManager.speak("Guten Tag! Willkommen beim Deutschlernen.")}
            className="p-2 text-white/40 hover:text-emerald-400 hover:bg-white/5 rounded-xl transition-colors cursor-pointer"
            title="تجربة النطق الصوتي"
            aria-label="تجربة النطق الصوتي"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
