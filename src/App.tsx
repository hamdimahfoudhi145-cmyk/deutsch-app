import React, { useState, useEffect } from "react";
import { Level, TabType, UserProgress } from "./types";
import { StorageManager } from "./utils/storage";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { HomeScreen } from "./components/HomeScreen";
import { LessonsScreen } from "./components/LessonsScreen";
import { ExercisesScreen } from "./components/ExercisesScreen";
import { ReadingScreen } from "./components/ReadingScreen";
import { TestsScreen } from "./components/TestsScreen";
import { AiTutorModal } from "./components/AiTutorModal";

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => StorageManager.getProgress());
  const [currentTab, setCurrentTab] = useState<TabType>("home");
  const [currentLevel, setCurrentLevel] = useState<Level>(progress.currentLevel || "A1.1");
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [isAiTutorOpen, setIsAiTutorOpen] = useState<boolean>(false);
  const [aiTutorInitialPrompt, setAiTutorInitialPrompt] = useState<string | undefined>(undefined);

  // Sync state changes with local storage
  const handleSelectLevel = (level: Level) => {
    setCurrentLevel(level);
    const updated = StorageManager.saveCurrentLevel(level);
    setProgress(updated);
  };

  const handleToggleCompleteLesson = (lessonId: string) => {
    const updated = StorageManager.toggleCompleteLesson(lessonId);
    setProgress(updated);
  };

  const handleRecordExerciseScore = (exerciseId: string, isCorrect: boolean) => {
    const updated = StorageManager.recordExerciseScore(exerciseId, isCorrect);
    setProgress(updated);
  };

  const handleRecordTestScore = (testId: string, score: number) => {
    const updated = StorageManager.recordTestScore(testId, score);
    setProgress(updated);
  };

  const handleOpenAiTutor = (prompt?: string) => {
    setAiTutorInitialPrompt(prompt);
    setIsAiTutorOpen(true);
  };

  const handleOpenLesson = (lessonId: string | null) => {
    setActiveLessonId(lessonId);
    if (lessonId) {
      setCurrentTab("lessons");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-['Cairo',sans-serif]">
      {/* Top Status Bar Simulation */}
      <div className="w-full bg-[#0A0A0A] px-4 py-1 text-[11px] font-mono text-white/40 flex items-center justify-between border-b border-white/5 select-none">
        <div className="flex items-center gap-2">
          <span>09:41</span>
          <span>•</span>
          <span className="text-emerald-400 font-bold">Deutsch Lernen 🇩🇪</span>
        </div>
        <div className="flex items-center gap-2">
          <span>5G</span>
          <span>100% 🔋</span>
        </div>
      </div>

      {/* Main App Bar Header */}
      <Header
        currentLevel={currentLevel}
        onSelectLevel={handleSelectLevel}
        onOpenAiTutor={() => handleOpenAiTutor()}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6">
        {currentTab === "home" && (
          <HomeScreen
            progress={progress}
            onNavigateTab={(tab) => {
              setCurrentTab(tab);
              if (tab !== "lessons") setActiveLessonId(null);
            }}
            onSelectLevel={handleSelectLevel}
            onOpenAiTutor={() => handleOpenAiTutor()}
            onOpenLesson={handleOpenLesson}
          />
        )}

        {currentTab === "lessons" && (
          <LessonsScreen
            currentLevel={currentLevel}
            onSelectLevel={handleSelectLevel}
            progress={progress}
            onToggleCompleteLesson={handleToggleCompleteLesson}
            activeLessonId={activeLessonId}
            onOpenLesson={setActiveLessonId}
            onOpenAiTutor={handleOpenAiTutor}
          />
        )}

        {currentTab === "exercises" && (
          <ExercisesScreen
            currentLevel={currentLevel}
            onSelectLevel={handleSelectLevel}
            progress={progress}
            onRecordExerciseScore={handleRecordExerciseScore}
            onOpenAiTutor={handleOpenAiTutor}
          />
        )}

        {currentTab === "reading" && (
          <ReadingScreen
            currentLevel={currentLevel}
            onSelectLevel={handleSelectLevel}
            onOpenAiTutor={handleOpenAiTutor}
          />
        )}

        {currentTab === "tests" && (
          <TestsScreen
            progress={progress}
            onRecordTestScore={handleRecordTestScore}
            onOpenAiTutor={handleOpenAiTutor}
          />
        )}
      </main>

      {/* Persistent Bottom Navigation */}
      <Navigation
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          if (tab !== "lessons") setActiveLessonId(null);
        }}
        completedLessonsCount={progress.completedLessons.length}
      />

      {/* AI Tutor Floating/Modal Assistant */}
      {isAiTutorOpen && (
        <AiTutorModal
          currentLevel={currentLevel}
          initialPrompt={aiTutorInitialPrompt}
          onClose={() => {
            setIsAiTutorOpen(false);
            setAiTutorInitialPrompt(undefined);
          }}
        />
      )}
    </div>
  );
}
