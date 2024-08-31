import { Text, Mark } from '@mantine/core';
import { Team, Matchup, Article } from '../types';
import Jersey from '../images/Giraffe_Jersey.png';

export const teams: Team[] = [
  {
      id: 'adam',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_a.png',
      name: 'TBD',
      coach: 'Adam LaCasse',
      record: '1-0',
      pointsFor: 100,
      pointsAgainst: 99,
      powerRank: 1,
      powerRankText: 'Adam Week 1 Power Ranking',
    },
    {
      id: 'jackie',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_j.png',
      name: 'TBD',
      coach: 'Jackie Munger',
      record: '0-1',
      pointsFor: 99,
      pointsAgainst: 100,
      powerRank: 2,
      powerRankText: 'Jackie Week 1 Power Ranking',
    },
    {
      id: 'jaime',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_j.png',
      name: 'TBD',
      coach: 'Jaime Sheppard',
      record: '1-0',
      pointsFor: 101,
      pointsAgainst: 99,
      powerRank: 3,
      powerRankText: 'Jaime Week 1 Power Ranking',
    },
    {
      id: 'joe',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_j.png',
      name: 'TBD',
      coach: 'Joe Pecosky',
      record: '0-1',
      pointsFor: 99,
      pointsAgainst: 101,
      powerRank: 4,
      powerRankText: 'Joe Week 1 Power Ranking',
    },
    {
      id: 'kara',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_k.png',
      name: 'TBD',
      coach: 'Kara Prescott',
      record: '1-0',
      pointsFor: 102,
      pointsAgainst: 99,
      powerRank: 5,
      powerRankText: 'Kara Week 1 Power Ranking',
    },
    {
      id: 'marc',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_m.png',
      name: 'TBD',
      coach: 'Marc Bouvier',
      record: '0-1',
      pointsFor: 99,
      pointsAgainst: 102,
      powerRank: 6,
      powerRankText: 'Marc Week 1 Power Ranking',
    },
    {
      id: 'mason',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_m.png',
      name: 'TBD',
      coach: 'Mason White',
      record: '1-0',
      pointsFor: 103,
      pointsAgainst: 99,
      powerRank: 7,
      powerRankText: 'Mason Week 1 Power Ranking',
    },
    {
      id: 'nick',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_n.png',
      name: 'TBD',
      coach: 'Nick Bradfish',
      record: '0-1',
      pointsFor: 99,
      pointsAgainst: 103,
      powerRank: 8,
      powerRankText: 'Nick Week 1 Power Ranking',
    },
    {
      id: 'scott',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_s.png',
      name: 'TBD',
      coach: 'Scott Quinn',
      record: '1-0',
      pointsFor: 104,
      pointsAgainst: 99,
      powerRank: 9,
      powerRankText: 'Scott Week 1 Power Ranking',
    },
    {
      id: 'will',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_w.png',
      name: 'TBD',
      coach: 'Will Stone',
      record: '0-1',
      pointsFor: 99,
      pointsAgainst: 104,
      powerRank: 10,
      powerRankText: 'Will Week 1 Power Ranking',
    },
    {
      id: 'zac',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_z.png',
      name: 'TBD',
      coach: 'Zac Fermanis',
      record: '1-0',
      pointsFor: 105,
      pointsAgainst: 99,
      powerRank: 11,
      powerRankText: 'Zac Week 1 Power Ranking',
    },
    {
      id: 'zari',
      logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_z.png',
      name: 'TBD',
      coach: 'Zari Bazarian',
      record: '0-1',
      pointsFor: 99,
      pointsAgainst: 105,
      powerRank: 12,
      powerRankText: 'Zari Week 1 Power Ranking',
    },
];

export const matchups: Matchup[] = [
  {
    homeTeam: {
      id: 'adam',
      score: 100,
    },
    awayTeam: {
      id: 'jackie',
      score: 99,
    },
  },
  {
    homeTeam: {
      id: 'jaime',
      score: 101,
    },
    awayTeam: {
      id: 'joe',
      score: 99,
    },
  },
  {
    homeTeam: {
      id: 'kara',
      score: 102,
    },
    awayTeam: {
      id: 'marc',
      score: 99,
    },
  },
  {
    homeTeam: {
      id: 'mason',
      score: 103,
    },
    awayTeam: {
      id: 'nick',
      score: 99,
    },
  },
  {
    homeTeam: {
      id: 'scott',
      score: 104,
    },
    awayTeam: {
      id: 'will',
      score: 99,
    },
  },
  {
    homeTeam: {
      id: 'zac',
      score: 105,
    },
    awayTeam: {
      id: 'zari',
      score: 99,
    },
  },
];

export const article: Article = {
  coverImage: Jersey,
  title: 'Squirrel-Steroids Scandal',
  summary: 'Exclusive Investigation Uncovers Shocking Scandal: Squirrel Masterminds Fantasy Football Cheating Scheme with Performance Enhancing Drugs!',
  author: 'Will Stone',
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
  'Scientists Find Evidence of Sand on Mars',
  'Incredible Breakthrough: Researchers Deploy App on the First Try Without Bamboozlement',
  'Alien Invasion Aborted as Extraterrestrials Discover Philadelphia.',
  "Chiefs Forced to Forfeit Victory Because Although They Won Together, it Wasn't With Purpose",
  "World's Most Advanced Fiber Optics Developed: Can NPM Install in Only 90 Minutes",
  "Exclusive: Man Discovers a Hidden Third Pedal in His Car – Claims to Have Invented 'Turbo Reverse'",
  'Fish Oil Softgel Supplements Key to Immortality',
  'New Company CEO Crowned After Man Reports All Four Phishing Attempts',
];
