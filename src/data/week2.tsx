import { Text, Mark } from '@mantine/core';
import { Team, Matchup, Article } from '../types';
import Jersey from '../images/Giraffe_Jersey.png';

export const teams: Team[] = [
  {
      id: 'adam',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_a.png',
      name: 'TBD',
      coach: 'Adam LaCasse',
      record: '0-0',
      pointsFor: 0,
      pointsAgainst: 0,
      powerRank: 1,
      powerRankText: 'Adam Week 2 Power Ranking',
    },
    {
      id: 'jackie',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_j.png',
      name: 'TBD',
      coach: 'Jackie Munger',
      record: '0-0',
      pointsFor: 0,
      pointsAgainst: 0,
      powerRank: 2,
      powerRankText: 'Jackie Week 2 Power Ranking',
    },
    {
      id: 'jaime',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_j.png',
      name: 'TBD',
      coach: 'Jaime Sheppard',
      record: '0-0',
      pointsFor: 0,
      pointsAgainst: 0,
      powerRank: 3,
      powerRankText: 'Jaime Week 2 Power Ranking',
    },
    {
      id: 'joe',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_j.png',
      name: 'TBD',
      coach: 'Joe Pecosky',
      record: '0-0',
      pointsFor: 0,
      pointsAgainst: 0,
      powerRank: 4,
      powerRankText: 'Joe Week 2 Power Ranking',
    },
    {
      id: 'kara',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_k.png',
      name: 'TBD',
      coach: 'Kara Prescott',
      record: '0-0',
      pointsFor: 0,
      pointsAgainst: 0,
      powerRank: 5,
      powerRankText: 'Kara Week 2 Power Ranking',
    },
    {
      id: 'marc',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_m.png',
      name: 'TBD',
      coach: 'Marc Bouvier',
      record: '0-0',
      pointsFor: 0,
      pointsAgainst: 0,
      powerRank: 6,
      powerRankText: 'Marc Week 2 Power Ranking',
    },
    {
      id: 'mason',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_m.png',
      name: 'TBD',
      coach: 'Mason White',
      record: '0-0',
      pointsFor: 0,
      pointsAgainst: 0,
      powerRank: 7,
      powerRankText: 'Mason Week 2 Power Ranking',
    },
    {
      id: 'nick',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_n.png',
      name: 'TBD',
      coach: 'Nick Bradfish',
      record: '0-0',
      pointsFor: 0,
      pointsAgainst: 0,
      powerRank: 8,
      powerRankText: 'Nick Week 2 Power Ranking',
    },
    {
      id: 'scott',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_s.png',
      name: 'TBD',
      coach: 'Scott Quinn',
      record: '0-0',
      pointsFor: 0,
      pointsAgainst: 0,
      powerRank: 9,
      powerRankText: 'Scott Week 2 Power Ranking',
    },
    {
      id: 'will',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_w.png',
      name: 'TBD',
      coach: 'Will Stone',
      record: '0-0',
      pointsFor: 0,
      pointsAgainst: 0,
      powerRank: 10,
      powerRankText: 'Will Week 2 Power Ranking',
    },
    {
      id: 'zac',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_z.png',
      name: 'TBD',
      coach: 'Zac Fermanis',
      record: '0-0',
      pointsFor: 0,
      pointsAgainst: 0,
      powerRank: 11,
      powerRankText: 'Zac Week 2 Power Ranking',
    },
    {
      id: 'zari',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_z.png',
      name: 'TBD',
      coach: 'Zari Bazarian',
      record: '0-0',
      pointsFor: 0,
      pointsAgainst: 0,
      powerRank: 12,
      powerRankText: 'Zari Week 2 Power Ranking',
    },
];

export const matchups: Matchup[] = [
  {
    homeTeam: {
      id: 'zari',
      score: 0,
    },
    awayTeam: {
      id: 'adam',
      score: 0,
    },
  },
  {
    homeTeam: {
      id: 'jackie',
      score: 0,
    },
    awayTeam: {
      id: 'jaime',
      score: 0,
    },
  },
  {
    homeTeam: {
      id: 'joe',
      score: 0,
    },
    awayTeam: {
      id: 'kara',
      score: 0,
    },
  },
  {
    homeTeam: {
      id: 'marc',
      score: 0,
    },
    awayTeam: {
      id: 'mason',
      score: 0,
    },
  },
  {
    homeTeam: {
      id: 'nick',
      score: 0,
    },
    awayTeam: {
      id: 'scott',
      score: 0,
    },
  },
  {
    homeTeam: {
      id: 'will',
      score: 0,
    },
    awayTeam: {
      id: 'zac',
      score: 0,
    },
  },
];

export const article: Article = {
  coverImage: Jersey,
  title: 'Week 2 Article',
  summary: 'A really interesting article!',
  author: 'Mason White',
  content: (
    <Text>
      In the vast, unpredictable realm of fantasy football, one team recently emerged from
      the depths of despair to savor the sweet nectar of victory for the very first time.
      Yes, you read that right; the underdog, the underachiever, last weeks power
      rankings laughingstock, <Mark color="orange">Hurts So Good</Mark>, has finally
      broken the curse and tasted the glory of a win.
    </Text>
  ),
};

export const jokeArticles: string[] = [
  'Lorem ipsum dolor sit amet',
  'Incredible Breakthrough: Researchers Deploy App on the First Try Without Bamboozlement',
  'Alien Invasion Aborted as Extraterrestrials Discover Philadelphia.',
  "Chiefs Forced to Forfeit Victory Because Although They Won Together, it Wasn't With Purpose",
  "World's Most Advanced Fiber Optics Developed: Can NPM Install in Only 90 Minutes",
  "Exclusive: Man Discovers a Hidden Third Pedal in His Car – Claims to Have Invented 'Turbo Reverse'",
  'Fish Oil Softgel Supplements Key to Immortality',
  'New Company CEO Crowned After Man Reports All Four Phishing Attempts',
];
