import { Text } from '@mantine/core';
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
      powerRankText: 'Adam Week 1 Power Ranking',
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
      powerRankText: 'Jackie Week 1 Power Ranking',
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
      powerRankText: 'Jaime Week 1 Power Ranking',
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
      powerRankText: 'Joe Week 1 Power Ranking',
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
      powerRankText: 'Kara Week 1 Power Ranking',
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
      powerRankText: 'Marc Week 1 Power Ranking',
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
      powerRankText: 'Mason Week 1 Power Ranking',
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
      powerRankText: 'Nick Week 1 Power Ranking',
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
      powerRankText: 'Scott Week 1 Power Ranking',
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
      powerRankText: 'Will Week 1 Power Ranking',
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
      powerRankText: 'Zac Week 1 Power Ranking',
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
      powerRankText: 'Zari Week 1 Power Ranking',
    },
];

export const matchups: Matchup[] = [
  {
    homeTeam: {
      id: 'adam',
      score: 0,
    },
    awayTeam: {
      id: 'jackie',
      score: 0,
    },
  },
  {
    homeTeam: {
      id: 'jaime',
      score: 0,
    },
    awayTeam: {
      id: 'joe',
      score: 0,
    },
  },
  {
    homeTeam: {
      id: 'kara',
      score: 0,
    },
    awayTeam: {
      id: 'marc',
      score: 0,
    },
  },
  {
    homeTeam: {
      id: 'mason',
      score: 0,
    },
    awayTeam: {
      id: 'nick',
      score: 0,
    },
  },
  {
    homeTeam: {
      id: 'scott',
      score: 0,
    },
    awayTeam: {
      id: 'will',
      score: 0,
    },
  },
  {
    homeTeam: {
      id: 'zac',
      score: 0,
    },
    awayTeam: {
      id: 'zari',
      score: 0,
    },
  },
];

export const article: Article = {
  coverImage: Jersey,
  title: 'TBD',
  summary: 'Some summary',
  author: 'Mason White',
  content: (
    <Text>
      PLACEHOLDER
    </Text>
  ),
};

export const jokeArticles: string[] = [
  'TBD',
  'TBD',
  'TBD',
  'TBD',
  'TBD',
  'TBD',
];
