/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import { Text } from '@mantine/core';
import Paragraph from '../components/News/MainArticle/Paragraph/Paragraph';
import Interview from '../components/News/MainArticle/Interview/Interview';
import TeamName from '../components/News/MainArticle/TeamName/TeamName';
import Image from '../components/News/MainArticle/Image/Image';
import { Team, Matchup, MainArticle, JokeArticle, Player } from '../types';
import commissionerImg from '../images/Commissioner.jpg';
import Week7 from '../images/week7.png';
import GiraffeHelmet from '../images/Giraffe_Helmet.webp';

export const teams: Team[] = [
  {
    id: '5',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/46632e5f7e5ea783ff5b6916aa67cc3a1e4db1b62a34c31e88869e31fb5266a6.jpg',
    name: 'Super LaMario',
    coach: 'Will',
    record: '6-0',
    pointsFor: 777.24,
    pointsAgainst: 635.5200000000001,
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
    record: '4-2',
    pointsFor: 703.6,
    pointsAgainst: 682.4,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'C+',
  },
  {
    id: '11',
    logo: 'https://s.yimg.com/ep/cx/blendr/v2/image-football-trophy-png_1721174536245.png',
    name: 'Jaiwalking to Victory',
    coach: 'Jaime',
    record: '4-2',
    pointsFor: 693.8,
    pointsAgainst: 704.66,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'F',
  },
  {
    id: '9',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_3_j.png',
    name: 'Purdy Good',
    coach: 'Joe',
    record: '4-2',
    pointsFor: 672.86,
    pointsAgainst: 627.96,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'A-',
  },
  {
    id: '3',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/7de364b656ae287ccf84bb8e4f90fe3cf3c4befe3ef6dbde6c7ebfe0b2e82767.jpg',
    name: 'The Replacements',
    coach: 'Scott',
    record: '3-3',
    pointsFor: 770.72,
    pointsAgainst: 720.02,
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
    record: '3-3',
    pointsFor: 726.42,
    pointsAgainst: 723.34,
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
    record: '3-3',
    pointsFor: 683.42,
    pointsAgainst: 708.0600000000001,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'D',
  },
  {
    id: '2',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_1_k.png',
    name: 'Pukamon',
    coach: 'Kara',
    record: '3-3',
    pointsFor: 634.54,
    pointsAgainst: 632.9599999999999,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'B-',
  },
  {
    id: '4',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/4fecee0eff529cd27243f5a74b1730153aafee3a3a1adf65e4e090c617d2ddaf.jpg',
    name: 'Highly Questionable',
    coach: 'Zac',
    record: '2-4',
    pointsFor: 676.54,
    pointsAgainst: 718.6,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'B',
  },
  {
    id: '12',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/1b498f79c6072a597eaf052dd6d2b1af353ba76db4a0b5e3721790e4b2a9fc5f.jpg',
    name: 'The Wharf Rats',
    coach: 'Marc',
    record: '2-4',
    pointsFor: 647.48,
    pointsAgainst: 793.5400000000001,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'A+',
  },
  {
    id: '8',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_11_j.png',
    name: 'Pattibot',
    coach: 'Jackie',
    record: '1-5',
    pointsFor: 699.2,
    pointsAgainst: 713.02,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'B-',
  },
  {
    id: '10',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_10_n.png',
    name: 'Nacua Matata',
    coach: 'Nick',
    record: '1-5',
    pointsFor: 694.86,
    pointsAgainst: 720.6,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'A-',
  },
];

export const matchups: Matchup[] = [
  {
    homeTeam: {
      name: 'Super LaMario',
      id: '5',
      score: 98.3,
    },
    awayTeam: {
      name: 'Joey B & The Q-tips',
      id: '1',
      score: 64.0,
    },
  },
  {
    homeTeam: {
      name: 'Jaiwalking to Victory',
      id: '11',
      score: 95.96,
    },
    awayTeam: {
      name: 'Pukamon',
      id: '2',
      score: 58.8,
    },
  },
  {
    homeTeam: {
      name: 'The Wharf Rats',
      id: '12',
      score: 131.74,
    },
    awayTeam: {
      name: 'The Replacements',
      id: '3',
      score: 78.62,
    },
  },
  {
    homeTeam: {
      name: 'Nacua Matata',
      id: '10',
      score: 95.36,
    },
    awayTeam: {
      name: 'Highly Questionable',
      id: '4',
      score: 72.1,
    },
  },
  {
    homeTeam: {
      name: 'Purdy Good',
      id: '9',
      score: 141.38,
    },
    awayTeam: {
      name: 'Candace Bergen',
      id: '6',
      score: 93.46,
    },
  },
  {
    homeTeam: {
      name: 'Pattibot',
      id: '8',
      score: 89.24,
    },
    awayTeam: {
      name: "Henry's Hustle",
      id: '7',
      score: 72.06,
    },
  },
];

export const powerRankingsAuthor = 'Will Stone, Deputy Commissioner';

export const article: MainArticle = {
  coverImage: Week7,
  title: 'Somebody Beat Will',
  summary: 'Will is travelling around the World with an appetite, an appetite for Fantasy Football beatdowns.',
  author: 'Mason White, Commissioner',
  content: (
    <>
      <Paragraph>
        Bienvenidos Fantasy Football enthusiasts!
      </Paragraph>
      <Paragraph>
        Much like the title of the hit Netflix show "Somebody Feed Phil" (which Erin and I highly recommend if you like food, travel and wholesomeness) this week I have a simple statement for you all: Somebody Beat Will.
      </Paragraph>
      <Paragraph>
        Like a 3-star Michelin chef building the restaraunt empire of their dreams, Will has forged a legacy in the Giraffe Squad Fantasy Football League. He's literally won 75% of the league championships. That's about the same probability as your neighborhood Dunkin Donuts getting your order wrong.
      </Paragraph>
      <Paragraph>
        And if all that wasn't enough, Will is 7-0 this year, sitting comfortably atop the league and on pace to win his 4th title.
      </Paragraph>
      <Image
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmY1ZGJmamMxeW8zMXhhM2pqZTg0eXdpMmg0NXUzZWJoZGNna3MwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0IyfhIdlVDpjAK0o/giphy.gif"
        caption="Will crafting his lineup each week"
      />
      <Paragraph>
        Will's signature dishes almost always feature a generous helping of his favorite spice, the Dallas Cowboys, and his favorite ingredient, Dak Prescott.
      </Paragraph>
      <Paragraph>
        Each of his previous 3 championship teams have had a Dallas Cowboys player as it's namesake and/or featured player.
      </Paragraph>
      <Paragraph>
        In 2020 and 2022 it was Dak Prescott (Empire Strikes Dak and Dak to Dak to Dak, respectively). In 2023, he tweaked his approach slightly, featuring Cowboys top receiever CeeDee Lamb (CeeDee Phone Home).
      </Paragraph>
      <Paragraph>
        This year, however, his lineup does not have a single Dallas Cowboys player on it. That's a bigger menu change than McDonald's ditching the Snack Wrap (which I'm still pissed about, by the way).
      </Paragraph>
      <Paragraph>
        So why the sudden change in flavor profile? I asked him to find out!
      </Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote="TBD"
        intervieweeImage="TBD"
        intervieweeName="Coach Will Stone, Super LaMario"
        intervieweeQuote="TBD"
      />
      <Paragraph>
        TBD
      </Paragraph>
      <Paragraph>
        Will's savvy skills have put numerous teams out of business over the years. This year he's taken down Coaches Scott, Marc, Adam, Zari, Nick, Kara and yours truly.
        He might have a higher killcount than the Whopper!
      </Paragraph>
      <Image
        src="https://i.ytimg.com/vi/lMHdDZIiJ0k/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVyhMMA8=&rs=AOn4CLBCwu3AsvQfjR5ChAAK1J1FOL_ukQ"
      />
      <Paragraph>
        With so many teams defated, he has to have made some enemies over the years right?
        So like any good food writer I decided to ask Will's critics and competition what they think of him.
      </Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote="TBD"
        intervieweeImage="TBD"
        intervieweeName="TBD, TBD"
        intervieweeQuote="TBD"
      />
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote="TBD"
        intervieweeImage="TBD"
        intervieweeName="TBD, TBD"
        intervieweeQuote="TBD"
      />
      <Paragraph>
        TBD
      </Paragraph>
      <Paragraph>
        So there you have it folks. Will Will's will will himself to his third championship in a row? Or is his empire crash and burn like a vegan restaurant busted for serving meat?
        Keep on reading to find out!
      </Paragraph>
      <Paragraph>
        And once more (for emphasis)...Somebody Beat Will!
      </Paragraph>
      <Image
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnEzcGlhaGE5dnh6ZnFmdXF4NmMxZHc2MG02b3BrbmVsZDZybndoOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iTdnzSR4uVBEvLE8up/giphy.gif"
        caption="Will on his way to another championship"
      />
    </>
  ),
};

export const jokeArticles: JokeArticle[] = [
  {
    title: 'Commissioner makes unfortunate typo on fantasy football league championship trophy',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Will TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Cleveland man discovers karma IS real',
    link: 'https://www.youtube.com/watch?v=rg18Kf4en2o',
  },
  {
    title: 'Will TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: "Tua Tagovailoa: 'I love football to the death of me' Football gods: 'Challenge accepted'",
    link: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWFxaXdrOHpkZWswZnQyYndjamt0NWh4ZjdtanFqMzZhdDd6M3NmOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PAnF7JWLnraKCIWvTI/giphy.gif',
  },
  {
    title: 'Will TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

export const playerOfTheWeek: Player = {
  name: 'Dak Prescott',
  points: 31,
};
