import React, { useState } from "react";
import { CheckSquare, Volume2, Check, X, ArrowLeft, ArrowRight, RotateCcw, Sparkles, Filter } from "lucide-react";
import { Exercise, Level, UserProgress } from "../types";
import { DataProvider } from "../data/dataProvider";
import { TTSManager } from "../utils/tts";

interface ExercisesScreenProps {
  currentLevel: Level;
  onSelectLevel: (level: Level) => void;
  progress: UserProgress;
  onRecordExerciseScore: (exerciseId: string, isCorrect: boolean) => void;
  onOpenAiTutor: (prompt?: string) => void;
}

export const ExercisesScreen: React.FC<ExercisesScreenProps> = ({
  currentLevel,
  onSelectLevel,
  progress,
  onRecordExerciseScore,
  onOpenAiTutor,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [userFillInput, setUserFillInput] = useState<string>("");

  const levels: Level[] = ["A1.1", "A1.2", "A2.1", "A2.2"];
  const levelExercises = DataProvider.getExercisesByLevel(currentLevel);

  // Extract unique categories
  const categories = Array.from(new Set(levelExercises.map((e) => e.category)));

  const filteredExercises = selectedCategory === "all"
    ? levelExercises
    : levelExercises.filter((e) => e.category === selectedCategory);

  const safeIndex = Math.min(currentIndex, Math.max(0, filteredExercises.length - 1));
  const currentExercise: Exercise | undefined = filteredExercises[safeIndex];

  const handleSelectOption = (option: string) => {
    if (isSubmitted) return;
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    if (!currentExercise || isSubmitted) return;
    const answerToCheck = selectedOption || userFillInput.trim();
    if (!answerToCheck) return;

    setIsSubmitted(true);
    const isCorrect = answerToCheck.toLowerCase() === currentExercise.correctAnswer.toLowerCase();
    onRecordExerciseScore(currentExercise.id, isCorrect);
  };

  const handleNext = () => {
    if (safeIndex < filteredExercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setUserFillInput("");
      setIsSubmitted(false);
    }
  };

  const handlePrev = () => {
    if (safeIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setSelectedOption(null);
      setUserFillInput("");
      setIsSubmitted(false);
    }
  };

  const handleResetCurrent = () => {
    setSelectedOption(null);
    setUserFillInput("");
    setIsSubmitted(false);
  };

  if (!currentExercise) {
    return (
      <div className="text-center py-12 bg-slate-800/40 rounded-3xl border border-slate-800 text-right">
        <CheckSquare className="w-12 h-12 text-slate-600 mx-auto mb-2" />
        <p className="text-slate-300 font-bold">لا توجد تمارين متاحة في هذا التصنيف</p>
      </div>
    );
  }

  const isCurrentCorrect = isSubmitted && (
    (selectedOption && selectedOption.toLowerCase() === currentExercise.correctAnswer.toLowerCase()) ||
    (userFillInput && userFillInput.trim().toLowerCase() === currentExercise.correctAnswer.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-28 text-right max-w-2xl mx-auto">
      {/* Top Level Bar & Progress */}
      <div className="rounded-3xl bg-[#161616] p-6 border border-white/5 shadow-2xl space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span>بنك التمارين التفاعلية</span>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                500 تمرين
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-white/50 mt-1">
              مستوى {currentLevel} • {filteredExercises.length} تمرين متاح
            </p>
          </div>

          <div className="text-left">
            <div className="text-xs font-bold text-emerald-400 font-mono">
              التمرين {safeIndex + 1} من {filteredExercises.length}
            </div>
          </div>
        </div>

        {/* Level pills */}
        <div className="grid grid-cols-4 gap-2 p-1.5 bg-[#121212] rounded-2xl border border-white/5">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => {
                onSelectLevel(lvl);
                setCurrentIndex(0);
                setSelectedCategory("all");
                handleResetCurrent();
              }}
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

        {/* Category horizontal scroller */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
          <button
            onClick={() => {
              setSelectedCategory("all");
              setCurrentIndex(0);
              handleResetCurrent();
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === "all"
                ? "bg-emerald-500 text-black font-bold"
                : "bg-[#1E1E1E] text-white/50 hover:text-white border border-white/5"
            }`}
          >
            الكل ({levelExercises.length})
          </button>
          {categories.map((cat) => {
            const count = levelExercises.filter((e) => e.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                  handleResetCurrent();
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-emerald-500 text-black font-bold"
                    : "bg-[#1E1E1E] text-white/50 hover:text-white border border-white/5"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Exercise Card */}
      <div className="rounded-3xl bg-[#1E1E1E] p-6 sm:p-7 border border-white/5 shadow-2xl space-y-6">
        {/* Category & Audio */}
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/5">
          <span className="text-xs font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            {currentExercise.category}
          </span>
          {currentExercise.promptGerman && (
            <button
              onClick={() => TTSManager.speak(currentExercise.promptGerman!)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all cursor-pointer"
            >
              <Volume2 className="w-4 h-4 text-emerald-400" />
              <span>استمع للنص</span>
            </button>
          )}
        </div>

        {/* Question Header */}
        <div className="space-y-2.5">
          <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
            {currentExercise.questionArabic}
          </h3>
          {currentExercise.promptGerman && (
            <div className="p-4 rounded-2xl bg-[#161616] border border-white/5 text-emerald-300 font-bold text-sm sm:text-base tracking-wide" dir="ltr">
              {currentExercise.promptGerman}
            </div>
          )}
        </div>

        {/* Options / Answer Input */}
        {currentExercise.options && currentExercise.options.length > 0 ? (
          <div className="grid grid-cols-1 gap-2.5">
            {currentExercise.options.map((option, idx) => {
              const isSelected = selectedOption === option;
              let btnStyle = "bg-[#161616] hover:bg-[#252525] text-white/80 border-white/5 hover:border-white/10";

              if (isSelected) {
                btnStyle = "bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold";
              }

              if (isSubmitted) {
                if (option === currentExercise.correctAnswer) {
                  btnStyle = "bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold";
                } else if (isSelected) {
                  btnStyle = "bg-red-500/20 text-red-300 border-red-500 font-bold";
                }
              }

              return (
                <button
                  key={idx}
                  id={`ex-opt-${idx}`}
                  onClick={() => handleSelectOption(option)}
                  disabled={isSubmitted}
                  className={`p-4 rounded-2xl border text-sm text-right transition-all flex items-center justify-between gap-2 cursor-pointer ${btnStyle}`}
                >
                  <span className="font-semibold" dir="auto">{option}</span>
                  <div className="flex items-center gap-2">
                    {isSubmitted && option === currentExercise.correctAnswer && (
                      <Check className="w-5 h-5 text-emerald-400" />
                    )}
                    {isSubmitted && isSelected && option !== currentExercise.correctAnswer && (
                      <X className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="space-y-2">
            <input
              type="text"
              value={userFillInput}
              onChange={(e) => setUserFillInput(e.target.value)}
              disabled={isSubmitted}
              placeholder="اكتب الإجابة الصحيحة هنا..."
              className="w-full bg-[#161616] border border-white/10 rounded-2xl py-3 px-4 text-sm text-white focus:outline-none focus:border-emerald-500"
              dir="ltr"
            />
          </div>
        )}

        {/* Verification Button or Feedback Panel */}
        {!isSubmitted ? (
          <button
            id="btn-check-exercise"
            onClick={handleCheckAnswer}
            disabled={!selectedOption && !userFillInput.trim()}
            className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:pointer-events-none text-black font-bold text-sm transition-all shadow-lg active:scale-98 cursor-pointer"
          >
            تحقق من الإجابة
          </button>
        ) : (
          <div className={`p-5 rounded-2xl border space-y-3 ${isCurrentCorrect ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300" : "bg-red-500/15 border-red-500/40 text-red-300"}`}>
            <div className="flex items-center gap-2 font-bold text-sm">
              {isCurrentCorrect ? (
                <>
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span>ممتاز! إجابة صحيحة ✓</span>
                </>
              ) : (
                <>
                  <X className="w-5 h-5 text-red-400" />
                  <span>إجابة خاطئة! الإجابة الصحيحة هي: <strong className="text-white" dir="ltr">{currentExercise.correctAnswer}</strong></span>
                </>
              )}
            </div>

            <div className="text-xs text-white/80 leading-relaxed bg-[#161616] p-4 rounded-xl border border-white/5">
              <span className="font-bold text-emerald-400 block mb-1">الشرح النحوي والتفصيل:</span>
              {currentExercise.explanationArabic}
            </div>

            {/* AI Tutor deep dive */}
            <button
              onClick={() =>
                onOpenAiTutor(
                  `اشرح لي بالتفصيل سبب صحة الإجابة "${currentExercise.correctAnswer}" في هذا السؤال: "${currentExercise.questionArabic}" مع مزيد من الأمثلة الألمانية.`
                )
              }
              className="flex items-center gap-1.5 text-xs font-bold text-indigo-300 hover:text-indigo-200 transition-colors pt-1 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>اطلب شرحاً إضافياً من المعلم الذكي</span>
            </button>
          </div>
        )}

        {/* Navigation buttons: Prev / Reset / Next */}
        <div className="flex items-center justify-between gap-2 pt-4 border-t border-white/5">
          <button
            onClick={handlePrev}
            disabled={safeIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white/70 text-xs font-semibold transition-all cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>السابق</span>
          </button>

          <button
            onClick={handleResetCurrent}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all cursor-pointer"
            title="إعادة المحاولة"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            id="btn-next-exercise"
            onClick={handleNext}
            disabled={safeIndex === filteredExercises.length - 1}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-black hover:bg-white/90 disabled:opacity-30 disabled:pointer-events-none text-xs font-bold transition-all cursor-pointer shadow-md"
          >
            <span>التالي</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
