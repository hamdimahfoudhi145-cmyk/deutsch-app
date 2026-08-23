import { UserProgress, MistakeRecord, Level } from "../types";

const STORAGE_KEY = "deutsch_lernen_progress_v2";

const defaultProgress: UserProgress = {
  completedLessons: [],
  completedExercises: [],
  correctExercises: [],
  mistakes: [],
  testScores: {},
  currentLevel: "A1.1",
};

export class StorageManager {
  public static getProgress(): UserProgress {
    if (typeof window === "undefined") return defaultProgress;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultProgress;
      return { ...defaultProgress, ...JSON.parse(raw) };
    } catch (e) {
      console.error("Failed to load progress from localStorage", e);
      return defaultProgress;
    }
  }

  public static saveProgress(progress: UserProgress): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error("Failed to save progress to localStorage", e);
    }
  }

  public static toggleCompleteLesson(lessonId: string): UserProgress {
    const current = this.getProgress();
    if (current.completedLessons.includes(lessonId)) {
      current.completedLessons = current.completedLessons.filter((id) => id !== lessonId);
    } else {
      current.completedLessons.push(lessonId);
    }
    this.saveProgress(current);
    return current;
  }

  public static recordExerciseScore(exerciseId: string | number, isCorrect: boolean): UserProgress {
    const current = this.getProgress();
    if (!current.completedExercises.includes(exerciseId)) {
      current.completedExercises.push(exerciseId);
    }
    if (isCorrect && !current.correctExercises.includes(exerciseId)) {
      current.correctExercises.push(exerciseId);
    }
    this.saveProgress(current);
    return current;
  }

  public static recordTestScore(testId: string, score: number): UserProgress {
    const current = this.getProgress();
    current.testScores[testId] = score;
    this.saveProgress(current);
    return current;
  }

  public static saveCurrentLevel(level: Level): UserProgress {
    const current = this.getProgress();
    current.currentLevel = level;
    this.saveProgress(current);
    return current;
  }

  public static resetProgress(): UserProgress {
    this.saveProgress(defaultProgress);
    return defaultProgress;
  }
}
