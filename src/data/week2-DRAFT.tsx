/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import { Text } from '@mantine/core';
import Paragraph from '../components/News/MainArticle/Paragraph/Paragraph';
import Interview from '../components/News/MainArticle/Interview/Interview';
import TeamName from '../components/News/MainArticle/TeamName/TeamName';
import { Team, Matchup, MainArticle, JokeArticle, Player } from '../types';
import commissionerImg from '../images/Commissioner.jpg';
import Jersey from '../images/Giraffe_Jersey.png';
import GiraffeHelmet from '../images/Giraffe_Helmet.webp';

export const teams: Team[] = [
  {
    id: '10',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_10_n.png',
    name: 'Nacua Matata',
    coach: 'Nick',
    record: '1-0',
    pointsFor: 150.78,
    pointsAgainst: 88.54,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'A-',
  },
  {
    id: '12',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/1b498f79c6072a597eaf052dd6d2b1af353ba76db4a0b5e3721790e4b2a9fc5f.jpg',
    name: 'The Wharf Rats',
    coach: 'Marc',
    record: '1-0',
    pointsFor: 122.16,
    pointsAgainst: 115.76,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'A+',
  },
  {
    id: '6',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/e7180887533d328d002f500a6008232752eeb20ad3418d992f7f529e286eca6b.jpg',
    name: 'Candace Bergen',
    coach: 'Zari',
    record: '1-0',
    pointsFor: 121.06,
    pointsAgainst: 103.5,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'C+',
  },
  {
    id: '5',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/46632e5f7e5ea783ff5b6916aa67cc3a1e4db1b62a34c31e88869e31fb5266a6.jpg',
    name: 'Super LaMario',
    coach: 'Will',
    record: '1-0',
    pointsFor: 118.52,
    pointsAgainst: 104.18,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'C',
  },
  {
    id: '2',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_1_k.png',
    name: 'Pukamon',
    coach: 'Kara',
    record: '1-0',
    pointsFor: 113.48,
    pointsAgainst: 106.46,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'B-',
  },
  {
    id: '9',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_3_j.png',
    name: 'Purdy Good',
    coach: 'Joe',
    record: '1-0',
    pointsFor: 112.24,
    pointsAgainst: 91.72,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'A-',
  },
  {
    id: '8',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_11_j.png',
    name: 'Pattibot',
    coach: 'Jackie',
    record: '0-1',
    pointsFor: 115.76,
    pointsAgainst: 122.16,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'B-',
  },
  {
    id: '1',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/64203cd3285f9f3871a185bb8c326d4dd9b6d25bea1d1118293a6043b40fd93e.png',
    name: 'Joey B & The Q-tips',
    coach: 'Mason',
    record: '0-1',
    pointsFor: 106.46,
    pointsAgainst: 113.48,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'D',
  },
  {
    id: '3',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/7de364b656ae287ccf84bb8e4f90fe3cf3c4befe3ef6dbde6c7ebfe0b2e82767.jpg',
    name: 'The Replacements',
    coach: 'Scott',
    record: '0-1',
    pointsFor: 104.18,
    pointsAgainst: 118.52,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'D-',
  },
  {
    id: '4',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/4fecee0eff529cd27243f5a74b1730153aafee3a3a1adf65e4e090c617d2ddaf.jpg',
    name: 'Highly Questionable',
    coach: 'Zac',
    record: '0-1',
    pointsFor: 103.5,
    pointsAgainst: 121.06,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'B',
  },
  {
    id: '7',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_h.png',
    name: "Henry's Hustle",
    coach: 'Adam',
    record: '0-1',
    pointsFor: 91.72,
    pointsAgainst: 112.24,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'D+',
  },
  {
    id: '11',
    logo: 'https://s.yimg.com/ep/cx/blendr/v2/image-football-trophy-png_1721174536245.png',
    name: 'Jaiwalking to Victory',
    coach: 'Jaime',
    record: '0-1',
    pointsFor: 88.54,
    pointsAgainst: 150.78,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'F',
  },
];

export const matchups: Matchup[] = [
  {
    homeTeam: {
      name: 'Jaiwalking to Victory',
      id: '11',
      score: 0.0,
    },
    awayTeam: {
      name: 'Joey B & The Q-tips',
      id: '1',
      score: 28.5,
    },
  },
  {
    homeTeam: {
      name: 'Highly Questionable',
      id: '4',
      score: 0.0,
    },
    awayTeam: {
      name: 'Pukamon',
      id: '2',
      score: 0.0,
    },
  },
  {
    homeTeam: {
      name: "Henry's Hustle",
      id: '7',
      score: 4.0,
    },
    awayTeam: {
      name: 'The Replacements',
      id: '3',
      score: 9.76,
    },
  },
  {
    homeTeam: {
      name: 'The Wharf Rats',
      id: '12',
      score: 0.0,
    },
    awayTeam: {
      name: 'Super LaMario',
      id: '5',
      score: 37.5,
    },
  },
  {
    homeTeam: {
      name: 'Pattibot',
      id: '8',
      score: 0.0,
    },
    awayTeam: {
      name: 'Candace Bergen',
      id: '6',
      score: 6.6,
    },
  },
  {
    homeTeam: {
      name: 'Nacua Matata',
      id: '10',
      score: 0.0,
    },
    awayTeam: {
      name: 'Purdy Good',
      id: '9',
      score: 15.8,
    },
  },
];

export const article: MainArticle = {
  coverImage: Jersey,
  title: 'TBD',
  summary: 'Some summary',
  author: 'Some author',
  content: <Text>PLACEHOLDER</Text>,
};

export const jokeArticles: JokeArticle[] = [
  {
    title: 'TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

export const playerOfTheWeek: Player = {
  name: 'Dak Prescott',
  points: 31,
};
