import React, { useState } from "react";
import { ArrowRight, Volume2, CheckCircle2, BookOpen, Layers, Check, X, Sparkles } from "lucide-react";
import { Lesson } from "../types";
import { TTSManager } from "../utils/tts";

interface LessonDetailProps {
  lesson: Lesson;
  isCompleted: boolean;
  onToggleComplete: (lessonId: string) => void;
  onBack: () => void;
  onOpenAiTutor: (prompt?: string) => void;
}

export const LessonDetail: React.FC<LessonDetailProps> = ({
  lesson,
  isCompleted,
  onToggleComplete,
  onBack,
  onOpenAiTutor,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [index: number]: string }>({});
  const [showAnswerFeedback, setShowAnswerFeedback] = useState<{ [index: number]: boolean }>({});
  const [readingAnswers, setReadingAnswers] = useState<{ [index: number]: string }>({});
  const [showReadingFeedback, setShowReadingFeedback] = useState<{ [index: number]: boolean }>({});

  const handleSelectQuiz = (qIndex: number, option: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: option }));
    setShowAnswerFeedback((prev) => ({ ...prev, [qIndex]: true }));
  };

  const handleSelectReadingQuiz = (qIndex: number, option: string) => {
    setReadingAnswers((prev) => ({ ...prev, [qIndex]: option }));
    setShowReadingFeedback((prev) => ({ ...prev, [qIndex]: true }));
  };

  const getArticleBadge = (article?: string) => {
    if (!article) return null;
    if (article === "der") {
      return <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">der (مذكر)</span>;
    }
    if (article === "die") {
      return <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">die (مؤنث)</span>;
    }
    if (article === "das") {
      return <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">das (محايد)</span>;
    }
    return <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-700 text-slate-300">{article}</span>;
  };

  return (
    <div className="space-y-6 pb-28 text-right max-w-3xl mx-auto">
      {/* Top action bar */}
      <div className="flex items-center justify-between gap-2 sticky top-14 z-20 bg-[#161616]/95 backdrop-blur-md py-3 px-4 rounded-2xl border border-white/5 shadow-xl">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة لقائمة الدروس</span>
        </button>

        <button
          id={`btn-complete-lesson-${lesson.id}`}
          onClick={() => onToggleComplete(lesson.id)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            isCompleted
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
              : "bg-emerald-500 hover:bg-emerald-400 text-black shadow-md active:scale-95"
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{isCompleted ? "تم إكمال الدرس ✓" : "تحديد كمكتمل"}</span>
        </button>
      </div>

      {/* Lesson Header Banner */}
      <div className="rounded-3xl bg-[#161616] p-6 sm:p-7 border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            {lesson.level} • درس {lesson.number}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mt-2">
          {lesson.titleArabic}
        </h1>
        <div className="flex items-center gap-2 text-base sm:text-lg font-bold text-emerald-400 mt-1">
          <span dir="ltr">{lesson.titleGerman}</span>
          <button
            onClick={() => TTSManager.speak(lesson.titleGerman)}
            className="p-1 rounded-lg hover:bg-white/10 text-white/40 hover:text-emerald-400 transition-colors cursor-pointer"
            title="استمع للنطق"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-white/60 mt-3 leading-relaxed">
          {lesson.descriptionArabic}
        </p>

        {/* Quick AI Tutor Help for this lesson */}
        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs text-white/40 font-medium">هل تحتاج شرحاً تفصيلياً إضافياً؟</span>
          <button
            onClick={() =>
              onOpenAiTutor(
                `اشرح لي درس "${lesson.titleArabic}" (${lesson.titleGerman}) في مستوى ${lesson.level} بأمثلة إضافية مبسطة.`
              )
            }
            className="flex items-center gap-1.5 text-xs font-bold text-indigo-300 hover:text-indigo-200 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>اسأل المعلم الذكي</span>
          </button>
        </div>
      </div>

      {/* 1. Grammar Explanation & Rules */}
      <div className="rounded-3xl bg-[#1E1E1E] p-6 border border-white/5 shadow-xl space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-white/5">
          <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
            1
          </div>
          <h2 className="text-base sm:text-lg font-bold text-white">
            شرح القواعد والمفاهيم (Grammatik)
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-white/80 leading-relaxed whitespace-pre-line bg-[#161616] p-5 rounded-2xl border border-white/5">
          {lesson.grammarExplanation}
        </p>

        {/* Structured Grammar Rules */}
        {lesson.grammarRules && lesson.grammarRules.length > 0 && (
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              القواعد الأساسية:
            </h3>
            {lesson.grammarRules.map((rule, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#161616] border border-white/5 space-y-2"
              >
                <div className="font-bold text-sm text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <span>{rule.rule}</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed pr-7">
                  {rule.explanation}
                </p>
                {rule.example && (
                  <div className="mt-3 pr-7 pt-3 border-t border-white/5 flex flex-col gap-1 text-xs">
                    <div className="flex items-center gap-2 font-bold text-emerald-400" dir="ltr">
                      <button
                        onClick={() => TTSManager.speak(rule.example!)}
                        className="p-1 text-white/40 hover:text-emerald-400"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                      <span>{rule.example}</span>
                    </div>
                    {rule.exampleArabic && (
                      <span className="text-white/40">{rule.exampleArabic}</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2. Examples with Audio & Phonetics */}
      <div className="rounded-3xl bg-[#1E1E1E] p-6 border border-white/5 shadow-xl space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-white/5">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
            2
          </div>
          <h2 className="text-base sm:text-lg font-bold text-white">
            جمل وتعبيرات تطبيقية مع النطق (Beispiele)
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {lesson.examples.map((ex, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#161616] border border-white/5 hover:border-white/10 transition-all flex items-start justify-between gap-3"
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-white" dir="ltr">
                  <span>{ex.german}</span>
                </div>
                <div className="text-xs text-white/70 font-medium">
                  {ex.arabic}
                </div>
                {ex.phonetic && (
                  <div className="text-[11px] text-emerald-400/80 font-mono">
                    النطق التقريبي: {ex.phonetic}
                  </div>
                )}
              </div>
              <button
                onClick={() => TTSManager.speak(ex.german)}
                className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 active:scale-95 transition-all cursor-pointer flex-shrink-0"
                title="استمع للجملة"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Vocabulary List with Color-coded Articles */}
      <div className="rounded-3xl bg-[#1E1E1E] p-6 border border-white/5 shadow-xl space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-white/5">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm">
            3
          </div>
          <h2 className="text-base sm:text-lg font-bold text-white">
            المفردات والكلمات الجديدة (Wortschatz)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {lesson.vocabulary.map((voc, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#161616] border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-1.5">
                    {getArticleBadge(voc.article)}
                    <span className="font-bold text-sm text-white" dir="ltr">
                      {voc.german}
                    </span>
                  </div>
                  <button
                    onClick={() => TTSManager.speak(voc.german)}
                    className="p-1 text-white/40 hover:text-emerald-400 transition-colors"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-xs text-white/70 font-semibold">{voc.arabic}</div>
                {voc.phonetic && (
                  <div className="text-[10px] text-white/40 font-mono mt-0.5">
                    ({voc.phonetic})
                  </div>
                )}
              </div>

              {voc.exampleSentence && (
                <div className="mt-3 pt-2.5 border-t border-white/5 text-[11px] space-y-0.5">
                  <div className="text-white/70 font-medium" dir="ltr">
                    {voc.exampleSentence}
                  </div>
                  {voc.exampleArabic && (
                    <div className="text-white/40">{voc.exampleArabic}</div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Reading Passage (Lesetext) */}
      {lesson.readingPassage && (
        <div className="rounded-3xl bg-[#1E1E1E] p-6 border border-white/5 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                نص القراءة والفهم (Leseverstehen)
              </h2>
            </div>
            <button
              onClick={() => TTSManager.speak(lesson.readingPassage!.german)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 text-xs font-bold transition-all cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>استمع للنص كاملاً</span>
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-[#161616] border border-white/5 space-y-3">
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans" dir="ltr">
              {lesson.readingPassage.german}
            </p>
            <div className="pt-3 border-t border-white/5">
              <span className="text-[11px] font-bold text-emerald-400 block mb-1">الترجمة العربية:</span>
              <p className="text-xs text-white/60 leading-relaxed">
                {lesson.readingPassage.arabic}
              </p>
            </div>
          </div>

          {/* Reading comprehension questions */}
          {lesson.readingPassage.questions && lesson.readingPassage.questions.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold text-white/60">سؤال الفهم حول النص:</h3>
              {lesson.readingPassage.questions.map((rq, idx) => {
                const selected = readingAnswers[idx];
                const isAnswered = showReadingFeedback[idx];
                const isCorrect = selected === rq.answer;

                return (
                  <div key={idx} className="p-4 rounded-2xl bg-[#161616] border border-white/5 space-y-3">
                    <p className="text-xs sm:text-sm font-bold text-white" dir="ltr">
                      {rq.question}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {rq.options.map((opt, oIdx) => {
                        let btnStyle = "bg-[#1E1E1E] hover:bg-[#252525] text-white/80 border-white/5";
                        if (isAnswered) {
                          if (opt === rq.answer) {
                            btnStyle = "bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold";
                          } else if (opt === selected) {
                            btnStyle = "bg-red-500/20 text-red-300 border-red-500";
                          }
                        }
                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleSelectReadingQuiz(idx, opt)}
                            disabled={isAnswered}
                            className={`p-3 rounded-xl border text-xs text-right transition-all cursor-pointer ${btnStyle}`}
                            dir="ltr"
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className={`p-3 rounded-xl text-xs flex items-start gap-2 ${isCorrect ? "bg-emerald-500/15 text-emerald-300" : "bg-red-500/15 text-red-300"}`}>
                        {isCorrect ? <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" /> : <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />}
                        <div>
                          <div className="font-bold">{isCorrect ? "إجابة صحيحة وممتازة!" : "إجابة غير صحيحة"}</div>
                          <div className="text-[11px] text-white/60 mt-0.5">{rq.explanation}</div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* 5. Mini Interactive Exercises */}
      {lesson.miniExercises && lesson.miniExercises.length > 0 && (
        <div className="rounded-3xl bg-[#1E1E1E] p-6 border border-white/5 shadow-xl space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-white/5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
              5
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              اختبر فهمك للدرس (Mini-Übung)
            </h2>
          </div>

          <div className="space-y-4">
            {lesson.miniExercises.map((me, idx) => {
              const selected = selectedAnswers[idx];
              const isAnswered = showAnswerFeedback[idx];
              const isCorrect = selected === me.answer;

              return (
                <div key={idx} className="p-4 rounded-2xl bg-[#161616] border border-white/5 space-y-3">
                  <div className="font-bold text-xs sm:text-sm text-white">
                    {idx + 1}. {me.question}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {me.options.map((option, oIdx) => {
                      let btnClass = "bg-[#1E1E1E] hover:bg-[#252525] text-white/80 border-white/5";
                      if (isAnswered) {
                        if (option === me.answer) {
                          btnClass = "bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold";
                        } else if (option === selected) {
                          btnClass = "bg-red-500/20 text-red-300 border-red-500";
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectQuiz(idx, option)}
                          disabled={isAnswered}
                          className={`p-3 rounded-xl border text-xs text-right transition-all cursor-pointer ${btnClass}`}
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
                        <div className="font-bold">{isCorrect ? "إجابة صحيحة تماماً!" : "إجابة خاطئة"}</div>
                        <div className="text-[11px] text-white/60 mt-0.5">{me.explanation}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Completion Button */}
      <div className="p-6 rounded-3xl bg-[#161616] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="font-bold text-base text-white">هل أتممت هذا الدرس؟</div>
          <div className="text-xs text-white/40 mt-0.5">حدد الدرس كمكتمل لتحديث شريط تقدمك وحفظ إنجازك.</div>
        </div>
        <button
          onClick={() => onToggleComplete(lesson.id)}
          className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isCompleted
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
              : "bg-emerald-500 hover:bg-emerald-400 text-black shadow-md active:scale-95"
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{isCompleted ? "الدرس مكتمل بنجاح ✓" : "تأكيد إكمال الدرس"}</span>
        </button>
      </div>
    </div>
  );
};
