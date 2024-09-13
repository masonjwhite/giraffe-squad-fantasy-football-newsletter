const YahooFantasy = require('yahoo-fantasy');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

// Week is the first argument passed in the command line
// ex: node createdata.js 3
// this will create a file for week 3
const week = process.argv.slice(2)[0];

const app_key = process.env.APP_KEY;
const app_secret = process.env.APP_SECRET;
const giraffe_league_key = '449.l.322781';

const yf = new YahooFantasy(
  app_key,
  app_secret
);

const eslint = `
  /* eslint-disable react/no-unescaped-entities */
  /* eslint-disable max-len */
`;

const imports = `
import { Text } from '@mantine/core';
import Paragraph from '../components/News/MainArticle/Paragraph/Paragraph';
import Interview from '../components/News/MainArticle/Interview/Interview';
import TeamName from '../components/News/MainArticle/TeamName/TeamName';
import { Team, Matchup, MainArticle, JokeArticle, Player } from '../types';
import commissionerImg from '../images/Commissioner.jpg'
import Jersey from '../images/Giraffe_Jersey.png';
import GiraffeHelmet from '../images/Giraffe_Helmet.webp';\n\n`;

const fileStart = "export const teams: Team[] = [\n";
const endTeamsData = "];\n";
let matchupsHeader = `\nexport const matchups: Matchup[] = [\n`;

const articlePlaceholder = `
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
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  { 
    title: 'TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  { 
    title: 'TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  { 
    title: 'TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  { 
    title: 'TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  { 
    title: 'TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
];

export const playerOfTheWeek: Player = {
  name: 'Dak Prescott',
  points: 31,
};
`
const coaches = {
  1: "Mason",
  2: "Kara",
  3: "Scott",
  4: "Zac",
  5: "Will",
  6: "Zari",
  7: "Adam",
  8: "Jackie",
  9: "Joe",
  10: "Nick",
  11: "Jaime",
  12: "Marc"
}

async function getAllFileData() {
  try {
    let teams = await yf.league.standings(giraffe_league_key);
    const teamData = teams.standings.map((team) => {
      return `{
        id: "${team.team_id}",
        logo: "${team.team_logos[0].url}",
        name: "${team.name}",
        coach: "${coaches[team.team_id]}",
        record: "${team.standings.outcome_totals.wins}-${team.standings.outcome_totals.losses}",
        pointsFor: ${team.standings.points_for},
        pointsAgainst: ${team.standings.points_against},
        powerRank: 0,
        powerRankText: "",
        helmetImage: GiraffeHelmet,
        draftGrade: "${team.draft_grade}"
      }
        `;
    }).join(',\n');

  let scoreboard = await yf.league.scoreboard(giraffe_league_key, week);
  const scoreData = scoreboard.scoreboard.matchups.map((matchup) => {
    return `{\n
      homeTeam: {
        name: "${matchup.teams[1].name}",
        id: "${matchup.teams[1].team_id}",
        score: ${matchup.teams[1].points.total},
      },
      awayTeam: {
        name: "${matchup.teams[0].name}",
        id: "${matchup.teams[0].team_id}",
        score: ${matchup.teams[0].points.total},
      }
    }`;
  });

  return eslint + imports + fileStart + teamData + endTeamsData + matchupsHeader + scoreData.join(',\n') + endTeamsData + articlePlaceholder;
  } catch (e) {
    console.log('error:', e);
  }
}

getAllFileData().then((fileText) => {
   fs.writeFile(`src/data/week${week}.tsx`, fileText, (err) => {
    if (err) {
      console.log('error:', err);
    } else {
      console.log('File created successfully');
    }
  });
});