import { ReactNode } from 'react';

export interface Team {
  id: string;
  logo: string;
  name: string;
  coach: string;
  record: string;
  pointsFor: number;
  pointsAgainst: number;
  powerRank: number;
  powerRankText: string | ReactNode;
  helmetImage?: string;
  draftGrade: string;
}

export interface Matchup {
  homeTeam: {
    name: string;
    id: string;
    score: number;
  };
  awayTeam: {
    name: string;
    id: string;
    score: number;
  };
}

export interface MainArticle {
  coverImage: string;
  title: string;
  summary: string;
  author: string;
  content: ReactNode;
}

export interface JokeArticle {
  title: string;
  link: string;
}

export interface Player {
  name: string;
  points: number;
  image?: string;
  coach?: string;
}
