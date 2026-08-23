import React, { useState } from "react";
import { BookMarked, Volume2, Eye, EyeOff, Check, X, Sparkles, ArrowLeft } from "lucide-react";
import { Level, ReadingPassageItem } from "../types";
import { DataProvider } from "../data/dataProvider";
import { TTSManager } from "../utils/tts";

interface ReadingScreenProps {
  currentLevel: Level;
  onSelectLevel: (level: Level) => void;
  onOpenAiTutor: (prompt?: string) => void;
}

export const ReadingScreen: React.FC<ReadingScreenProps> = ({
  currentLevel,
  onSelectLevel,
  onOpenAiTutor,
}) => {
  const [showTranslation, setShowTranslation] = useState<{ [id: string]: boolean }>({});
  const [userAnswers, setUserAnswers] = useState<{ [qKey: string]: string }>({});
  const [showFeedback, setShowFeedback] = useState<{ [qKey: string]: boolean }>({});

  const levels: Level[] = ["A1.1", "A1.2", "A2.1", "A2.2"];
  const readings = DataProvider.getReadings();
  const currentReadings = readings.filter((r) => r.level === currentLevel);

  const toggleTranslation = (id: string) => {
    setShowTranslation((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectQuiz = (passageId: string, qIdx: number, option: string) => {
    const key = `${passageId}_${qIdx}`;
    setUserAnswers((prev) => ({ ...prev, [key]: option }));
    setShowFeedback((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className="space-y-6 pb-28 text-right max-w-3xl mx-auto">
      {/* Top Banner & Level Selector */}
      <div className="rounded-3xl bg-[#161616] p-6 border border-white/5 shadow-2xl space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span>نصوص القراءة المتدرجة</span>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                {currentLevel}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-white/50 mt-1">
              نصوص ألمانية مع الترجمة التفاعلية، النطق الصوتي، وأسئلة الفهم
            </p>
          </div>
        </div>

        {/* Level pills */}
        <div className="grid grid-cols-4 gap-2 p-1.5 bg-[#121212] rounded-2xl border border-white/5">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => onSelectLevel(lvl)}
              className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentLevel === lvl
                  ? "bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Reading Cards */}
      <div className="space-y-6">
        {currentReadings.length === 0 ? (
          <div className="text-center py-12 bg-[#161616] rounded-3xl border border-white/5">
            <BookMarked className="w-10 h-10 text-white/20 mx-auto mb-2" />
            <p className="text-white/40 text-sm font-semibold">لا توجد نصوص قراءة لهذا المستوى حالياً</p>
          </div>
        ) : (
          currentReadings.map((passage) => {
            const isTransOpen = !!showTranslation[passage.id];

            return (
              <div
                key={passage.id}
                className="rounded-3xl bg-[#1E1E1E] p-6 sm:p-7 border border-white/5 shadow-2xl space-y-5"
              >
                {/* Title & Level */}
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-white/5">
                  <div>
                    <span className="text-xs font-bold text-emerald-400">
                      مستوى {passage.level}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                      {passage.titleArabic}
                    </h3>
                    <div className="text-xs font-bold text-white/50 mt-0.5" dir="ltr">
                      {passage.titleGerman}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => TTSManager.speak(passage.germanText)}
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-emerald-400 active:scale-95 transition-all cursor-pointer"
                      title="استمع للنص كاملاً"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => toggleTranslation(passage.id)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isTransOpen
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-white/5 hover:bg-white/10 text-white/80"
                      }`}
                    >
                      {isTransOpen ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      <span>{isTransOpen ? "إخفاء الترجمة" : "إظهار الترجمة"}</span>
                    </button>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/60 font-medium">
                  {passage.descriptionArabic}
                </p>

                {/* German Text */}
                <div className="p-5 rounded-2xl bg-[#161616] border border-white/5 space-y-3">
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans" dir="ltr">
                    {passage.germanText}
                  </p>

                  {/* Toggleable Arabic Translation */}
                  {isTransOpen && (
                    <div className="pt-4 border-t border-white/5 text-xs sm:text-sm text-white/70 leading-relaxed">
                      <span className="text-xs font-bold text-emerald-400 block mb-1">
                        الترجمة العربية للنص:
                      </span>
                      {passage.arabicTranslation}
                    </div>
                  )}
                </div>

                {/* Vocabulary Highlights */}
                {passage.vocabularyHighlights && passage.vocabularyHighlights.length > 0 && (
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">
                      أهم المفردات والتراكيب في النص:
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {passage.vocabularyHighlights.map((voc, vIdx) => (
                        <div
                          key={vIdx}
                          onClick={() => TTSManager.speak(voc.german)}
                          className="p-3 rounded-xl bg-[#161616] border border-white/5 hover:border-white/10 cursor-pointer transition-all flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="font-bold text-xs text-white" dir="ltr">
                              {voc.german}
                            </span>
                            <Volume2 className="w-3 h-3 text-emerald-400" />
                          </div>
                          <div className="text-[11px] text-white/70 font-medium mt-1">{voc.arabic}</div>
                          {voc.phonetic && (
                            <div className="text-[9px] text-white/30 font-mono">({voc.phonetic})</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Comprehension Questions */}
                {passage.questions && passage.questions.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-emerald-400">
                      اختبر فهمك لمحتوى النص (Leseverstehen):
                    </h4>
                    {passage.questions.map((q, qIdx) => {
                      const qKey = `${passage.id}_${qIdx}`;
                      const selected = userAnswers[qKey];
                      const isAnswered = showFeedback[qKey];
                      const isCorrect = selected === q.answer;

                      return (
                        <div key={qIdx} className="p-4 rounded-2xl bg-[#161616] border border-white/5 space-y-3">
                          <p className="text-xs sm:text-sm font-bold text-white" dir="ltr">
                            {q.question}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options.map((option, oIdx) => {
                              let btnClass = "bg-[#1E1E1E] hover:bg-[#252525] text-white/80 border-white/5";
                              if (isAnswered) {
                                if (option === q.answer) {
                                  btnClass = "bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold";
                                } else if (option === selected) {
                                  btnClass = "bg-red-500/20 text-red-300 border-red-500";
                                }
                              }

                              return (
                                <button
                                  key={oIdx}
                                  onClick={() => handleSelectQuiz(passage.id, qIdx, option)}
                                  disabled={isAnswered}
                                  className={`p-3 rounded-xl border text-xs text-right transition-all cursor-pointer ${btnClass}`}
                                  dir="ltr"
                                >
                                  {option}
                                </button>
                              );
                            })}
                          </div>

                          {isAnswered && (
                            <div className={`p-3 rounded-xl text-xs flex items-start gap-2 ${isCorrect ? "bg-emerald-500/15 text-emerald-300" : "bg-red-500/15 text-red-300"}`}>
                              {isCorrect ? <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" /> : <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />}
                              <div>
                                <div className="font-bold">{isCorrect ? "إجابة صحيحة ✓" : "إجابة غير صحيحة"}</div>
                                <div className="text-[11px] text-white/60 mt-0.5">{q.explanation}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* AI Tutor Discuss reading */}
                <div className="pt-2">
                  <button
                    onClick={() =>
                      onOpenAiTutor(
                        `ناقش معي نص القراءة "${passage.titleGerman}" في مستوى ${passage.level}، واطرح علي أسئلة إضافية بالألمانية مع ترجمة عربية.`
                      )
                    }
                    className="flex items-center gap-1.5 text-xs font-bold text-indigo-300 hover:text-indigo-200 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>محادثة وتدريب حول هذا النص مع المعلم الذكي</span>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
