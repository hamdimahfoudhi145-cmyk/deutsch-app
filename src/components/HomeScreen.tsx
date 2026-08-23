import React from "react";
import { BookOpen, CheckSquare, Sparkles, Award, ArrowLeft, CheckCircle2, PlayCircle, Flame, Layers } from "lucide-react";
import { Level, TabType, UserProgress } from "../types";
import { DataProvider } from "../data/dataProvider";
import { TTSManager } from "../utils/tts";

interface HomeScreenProps {
  progress: UserProgress;
  onNavigateTab: (tab: TabType) => void;
  onSelectLevel: (level: Level) => void;
  onOpenAiTutor: () => void;
  onOpenLesson: (lessonId: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  progress,
  onNavigateTab,
  onSelectLevel,
  onOpenAiTutor,
  onOpenLesson,
}) => {
  const stats = DataProvider.getStats();
  const allLessons = DataProvider.getAllLessons();
  const completedLessons = progress.completedLessons.length;
  const progressPercent = Math.min(100, Math.round((completedLessons / allLessons.length) * 100));

  // Find next uncompleted lesson
  const nextLesson = allLessons.find((l) => !progress.completedLessons.includes(l.id)) || allLessons[0];

  const levels: { id: Level; title: string; subtitle: string; desc: string; count: number; color: string }[] = [
    {
      id: "A1.1",
      title: "المستوى التأسيسي A1.1",
      subtitle: "الحروف، النطق، التحيات، الجمل البسيطة",
      desc: "16 درساً شاملاً من الصفر التام",
      count: stats.a1_1_lessons,
      color: "from-blue-600 to-indigo-700",
    },
    {
      id: "A1.2",
      title: "المستوى المبتدئ A1.2",
      subtitle: "الساعة، Akkusativ، الأفعال المنفصلة، Perfekt",
      desc: "18 درساً للمواقف اليومية",
      count: stats.a1_2_lessons,
      color: "from-emerald-600 to-teal-700",
    },
    {
      id: "A2.1",
      title: "المستوى المتوسط الأول A2.1",
      subtitle: "Dativ، حروف الجر المتغيرة، weil، dass، wenn",
      desc: "18 درساً للطلاقة والتعبير",
      count: stats.a2_1_lessons,
      color: "from-amber-600 to-orange-700",
    },
    {
      id: "A2.2",
      title: "المستوى المتوسط المتقدم A2.2",
      subtitle: "المراسلات الرسمية، Passiv، Konjunktiv II، الموصول",
      desc: "18 درساً والتحضير لامتحان الشهادة",
      count: stats.a2_2_lessons,
      color: "from-purple-600 to-pink-700",
    },
  ];

  return (
    <div className="space-y-8 pb-28 text-right">
      {/* Welcome Banner & Resume Progress */}
      <div className="relative overflow-hidden rounded-3xl bg-[#161616] p-6 sm:p-8 border border-white/5 shadow-2xl">
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              مسار الإتقان الشامل من A1.1 إلى A2.2 🇩🇪
            </span>
            <span className="text-xs text-white/50 font-medium">
              {completedLessons} من {allLessons.length} درس مكتمل
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">
            مرحباً بك في طريق إتقان اللغة الألمانية
          </h2>
          <p className="text-white/60 text-sm mt-1.5 leading-relaxed max-w-2xl">
            منهاج تفاعلي منظم يبدأ معك من الصفر التام حتى امتحان الشهادة المعتمدة، مع شروحات عربية وافية ونطق صوتي مباشر.
          </p>

          {/* Overall Progress Bar */}
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-xs font-semibold text-white/70">
              <span>نسبة الإنجاز الكلية في المنهاج</span>
              <span className="text-emerald-400 font-mono font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full bg-white/5 h-2.5 rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(4, progressPercent)}%` }}
              />
            </div>
          </div>

          {/* Fast Resume Next Lesson Card */}
          {nextLesson && (
            <div className="mt-6 p-4 rounded-2xl bg-[#1E1E1E] border border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] text-emerald-400 font-bold tracking-wider">
                    واصل من حيث توقفت • مستوى {nextLesson.level} (الدرس {nextLesson.number})
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {nextLesson.titleArabic} <span className="text-white/40 font-normal">({nextLesson.titleGerman})</span>
                  </div>
                </div>
              </div>
              <button
                id="btn-resume-next-lesson"
                onClick={() => onOpenLesson(nextLesson.id)}
                className="px-5 py-2.5 rounded-xl bg-white text-black hover:bg-white/90 active:scale-95 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <span>ابدأ الدرس الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Learning Hub Grid & AI Assistant */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left/Main Column: Level Track Cards */}
        <section className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-xl font-bold text-white">من أين أبدأ؟</h2>
            <button
              onClick={() => onNavigateTab("lessons")}
              className="text-emerald-400 text-xs sm:text-sm font-semibold cursor-pointer hover:underline"
            >
              عرض المسار الكامل ({allLessons.length} درساً)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {levels.map((lvl) => {
              const levelLessons = allLessons.filter((l) => l.level === lvl.id);
              const levelCompleted = levelLessons.filter((l) => progress.completedLessons.includes(l.id)).length;
              const percent = levelLessons.length > 0 ? Math.round((levelCompleted / levelLessons.length) * 100) : 0;
              const isCompleted = percent === 100 && levelLessons.length > 0;
              const isInProgress = percent > 0 && percent < 100;

              let badgeStyle = "bg-white/5 text-white/40";
              let badgeText = "لم يبدأ بعد";
              let barColor = "bg-white/10";
              let emoji = "🌱";

              if (lvl.id === "A1.1") {
                emoji = "🌱";
                if (isCompleted) {
                  badgeStyle = "bg-emerald-500/20 text-emerald-400";
                  badgeText = "مكتمل 100%";
                  barColor = "bg-emerald-500";
                } else if (isInProgress) {
                  badgeStyle = "bg-emerald-500/20 text-emerald-400";
                  badgeText = `قيد التعلم (${percent}%)`;
                  barColor = "bg-emerald-500";
                }
              } else if (lvl.id === "A1.2") {
                emoji = "🗣️";
                if (isCompleted) {
                  badgeStyle = "bg-blue-500/20 text-blue-400";
                  badgeText = "مكتمل 100%";
                  barColor = "bg-blue-500";
                } else if (isInProgress) {
                  badgeStyle = "bg-blue-500/20 text-blue-400";
                  badgeText = `قيد التعلم (${percent}%)`;
                  barColor = "bg-blue-500";
                }
              } else if (lvl.id === "A2.1") {
                emoji = "📚";
                if (isCompleted) {
                  badgeStyle = "bg-purple-500/20 text-purple-400";
                  badgeText = "مكتمل 100%";
                  barColor = "bg-purple-500";
                } else if (isInProgress) {
                  badgeStyle = "bg-purple-500/20 text-purple-400";
                  badgeText = `قيد التعلم (${percent}%)`;
                  barColor = "bg-purple-500";
                }
              } else if (lvl.id === "A2.2") {
                emoji = "🌍";
                if (isCompleted) {
                  badgeStyle = "bg-orange-500/20 text-orange-400";
                  badgeText = "مكتمل 100%";
                  barColor = "bg-orange-500";
                } else if (isInProgress) {
                  badgeStyle = "bg-orange-500/20 text-orange-400";
                  badgeText = `قيد التعلم (${percent}%)`;
                  barColor = "bg-orange-500";
                }
              }

              return (
                <div
                  key={lvl.id}
                  onClick={() => {
                    onSelectLevel(lvl.id);
                    onNavigateTab("lessons");
                  }}
                  className={`p-6 rounded-3xl bg-[#1E1E1E] border border-white/5 hover:border-emerald-500/50 transition-all cursor-pointer group shadow-lg flex flex-col justify-between ${
                    isInProgress ? "ring-2 ring-emerald-500/20" : ""
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold ${badgeStyle}`}>
                        {badgeText}
                      </span>
                      <span className="text-3xl group-hover:scale-110 transition-transform">{emoji}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1">{lvl.id}</h3>
                    <p className="text-white/40 text-sm mb-4 leading-relaxed line-clamp-2">{lvl.subtitle}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-white/40 font-mono">
                      <span>{lvl.count} درساً</span>
                      <span>{levelCompleted} مكتمل</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${barColor} transition-all duration-500`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Right Column: AI Assistant Card & Statistics */}
        <aside className="lg:col-span-4 space-y-6">
          {/* AI Assistant Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 sm:p-7 rounded-3xl shadow-xl relative overflow-hidden text-white flex flex-col justify-between min-h-[220px]">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span>مساعد الذكاء الاصطناعي</span>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">24/7</span>
              </h3>
              <p className="text-white/80 text-sm mb-5 leading-relaxed">
                تدرب على المحادثة باللغة الألمانية، اسأل عن أي قاعدة، أو اطلب تصحيح كتابتك فورياً.
              </p>
              <button
                id="btn-open-ai-tutor-home"
                onClick={onOpenAiTutor}
                className="w-full py-3 bg-white text-indigo-700 hover:bg-white/90 rounded-xl font-bold shadow-lg active:scale-95 transition-all cursor-pointer text-sm"
              >
                ابدأ المحادثة الآن
              </button>
            </div>
            <div className="absolute -bottom-4 -left-4 text-8xl opacity-10 rotate-12 select-none pointer-events-none">
              🤖
            </div>
          </div>

          {/* Learning Statistics Card */}
          <div className="bg-[#161616] p-6 rounded-3xl border border-white/5 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>📊</span>
              <span>إحصائيات التعلم</span>
            </h3>

            <div className="space-y-4 pt-1">
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-white/50 text-sm">التمارين المكتملة</span>
                <span className="font-mono font-bold text-emerald-400">
                  {progress.completedExercises.length} / 500
                </span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-white/50 text-sm">الدروس المنجزة</span>
                <span className="font-mono font-bold text-blue-400">
                  {completedLessons} / {allLessons.length}
                </span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-white/50 text-sm">نصوص القراءة المتاحة</span>
                <span className="font-mono font-bold text-purple-400">
                  {DataProvider.getReadings().length} نصوص
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white/50 text-sm">الاختبارات المجتازة</span>
                <span className="font-mono font-bold text-orange-400">
                  {Object.keys(progress.testScores).length} اختبارات
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Quick Access Bento Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <button
          onClick={() => onNavigateTab("lessons")}
          className="p-5 rounded-2xl bg-[#1E1E1E] hover:bg-[#252525] border border-white/5 hover:border-white/10 text-right transition-all group flex flex-col justify-between cursor-pointer shadow-md"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-base text-white">70+ درساً</div>
            <div className="text-xs text-white/40 mt-0.5">قواعد ومفردات وصوتيات</div>
          </div>
        </button>

        <button
          onClick={() => onNavigateTab("exercises")}
          className="p-5 rounded-2xl bg-[#1E1E1E] hover:bg-[#252525] border border-white/5 hover:border-white/10 text-right transition-all group flex flex-col justify-between cursor-pointer shadow-md"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <CheckSquare className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-base text-white">500 تمرين</div>
            <div className="text-xs text-white/40 mt-0.5">تفاعلي مع التصحيح الفوري</div>
          </div>
        </button>

        <button
          onClick={() => onNavigateTab("reading")}
          className="p-5 rounded-2xl bg-[#1E1E1E] hover:bg-[#252525] border border-white/5 hover:border-white/10 text-right transition-all group flex flex-col justify-between cursor-pointer shadow-md"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-base text-white">نصوص القراءة</div>
            <div className="text-xs text-white/40 mt-0.5">مترجمة مع أسئلة فهم</div>
          </div>
        </button>

        <button
          onClick={() => onNavigateTab("tests")}
          className="p-5 rounded-2xl bg-[#1E1E1E] hover:bg-[#252525] border border-white/5 hover:border-white/10 text-right transition-all group flex flex-col justify-between cursor-pointer shadow-md"
        >
          <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-base text-white">الشهادات</div>
            <div className="text-xs text-white/40 mt-0.5">امتحانات تحديد ومستوى</div>
          </div>
        </button>
      </div>
    </div>
  );
};
