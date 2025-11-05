
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface Scheme {
  id: string;
  name: string;
  description: string;
  category: string;
  department: string;
  eligibility: string;
  howToApply: string;
  officialLink: string;
  image: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  imageURL: string;
  videoLink?: string;
}

export interface LearningMaterial {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'article' | 'infographic';
  mediaURL: string;
  tags: string[];
}

export interface CommunityPost {
  id: string;
  author: string;
  avatar: string;
  timestamp: string;
  content: string;
  comments: Comment[];
}

export interface Comment {
    id: string;
    author: string;
    avatar: string;
    timestamp: string;
    content: string;
}

export enum Language {
  EN = 'en',
  HI = 'hi',
}

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}
