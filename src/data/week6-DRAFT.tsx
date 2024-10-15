/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import { Text } from '@mantine/core';
import Paragraph from '../components/News/MainArticle/Paragraph/Paragraph';
import Image from '../components/News/MainArticle/Image/Image';
import Interview from '../components/News/MainArticle/Interview/Interview';
import TeamName from '../components/News/MainArticle/TeamName/TeamName';
import { Team, Matchup, MainArticle, JokeArticle, Player } from '../types';
import commissionerImg from '../images/Commissioner.jpg';
import Week6 from '../images/Week6.png';
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
  coverImage: Week6,
  title: 'Scrum Master Showdown',
  summary: 'We recap the highly anticipated matchup between two coaches who literally manage things for a living.',
  author: 'Mason White, Commissioner',
  content: (
    <>
      <Paragraph>
        Whether it's Luke Skywalker vs. Darth Vader, Rocky vs. Creed, Harry Potter vs. Voldemort or Me vs. Ikea furniture assembly,
        nothing beats a good showdown.
      </Paragraph>
      <Paragraph>
        Week 6 featured an epic clash between our two favorite scrum masters, Coach Zari of <TeamName teamName="Candace Bergen" /> and Coach Jaime of <TeamName teamName="Jaiwalking to Victory" />.
      </Paragraph>
      <Paragraph>
        Before we go further though, let's define "Scrum Master" for the non-technical folks out there (hi Erin, Mom, Dad, Bro-in-law, Auntie Sharon, Josh and Courtney!)
      </Paragraph>
      <Paragraph>
        A Scrum Master is someone who has mastered "scrum", which is the ancient art of herding nerdy, disorganized and non-communicative cats.
      </Paragraph>
      <Paragraph>
        Only joking. A Scrum Master is essentially a project manager for a software development team. Kinda the same thing though, right?
      </Paragraph>
      <Image
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXZoMm1saXc0anBsamdkMXN4aTQxdTdwenh6dGJhdGRjZXlxMmI5aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Mb5DA2wbqBBkwTu/giphy.gif"
        caption="Jaime and Zari everytime software engineers start talking about coding"
      />
      <Paragraph>
        So let's answer the question on everyone's mind. Does managing software projects actually translate to managing a fictious sports team?
      </Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        intervieweeQuote="TBD"
        intervieweeImage="TBD"
        intervieweeName="Coach Zari, Candace Bergen"
        interviewerQuote="TBD"
      />
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        intervieweeQuote="TBD"
        intervieweeImage="TBD"
        intervieweeName="Coach Jaime, Jaiwalking to Victory"
        interviewerQuote="TBD"
      />
      <Paragraph>
        TBD
      </Paragraph>
      <Paragraph>
        But there's another storyline brewing here like an overly-pretentious, overly-expensive craft beer made by some guy named Clyde at one of your 3,000 local micro breweries...
      </Paragraph>
      <Paragraph>
        Coach Zari has been a mainstay in the league since our inaugural season in 2019. Coach Jaime is a rookie embarking on her first fantasy football season ever.
      </Paragraph>
      <Paragraph>
        It's a classic matchup between new blood and the wily veteran.
      </Paragraph>
      <Paragraph>
        Before we get to the results, I got a chance to follow up with both of them about the showdown.
      </Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        intervieweeQuote="TBD"
        intervieweeImage="TBD"
        intervieweeName="Coach Zari, Candace Bergen"
        interviewerQuote="TBD"
      />
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        intervieweeQuote="TBD"
        intervieweeImage="TBD"
        intervieweeName="Coach Jaime, Jaiwalking to Victory"
        interviewerQuote="TBD"
      />
      <Paragraph>
        So who come away with the dubya?
      </Paragraph>
      <Image
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2plYmNyb2sxeXA5Z2tpcHd4NnJsbDFieHFzcXVldjk2MWkweG5pcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v4aN9JGFL62dO/giphy.gif"
        caption="Get it?! Dubya? Please don't make me explain it further..."
      />
      <Paragraph>
        Well, you can call it beginner's luck, a blessing from "Uh Oh Stinky" himself or new age coaching, but the fact remains that Coach Jaime
        emphatically claimed a Week 6 victory in a blowout 144.9 - 98.1
      </Paragraph>
      <Paragraph>
        If you've been following along, you know that's 4 wins IN A ROW for <TeamName teamName="Jaiwalking to Victory" />.
      </Paragraph>
      <Paragraph>
        Yes, after receiving an actual "F" draft grade and getting smoked like a brisket in the first two weeks, Coach Jaime is quite literally...jay walking to victory.
      </Paragraph>
      <Paragraph>
        Now go hug your friendly neighborhood Scrum Master! But make sure you ask first because that could be an HR violation.
      </Paragraph>
    </>
  ),
};

export const jokeArticles: JokeArticle[] = [
  {
    title: 'Will TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: "Fortune 100 companies announce new '8 Days a Week' RTO policy using Beatles hit tune",
    link: 'https://www.youtube.com/watch?v=kle2xHhRHg4',
  },
  {
    title: 'Will TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'TV: Netflix claims "Nobody Wants This" was original title of "The Secret Lives of Mormon Wives"',
    link: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExemJyNGpjNWNrbWlubTVzZmJmMzMyaTF4YnYyd2cxcnpyYWlkNHBwbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QeRmsCZNIOtOedq0ot/giphy.gif',
  },
  {
    title: 'Will TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Several Patriots fans hospitalized with hope-ium overdose following Drake Maye debut',
    link: 'https://imgflip.com/i/96p4we',
  },
];

export const playerOfTheWeek: Player = {
  name: 'Dak Prescott',
  points: 31,
};
