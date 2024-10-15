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
    id: '5',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/46632e5f7e5ea783ff5b6916aa67cc3a1e4db1b62a34c31e88869e31fb5266a6.jpg',
    name: 'Super LaMario',
    coach: 'Will',
    record: '5-0',
    pointsFor: 669.32,
    pointsAgainst: 535.5600000000001,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'C',
  },
  {
    id: '6',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/e7180887533d328d002f500a6008232752eeb20ad3418d992f7f529e286eca6b.jpg',
    name: 'Candace Bergen',
    coach: 'Zari',
    record: '4-1',
    pointsFor: 605.48,
    pointsAgainst: 537.5,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'C+',
  },
  {
    id: '9',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_3_j.png',
    name: 'Purdy Good',
    coach: 'Joe',
    record: '4-1',
    pointsFor: 550.26,
    pointsAgainst: 504.08,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'A-',
  },
  {
    id: '11',
    logo: 'https://s.yimg.com/ep/cx/blendr/v2/image-football-trophy-png_1721174536245.png',
    name: 'Jaiwalking to Victory',
    coach: 'Jaime',
    record: '3-2',
    pointsFor: 548.9,
    pointsAgainst: 606.54,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'F',
  },
  {
    id: '2',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_1_k.png',
    name: 'Pukamon',
    coach: 'Kara',
    record: '3-2',
    pointsFor: 534.58,
    pointsAgainst: 525.04,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'B-',
  },
  {
    id: '3',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/7de364b656ae287ccf84bb8e4f90fe3cf3c4befe3ef6dbde6c7ebfe0b2e82767.jpg',
    name: 'The Replacements',
    coach: 'Scott',
    record: '2-3',
    pointsFor: 636.42,
    pointsAgainst: 586.76,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'D-',
  },
  {
    id: '7',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_h.png',
    name: "Henry's Hustle",
    coach: 'Adam',
    record: '2-3',
    pointsFor: 589.26,
    pointsAgainst: 598.72,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'D+',
  },
  {
    id: '1',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/64203cd3285f9f3871a185bb8c326d4dd9b6d25bea1d1118293a6043b40fd93e.png',
    name: 'Joey B & The Q-tips',
    coach: 'Mason',
    record: '2-3',
    pointsFor: 575.3,
    pointsAgainst: 614.46,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'D',
  },
  {
    id: '4',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/4fecee0eff529cd27243f5a74b1730153aafee3a3a1adf65e4e090c617d2ddaf.jpg',
    name: 'Highly Questionable',
    coach: 'Zac',
    record: '2-3',
    pointsFor: 551.92,
    pointsAgainst: 581.44,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'B',
  },
  {
    id: '10',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_10_n.png',
    name: 'Nacua Matata',
    coach: 'Nick',
    record: '1-4',
    pointsFor: 601.26,
    pointsAgainst: 612.48,
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
    record: '1-4',
    pointsFor: 565.94,
    pointsAgainst: 578.72,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'B-',
  },
  {
    id: '12',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/1b498f79c6072a597eaf052dd6d2b1af353ba76db4a0b5e3721790e4b2a9fc5f.jpg',
    name: 'The Wharf Rats',
    coach: 'Marc',
    record: '1-4',
    pointsFor: 523.6,
    pointsAgainst: 670.94,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'A+',
  },
];

export const matchups: Matchup[] = [
  {
    homeTeam: {
      name: 'Nacua Matata',
      id: '10',
      score: 93.6,
    },
    awayTeam: {
      name: 'Joey B & The Q-tips',
      id: '1',
      score: 108.12,
    },
  },
  {
    homeTeam: {
      name: 'Super LaMario',
      id: '5',
      score: 102.92,
    },
    awayTeam: {
      name: 'Pukamon',
      id: '2',
      score: 99.16,
    },
  },
  {
    homeTeam: {
      name: 'Pattibot',
      id: '8',
      score: 133.26,
    },
    awayTeam: {
      name: 'The Replacements',
      id: '3',
      score: 110.46,
    },
  },
  {
    homeTeam: {
      name: "Henry's Hustle",
      id: '7',
      score: 117.26,
    },
    awayTeam: {
      name: 'Highly Questionable',
      id: '4',
      score: 124.62,
    },
  },
  {
    homeTeam: {
      name: 'Jaiwalking to Victory',
      id: '11',
      score: 144.9,
    },
    awayTeam: {
      name: 'Candace Bergen',
      id: '6',
      score: 98.12,
    },
  },
  {
    homeTeam: {
      name: 'The Wharf Rats',
      id: '12',
      score: 111.58,
    },
    awayTeam: {
      name: 'Purdy Good',
      id: '9',
      score: 113.9,
    },
  },
];

export const powerRankingsAuthor = 'Will Stone, Deputy Commissioner';

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
