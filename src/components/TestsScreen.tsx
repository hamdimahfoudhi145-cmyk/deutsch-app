import React, { useState } from "react";
import { Award, Clock, CheckCircle2, XCircle, AlertCircle, ArrowLeft, PlayCircle, RotateCcw, Volume2, Sparkles } from "lucide-react";
import { LevelTest, UserProgress } from "../types";
import { DataProvider } from "../data/dataProvider";
import { TTSManager } from "../utils/tts";
import { CertificateModal } from "./CertificateModal";

interface TestsScreenProps {
  progress: UserProgress;
  onRecordTestScore: (testId: string, score: number) => void;
  onOpenAiTutor: (prompt?: string) => void;
}

export const TestsScreen: React.FC<TestsScreenProps> = ({
  progress,
  onRecordTestScore,
  onOpenAiTutor,
}) => {
  const tests = DataProvider.getTests();
  const [activeTest, setActiveTest] = useState<LevelTest | null>(null);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: string }>({});
  const [testCompleted, setTestCompleted] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<number>(0);
  const [showCertModal, setShowCertModal] = useState<boolean>(false);

  const handleStartTest = (t: LevelTest) => {
    setActiveTest(t);
    setUserAnswers({});
    setTestCompleted(false);
    setFinalScore(0);
    setShowCertModal(false);
  };

  const handleSelectAnswer = (qId: string, option: string) => {
    if (testCompleted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  const handleSubmitTest = () => {
    if (!activeTest) return;

    let correctCount = 0;
    activeTest.questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / activeTest.questions.length) * 100);
    setFinalScore(score);
    setTestCompleted(true);
    onRecordTestScore(activeTest.id, score);

    if (score >= activeTest.passingScore) {
      setShowCertModal(true);
    }
  };

  const handleExitTest = () => {
    setActiveTest(null);
    setUserAnswers({});
    setTestCompleted(false);
  };

  return (
    <div className="space-y-6 pb-28 text-right max-w-3xl mx-auto">
      {showCertModal && activeTest && (
        <CertificateModal
          test={activeTest}
          score={finalScore}
          onClose={() => setShowCertModal(false)}
        />
      )}

      {!activeTest ? (
        <>
          {/* Main Tests Hub Banner */}
          <div className="rounded-3xl bg-[#161616] p-6 sm:p-7 border border-white/5 shadow-2xl space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  مركز الامتحانات والشهادات الرسمية
                </h2>
                <p className="text-xs sm:text-sm text-white/50 mt-0.5">
                  اختبر مستواك في كل مرحلة واحصل على شهادة اجتياز معتمدة
                </p>
              </div>
            </div>
          </div>

          {/* Test Cards List */}
          <div className="space-y-4">
            {tests.map((test) => {
              const previousScore = progress.testScores[test.id];
              const isPassed = previousScore !== undefined && previousScore >= test.passingScore;

              return (
                <div
                  key={test.id}
                  className="rounded-3xl bg-[#1E1E1E] p-6 sm:p-7 border border-white/5 shadow-xl space-y-4 hover:border-white/10 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          {test.level}
                        </span>
                        <span className="text-xs text-white/50 font-semibold flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {test.durationMinutes} دقيقة
                        </span>
                        <span className="text-xs text-white/40 font-semibold">
                          • {test.questions.length} أسئلة
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                        {test.titleArabic}
                      </h3>
                      <div className="text-xs font-bold text-white/50 mt-0.5" dir="ltr">
                        {test.titleGerman}
                      </div>

                      <p className="text-xs sm:text-sm text-white/60 mt-2 leading-relaxed">
                        {test.descriptionArabic}
                      </p>
                    </div>

                    {isPassed && (
                      <div className="px-3 py-1.5 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center gap-1.5 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>ناجح ({previousScore}%)</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/5">
                    <div className="text-xs text-white/50">
                      درجة النجاح المطلوبة: <strong className="text-emerald-400">{test.passingScore}%</strong>
                    </div>

                    <button
                      id={`btn-start-test-${test.id}`}
                      onClick={() => handleStartTest(test)}
                      className="px-5 py-2.5 rounded-xl bg-white text-black hover:bg-white/90 active:scale-95 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>{previousScore !== undefined ? "إعادة الاختبار" : "بدء الاختبار"}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        /* Active Test Flow */
        <div className="space-y-6">
          {/* Test Header */}
          <div className="flex items-center justify-between gap-3 sticky top-14 z-20 bg-[#161616]/95 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-xl">
            <button
              onClick={handleExitTest}
              className="flex items-center gap-1 text-xs font-semibold text-white/60 hover:text-white cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>خروج من الاختبار</span>
            </button>

            <div className="text-center">
              <div className="text-xs sm:text-sm font-bold text-white">{activeTest.titleArabic}</div>
              <div className="text-[11px] text-emerald-400 font-mono">
                أجبت على {Object.keys(userAnswers).length} من {activeTest.questions.length}
              </div>
            </div>

            <div className="text-xs font-bold px-3 py-1 rounded-lg bg-white/10 text-white">
              {activeTest.level}
            </div>
          </div>

          {/* Test Result Summary if Completed */}
          {testCompleted && (
            <div className={`p-6 sm:p-7 rounded-3xl border shadow-2xl space-y-4 ${finalScore >= activeTest.passingScore ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-200" : "bg-red-950/40 border-red-500/30 text-red-200"}`}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {finalScore >= activeTest.passingScore ? (
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-10 h-10 text-red-400 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {finalScore >= activeTest.passingScore
                        ? "تهانينا! لقد اجتزت الاختبار بنجاح 🎉"
                        : "للأسف لم تحقق درجة النجاح المطلوبة"}
                    </h3>
                    <p className="text-xs text-white/70 mt-0.5">
                      درجتك: <strong className="text-white text-base">{finalScore}%</strong> (حد النجاح {activeTest.passingScore}%)
                    </p>
                  </div>
                </div>

                {finalScore >= activeTest.passingScore && (
                  <button
                    onClick={() => setShowCertModal(true)}
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-all shadow-md cursor-pointer whitespace-nowrap"
                  >
                    عرض الشهادة 🏅
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Questions List */}
          <div className="space-y-4">
            {activeTest.questions.map((q, idx) => {
              const selected = userAnswers[q.id];
              const isCorrect = selected === q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className="rounded-3xl bg-[#1E1E1E] p-6 sm:p-7 border border-white/5 shadow-xl space-y-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 font-bold text-sm text-white">
                      <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span>{q.questionArabic}</span>
                    </div>

                    {q.promptGerman && (
                      <button
                        onClick={() => TTSManager.speak(q.promptGerman!)}
                        className="p-1.5 text-white/40 hover:text-emerald-400 transition-colors"
                        title="استمع"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {q.promptGerman && (
                    <div className="p-3.5 rounded-2xl bg-[#161616] border border-white/5 text-sm font-bold text-emerald-300 font-sans" dir="ltr">
                      {q.promptGerman}
                    </div>
                  )}

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((option, oIdx) => {
                      const isOptionSelected = selected === option;
                      let btnStyle = "bg-[#161616] hover:bg-[#252525] text-white/80 border-white/5";

                      if (isOptionSelected) {
                        btnStyle = "bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold";
                      }

                      if (testCompleted) {
                        if (option === q.correctAnswer) {
                          btnStyle = "bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold";
                        } else if (isOptionSelected) {
                          btnStyle = "bg-red-500/20 text-red-300 border-red-500";
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectAnswer(q.id, option)}
                          disabled={testCompleted}
                          className={`p-4 rounded-xl border text-xs text-right transition-all cursor-pointer ${btnStyle}`}
                          dir="auto"
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  {/* Post-test explanation */}
                  {testCompleted && (
                    <div className={`p-4 rounded-xl text-xs space-y-1 ${isCorrect ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30" : "bg-red-500/10 text-red-300 border border-red-500/30"}`}>
                      <div className="font-bold">
                        {isCorrect ? "إجابة صحيحة ✓" : `إجابة خاطئة! الصحيح: ${q.correctAnswer}`}
                      </div>
                      <p className="text-white/70">{q.explanationArabic}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit / Finish Button */}
          {!testCompleted ? (
            <div className="p-4 rounded-3xl bg-[#161616] border border-white/5 shadow-xl">
              <button
                id="btn-submit-exam"
                onClick={handleSubmitTest}
                disabled={Object.keys(userAnswers).length === 0}
                className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-black font-bold text-sm transition-all shadow-lg active:scale-98 cursor-pointer"
              >
                تسليم الإجابات وإنهاء الاختبار
              </button>
            </div>
          ) : (
            <div className="p-4 rounded-3xl bg-[#161616] border border-white/5 flex items-center justify-between gap-3 shadow-xl">
              <button
                onClick={() => handleStartTest(activeTest)}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>إعادة المحاولة</span>
              </button>

              <button
                onClick={handleExitTest}
                className="px-6 py-3 rounded-xl bg-white text-black hover:bg-white/90 font-bold text-xs cursor-pointer shadow-md"
              >
                العودة لمركز الاختبارات
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
