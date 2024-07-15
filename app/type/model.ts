export interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string; // {"admin", "user"} // ['ROLE_ADMIN', 'ROLE_USER']
  email: string;
  birthDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
  phone?: string;
  photoURL?: string;
}
interface useDate {
  createdAt: Date;
  updatedAt: Date;
}
export interface Chapter {
  id: number;
  title: string;
  slug: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  presentationImageUrl?: string;
  presentationVideo?: string;
  publishStatus: boolean; // Pour gerer le broullon
}

export interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  publishStatus: boolean; // Pour gerer le broullon
  presentationImageUrl?: string;
  presentationVideo?: string;
  chapters: Chapter[];
}

// Assesment > Question > Answer

export interface Assessment {
  id: number;
  title: string;
  slug: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  publishStatus: boolean; // Pour gerer le broullon
  questions: Question[];
  resources: {
    type: string; // "Course" | "Chapter"
    id: number;
  };
}

export interface Question {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  answers: Answer[];
}

export interface Answer {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  isCorrect: boolean;
}

// Relation between user and assensment

//
export interface UserAssessment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  assessment: Assessment;
  questions: {
    questionId: number;
    asnwers: Answer[];
  }[];
  score: number;
  status: string; // {"pending", "completed", "failed"}
}

export interface Log {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  action: string;
  description: string;
}

// Don't want for the moment
export interface Comment {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  course: Course;
}
