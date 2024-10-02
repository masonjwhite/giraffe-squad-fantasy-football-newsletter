/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import { Anchor } from '@mantine/core';
import Paragraph from '../components/News/MainArticle/Paragraph/Paragraph';
import { Team, Matchup, MainArticle, JokeArticle, Player } from '../types';
import Week4 from '../images/week4.png';
import GiraffeHelmet from '../images/Giraffe_Helmet.webp';

export const teams: Team[] = [
  {
    id: '5',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/46632e5f7e5ea783ff5b6916aa67cc3a1e4db1b62a34c31e88869e31fb5266a6.jpg',
    name: 'Super LaMario',
    coach: 'Will',
    record: '4-0',
    pointsFor: 547.1,
    pointsAgainst: 420.06000000000006,
    powerRank: 1,
    powerRankText: (
      <Anchor href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2JxaXRzcXl5OXk0dWZpYXJlZGFoa2IzaWNobjFvcm82Zno1NjdocyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aw9vw51zjTa8g/giphy.gif" target="_blank">
        Heavy is the head that wears the crown
      </Anchor>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'C',
  },
  {
    id: '9',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_3_j.png',
    name: 'Purdy Good',
    coach: 'Joe',
    record: '4-0',
    pointsFor: 430.0,
    pointsAgainst: 377.06,
    powerRank: 2,
    powerRankText: (
      <Anchor href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc21wdW9wanlhOHBkNngwMTE0dGZjNnppdGN0eXoycXJlNzQ0MmljYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WrJ8x0niiblWEoo7hE/giphy.gif" target="_blank">
        Hey Joe, how's it feel to be 4-0?
      </Anchor>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'A-',
  },
  {
    id: '6',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/e7180887533d328d002f500a6008232752eeb20ad3418d992f7f529e286eca6b.jpg',
    name: 'Candace Bergen',
    coach: 'Zari',
    record: '3-1',
    pointsFor: 507.7,
    pointsAgainst: 451.9,
    powerRank: 4,
    powerRankText: (
      <Anchor href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2xld3A0ZWl0cmdibW4xN2IzOWZzc2U5MDkzbng5cmNrcjdoZ2hxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oFyCVxsQn6RBa0r5u/giphy.gif" target="_blank">
        One Dak to rule them all
      </Anchor>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'C+',
  },
  {
    id: '2',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_1_k.png',
    name: 'Pukamon',
    coach: 'Kara',
    record: '3-1',
    pointsFor: 448.98,
    pointsAgainst: 427.26,
    powerRank: 3,
    powerRankText: (
      <Anchor href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDUyMXY4bXV3MHFkOGJkb2JnMDluaG5uenBjbDF0eDF5NjVmYnh0OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/slVWEctHZKvWU/giphy.gif" target="_blank">
        Cruisin' without Puka
      </Anchor>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'B-',
  },
  {
    id: '3',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/7de364b656ae287ccf84bb8e4f90fe3cf3c4befe3ef6dbde6c7ebfe0b2e82767.jpg',
    name: 'The Replacements',
    coach: 'Scott',
    record: '2-2',
    pointsFor: 516.98,
    pointsAgainst: 465.3,
    powerRank: 6,
    powerRankText: (
      <Anchor href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTh6cnl0b251OG9keTJpaGt1eDJ0OXB4NWR2YXBua2tucmI1dnJpYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3nFbFBjBDiYg2rK0/giphy.gif" target="_blank">
        So long, Rashee Rice 👋🏼
      </Anchor>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'D-',
  },
  {
    id: '1',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/64203cd3285f9f3871a185bb8c326d4dd9b6d25bea1d1118293a6043b40fd93e.png',
    name: 'Joey B & The Q-tips',
    coach: 'Mason',
    record: '2-2',
    pointsFor: 470.5,
    pointsAgainst: 448.90000000000003,
    powerRank: 5,
    powerRankText: (
      <Anchor href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmo3aGhkcWlha2N6c2N1cWxqdGVxbWh1a3Zkem5tcGZsZW9reDQydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt4B0tZYVO7DTkk/giphy.gif" target="_blank">
        Live look at me watching Mark Andrews every week
      </Anchor>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'D',
  },
  {
    id: '11',
    logo: 'https://s.yimg.com/ep/cx/blendr/v2/image-football-trophy-png_1721174536245.png',
    name: 'Jaiwalking to Victory',
    coach: 'Jaime',
    record: '2-2',
    pointsFor: 418.06,
    pointsAgainst: 504.1,
    powerRank: 7,
    powerRankText: (
      <Anchor href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTRnNDh6cHJ3MGIzeDE3azQzZGZ6d2VqYWkybG5qMjM5aGRhem5xcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AE7Qa6j57XuRzeMkgh/giphy.gif" target="_blank">
        Jaime, how many wins do you have in your first season?
      </Anchor>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'F',
  },
  {
    id: '10',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_10_n.png',
    name: 'Nacua Matata',
    coach: 'Nick',
    record: '1-3',
    pointsFor: 485.76,
    pointsAgainst: 490.26,
    powerRank: 9,
    powerRankText: (
      <Anchor href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHdmNmVyaDg2bjMwamp3M284cnNyOTkzdjhzeHpoOHFrbnRhOGRtOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XzkGfRsUweB9ouLEsE/giphy.gif" target="_blank">
        "Coch Nick, I don't feel so good" - Anthony Richardson
      </Anchor>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'A-',
  },
  {
    id: '4',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/4fecee0eff529cd27243f5a74b1730153aafee3a3a1adf65e4e090c617d2ddaf.jpg',
    name: 'Highly Questionable',
    coach: 'Zac',
    record: '1-3',
    pointsFor: 430.46,
    pointsAgainst: 462.00000000000006,
    powerRank: 8,
    powerRankText: (
      <Anchor href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3Rsc3UwNjl4dWU5NmpoZTBtOXA4b2hwa242MmVwdzZqNmU3ZGprbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JejHs0YIAUpcAWQ/giphy.gif" target="_blank">
        Christian McCaffrey in Germany
      </Anchor>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'B',
  },
  {
    id: '7',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_h.png',
    name: "Henry's Hustle",
    coach: 'Adam',
    record: '1-3',
    pointsFor: 423.7,
    pointsAgainst: 493.92,
    powerRank: 10,
    powerRankText: (
      <Anchor href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTU1eGViYjU3aWNyZ2J6Mjdlem9rc3hva2I4dTVtdW9zNG1nZGtraCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1VRSg6CslKVZoxWBu/giphy.gif" target="_blank">
        Adam's starting RBs this week
      </Anchor>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'D+',
  },
  {
    id: '12',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/1b498f79c6072a597eaf052dd6d2b1af353ba76db4a0b5e3721790e4b2a9fc5f.jpg',
    name: 'The Wharf Rats',
    coach: 'Marc',
    record: '1-3',
    pointsFor: 421.16,
    pointsAgainst: 540.1,
    powerRank: 11,
    powerRankText: (
      <Anchor href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWQxMzBtZTZ0eTBtc2FhY2tkMzZzc25qZDNrenR6Z3U1dWdnaXoyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iH1rdIKYvNhOu5Z8RY/giphy.gif" target="_blank">
        Mark adjusting his weekly Yahoo grades
      </Anchor>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'A+',
  },
  {
    id: '8',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_11_j.png',
    name: 'Pattibot',
    coach: 'Jackie',
    record: '0-4',
    pointsFor: 438.92,
    pointsAgainst: 458.46000000000004,
    powerRank: 12,
    powerRankText: (
      <Anchor href="https://media.tenor.com/ki8ZqVxvJswAAAAe/uh-oh.png" target="_blank">
        You know what's coming....
      </Anchor>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'B-',
  },
];

export const matchups: Matchup[] = [
  {
    homeTeam: {
      name: 'The Replacements',
      id: '3',
      score: 111.8,
    },
    awayTeam: {
      name: 'Joey B & The Q-tips',
      id: '1',
      score: 113.58,
    },
  },
  {
    homeTeam: {
      name: 'The Wharf Rats',
      id: '12',
      score: 96.5,
    },
    awayTeam: {
      name: 'Pukamon',
      id: '2',
      score: 113.58,
    },
  },
  {
    homeTeam: {
      name: 'Purdy Good',
      id: '9',
      score: 109.42,
    },
    awayTeam: {
      name: 'Highly Questionable',
      id: '4',
      score: 97.02,
    },
  },
  {
    homeTeam: {
      name: 'Candace Bergen',
      id: '6',
      score: 103.84,
    },
    awayTeam: {
      name: 'Super LaMario',
      id: '5',
      score: 123.52,
    },
  },
  {
    homeTeam: {
      name: 'Nacua Matata',
      id: '10',
      score: 113.94,
    },
    awayTeam: {
      name: "Henry's Hustle",
      id: '7',
      score: 123.02,
    },
  },
  {
    homeTeam: {
      name: 'Jaiwalking to Victory',
      id: '11',
      score: 102.1,
    },
    awayTeam: {
      name: 'Pattibot',
      id: '8',
      score: 100.12,
    },
  },
];

export const powerRankingsAuthor = 'Mason White, Commissioner';

export const article: MainArticle = {
  coverImage: Week4,
  title: "Takin' Goff",
  summary: "Jared Goff reached the stratosphere with an absolutely dominant Week 4 performance. Too bad he was on Pattibot's bench. 📉",
  author: 'Mason White, Commmissioner',
  content: (
    <>
      <Paragraph>
        Hey friends 👋🏼!
      </Paragraph>
      <Paragraph>
        Both Will and I have been on vacation this week. As a result, there will be no main article content this week.
      </Paragraph>
      <Paragraph>
        The article will be back in all it's glory next week!
      </Paragraph>
    </>
  ),
};

export const jokeArticles: JokeArticle[] = [
  {
    title: "HOLLYWOOD: Will Levis to star in Dawson's Creek Reboot",
    link: 'https://preview.redd.it/will-levis-out-here-auditioning-for-a-dawsons-reboot-v0-acix9uqjn4sd1.jpeg?auto=webp&s=c4bd0c756271338a9a2e87c5111b0808d40ae560',
  },
  {
    title: 'Trevor Lawrence vows to shave head if Jaguars win a game this year',
    link: 'https://preview.redd.it/who-does-bald-trevor-lawrence-look-like-best-answer-gets-a-v0-tkyhhifkvceb1.jpeg?width=2532&format=pjpg&auto=webp&s=e75596c0fc31d60f7e2a938ea1ce5075e955d337',
  },
  {
    title: 'TV: Anna Delvey replaced with a brick wall on "Dancing with the Stars" -- showrunners claim the wall has vastly superior emotional range',
    link: 'https://www.youtube.com/shorts/2S6mA0jOBKU',
  },
  {
    title: 'PHOTO: Young man from Brentwood, NH disappoints parents with long hair phase',
    link: 'https://ibb.co/R2fGYWZ',
  },
  {
    title: 'SNL embarks on 50th season, which ironically is how many people still watch the show',
    link: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGdoZm1wNGN0MXBocTFrODhydjNhYjdzZ3Q1aWJvZnU2NGQzOTRoeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AIltIx8QtZRksvcH8l/giphy.gif',
  },
];

export const playerOfTheWeek: Player = {
  name: 'Derrick Henry',
  points: 35.9,
};
