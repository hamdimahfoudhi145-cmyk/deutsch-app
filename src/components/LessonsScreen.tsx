import React, { useState } from "react";
import { Search, CheckCircle2, Circle, ArrowLeft, BookOpen, Volume2 } from "lucide-react";
import { Lesson, Level, UserProgress } from "../types";
import { DataProvider } from "../data/dataProvider";
import { LessonDetail } from "./LessonDetail";
import { TTSManager } from "../utils/tts";

interface LessonsScreenProps {
  currentLevel: Level;
  onSelectLevel: (level: Level) => void;
  progress: UserProgress;
  onToggleCompleteLesson: (lessonId: string) => void;
  activeLessonId: string | null;
  onOpenLesson: (lessonId: string | null) => void;
  onOpenAiTutor: (prompt?: string) => void;
}

export const LessonsScreen: React.FC<LessonsScreenProps> = ({
  currentLevel,
  onSelectLevel,
  progress,
  onToggleCompleteLesson,
  activeLessonId,
  onOpenLesson,
  onOpenAiTutor,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const levels: Level[] = ["A1.1", "A1.2", "A2.1", "A2.2"];

  // If a specific lesson is active, show the LessonDetail view
  if (activeLessonId) {
    const activeLesson = DataProvider.getLessonById(activeLessonId);
    if (activeLesson) {
      return (
        <LessonDetail
          lesson={activeLesson}
          isCompleted={progress.completedLessons.includes(activeLesson.id)}
          onToggleComplete={onToggleCompleteLesson}
          onBack={() => onOpenLesson(null)}
          onOpenAiTutor={onOpenAiTutor}
        />
      );
    }
  }

  const lessons = DataProvider.getLessonsByLevel(currentLevel);
  const filteredLessons = lessons.filter((l) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      l.titleArabic.toLowerCase().includes(q) ||
      l.titleGerman.toLowerCase().includes(q) ||
      l.descriptionArabic.toLowerCase().includes(q) ||
      l.vocabulary.some((v) => v.german.toLowerCase().includes(q) || v.arabic.includes(q))
    );
  });

  const levelCompletedCount = lessons.filter((l) => progress.completedLessons.includes(l.id)).length;
  const levelPercent = Math.round((levelCompletedCount / Math.max(1, lessons.length)) * 100);

  return (
    <div className="space-y-6 pb-28 text-right">
      {/* Top Level Switcher & Stats */}
      <div className="rounded-3xl bg-[#161616] p-6 border border-white/5 shadow-2xl space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span>دروس المستوى {currentLevel}</span>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                {lessons.length} درساً
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-white/50 mt-1">
              منهاج متكامل من الصفر مع شروح القواعد والنطق والمفردات والتمارين
            </p>
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-emerald-400 font-mono">{levelPercent}% منجز</div>
            <div className="text-[11px] text-white/40 font-mono mt-0.5">{levelCompletedCount} / {lessons.length}</div>
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

        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن درس أو قاعدة أو كلمة بالألمانية أو العربية..."
            className="w-full bg-[#1E1E1E] border border-white/10 rounded-2xl py-3 pr-10 pl-4 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 transition-colors"
          />
          <Search className="w-4 h-4 text-white/40 absolute right-3.5 top-3.5" />
        </div>
      </div>

      {/* Lesson List */}
      <div className="space-y-3">
        {filteredLessons.length === 0 ? (
          <div className="text-center py-12 bg-[#161616] rounded-3xl border border-white/5">
            <BookOpen className="w-10 h-10 text-white/30 mx-auto mb-2" />
            <p className="text-white/40 text-sm font-semibold">لم يتم العثور على دروس تطابق بحثك</p>
          </div>
        ) : (
          filteredLessons.map((lesson) => {
            const isCompleted = progress.completedLessons.includes(lesson.id);

            return (
              <div
                key={lesson.id}
                id={`lesson-card-${lesson.id}`}
                onClick={() => onOpenLesson(lesson.id)}
                className={`p-5 rounded-3xl border transition-all cursor-pointer group shadow-lg hover:scale-[1.005] ${
                  isCompleted
                    ? "bg-[#1E1E1E] border-emerald-500/30 hover:border-emerald-500/60"
                    : "bg-[#1E1E1E] border-white/5 hover:border-emerald-500/40"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    {/* Status Circle */}
                    <div className="mt-1 flex-shrink-0">
                      {isCompleted ? (
                        <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                      ) : (
                        <div className="w-9 h-9 rounded-full bg-white/5 text-white/50 flex items-center justify-center border border-white/10 font-bold text-xs">
                          {lesson.number}
                        </div>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-emerald-400">
                          الدرس {lesson.number}
                        </span>
                        <span className="text-white/30">•</span>
                        <span className="text-[11px] font-medium text-white/50" dir="ltr">
                          {lesson.titleGerman}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {lesson.titleArabic}
                      </h3>

                      <p className="text-xs sm:text-sm text-white/60 line-clamp-2 leading-relaxed">
                        {lesson.descriptionArabic}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] text-white/50">
                        <span className="bg-[#161616] px-3 py-1 rounded-xl border border-white/5">
                          {lesson.vocabulary.length} مفردات
                        </span>
                        <span className="bg-[#161616] px-3 py-1 rounded-xl border border-white/5">
                          {lesson.examples.length} أمثلة صوتية
                        </span>
                        {lesson.readingPassage && (
                          <span className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-xl border border-purple-500/20">
                            نص قراءة وفهم
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 text-white/60 group-hover:bg-emerald-500 group-hover:text-black transition-all flex-shrink-0">
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
