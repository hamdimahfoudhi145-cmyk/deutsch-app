import { Lesson, Exercise, ReadingPassageItem, LevelTest, Level } from "../types";
import { lessonsA1_1 } from "./lessonsA1_1";
import { lessonsA1_2 } from "./lessonsA1_2";
import { lessonsA2_1 } from "./lessonsA2_1";
import { lessonsA2_2 } from "./lessonsA2_2";
import { getExercisesA1_1 } from "./exercisesA1_1";
import { getExercisesA1_2 } from "./exercisesA1_2";
import { getExercisesA2_1 } from "./exercisesA2_1";
import { getExercisesA2_2 } from "./exercisesA2_2";
import { readingsData } from "./readingsData";
import { testsData } from "./testsData";

export class DataProvider {
  private static cachedLessons: Lesson[] | null = null;
  private static cachedExercises: Exercise[] | null = null;

  public static getAllLessons(): Lesson[] {
    if (!this.cachedLessons) {
      this.cachedLessons = [
        ...lessonsA1_1,
        ...lessonsA1_2,
        ...lessonsA2_1,
        ...lessonsA2_2,
      ];
    }
    return this.cachedLessons;
  }

  public static getLessonsByLevel(level: Level): Lesson[] {
    return this.getAllLessons().filter((l) => l.level === level);
  }

  public static getLessonById(id: string): Lesson | undefined {
    return this.getAllLessons().find((l) => l.id === id);
  }

  public static getAllExercises(): Exercise[] {
    if (!this.cachedExercises) {
      this.cachedExercises = [
        ...getExercisesA1_1(),
        ...getExercisesA1_2(),
        ...getExercisesA2_1(),
        ...getExercisesA2_2(),
      ];
    }
    return this.cachedExercises;
  }

  public static getExercisesByLevel(level: Level): Exercise[] {
    return this.getAllExercises().filter((e) => e.level === level);
  }

  public static getReadings(): ReadingPassageItem[] {
    return readingsData;
  }

  public static getReadingsByLevel(level: Level): ReadingPassageItem[] {
    return readingsData.filter((r) => r.level === level);
  }

  public static getTests(): LevelTest[] {
    return testsData;
  }

  public static getTestById(id: string): LevelTest | undefined {
    return testsData.find((t) => t.id === id);
  }

  public static getStats() {
    const lessons = this.getAllLessons();
    const exercises = this.getAllExercises();
    return {
      totalLessons: lessons.length,
      totalExercises: exercises.length,
      a1_1_lessons: lessons.filter((l) => l.level === "A1.1").length,
      a1_2_lessons: lessons.filter((l) => l.level === "A1.2").length,
      a2_1_lessons: lessons.filter((l) => l.level === "A2.1").length,
      a2_2_lessons: lessons.filter((l) => l.level === "A2.2").length,
      totalReadings: readingsData.length,
      totalTests: testsData.length,
    };
  }
}
