export type Level = "A1.1" | "A1.2" | "A2.1" | "A2.2";

export type Difficulty = "EASY" | "MEDIUM" | "HARD";

export type TabType = "home" | "lessons" | "exercises" | "reading" | "tests";

export type ExerciseType =
  | "MULTIPLE_CHOICE"
  | "FILL_BLANK"
  | "TRANSLATION_DE_AR"
  | "TRANSLATION_AR_DE"
  | "WORD_ORDER"
  | "ARTICLE_CHOICE"
  | "VERB_CONJUGATION"
  | "multiple_choice"
  | "fill_in_blank"
  | "article_selection"
  | "word_order"
  | "translation"
  | "error_correction";

export interface Exercise {
  id: string | number;
  level: Level;
  category?: string;
  topic?: string;
  difficulty?: Difficulty;
  type: ExerciseType;
  questionArabic?: string;
  question?: string;
  promptGerman?: string;
  options?: string[];
  correctAnswer: string;
  words?: string[];
  explanationArabic: string;
  phonetic?: string;
}

export interface VocabularyItem {
  german: string;
  arabic: string;
  phonetic: string;
  article?: "der" | "die" | "das" | "";
  plural?: string;
  exampleSentence?: string;
  exampleArabic?: string;
}

export interface GrammarRule {
  rule: string;
  explanation: string;
  example?: string;
  exampleArabic?: string;
}

export interface LessonExample {
  german: string;
  arabic: string;
  phonetic?: string;
}

export interface ReadingPassageQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface ReadingPassage {
  german: string;
  arabic: string;
  questions?: ReadingPassageQuestion[];
}

export interface ReadingPassageItem {
  id: string;
  level: Level;
  titleArabic: string;
  titleGerman: string;
  descriptionArabic: string;
  germanText: string;
  arabicTranslation: string;
  vocabularyHighlights: { german: string; arabic: string; phonetic?: string }[];
  questions: ReadingPassageQuestion[];
}

export interface MiniExercise {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface Lesson {
  id: string;
  level: Level;
  number: number;
  titleArabic: string;
  titleGerman: string;
  descriptionArabic: string;
  grammarExplanation: string;
  grammarRules: GrammarRule[];
  examples: LessonExample[];
  vocabulary: VocabularyItem[];
  readingPassage?: ReadingPassage;
  miniExercises?: MiniExercise[];
}

export interface TestQuestion {
  id: string;
  questionArabic: string;
  promptGerman?: string;
  options: string[];
  correctAnswer: string;
  explanationArabic: string;
}

export interface LevelTest {
  id: string;
  level: Level | "A1" | "A2";
  titleArabic: string;
  titleGerman: string;
  descriptionArabic: string;
  durationMinutes: number;
  passingScore: number;
  questions: TestQuestion[];
}

export interface MistakeRecord {
  id: string;
  exerciseId: string | number;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  explanationArabic: string;
  level: Level;
  difficulty?: Difficulty;
  timestamp: number;
}

export interface UserProgress {
  completedLessons: string[];
  completedExercises: (string | number)[];
  correctExercises: (string | number)[];
  mistakes: MistakeRecord[];
  testScores: Record<string, number>;
  currentLevel: Level;
  streakCount?: number;
}
