/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import { Text, Image as MantineImg, Center, Title } from '@mantine/core';
import Paragraph from '../components/News/MainArticle/Paragraph/Paragraph';
import Image from '../components/News/MainArticle/Image/Image';
import Interview from '../components/News/MainArticle/Interview/Interview';
import TeamName from '../components/News/MainArticle/TeamName/TeamName';
import { Team, Matchup, MainArticle, JokeArticle, Player } from '../types';
import commissionerImg from '../images/Commissioner.jpg';
import Week6 from '../images/week6.png';
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
    powerRank: 1,
    powerRankText: (
      <MantineImg src="https://preview.redd.it/upvote-champions-v0-jfd5pxj5x52b1.png?auto=webp&s=44476fb8d6703618510fe19b6a5bf24e43bb08b7" />
    ),
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
    powerRank: 3,
    powerRankText: (
      <MantineImg src="https://preview.redd.it/gig3o1im4rud1.jpeg?auto=webp&s=e63cbf8a089e22662202ac504cd9ba6240d8a2e6" />
    ),
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
    powerRank: 2,
    powerRankText: (
      <MantineImg src="https://preview.redd.it/bought-low-on-kelce-now-praying-for-a-wework-turnaround-v0-gg8jqqkoyupd1.png?auto=webp&s=23024f9e0fe78cb26b8b6a606dcaf925b69d98a0" />
    ),
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
    powerRank: 4,
    powerRankText: (
      <Center>
        <iframe
          width="315"
          height="560"
          src="https://www.youtube.com/embed/R6tWdGSA6QU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Center>
    ),
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
    powerRank: 6,
    powerRankText: <MantineImg src="https://i.imgflip.com/96uzvg.jpg" />,
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
    powerRank: 5,
    powerRankText: (
      <MantineImg src="https://preview.redd.it/you-will-break-down-v0-qynm07mpnjeb1.png?auto=webp&s=866880123bccf491a1df2e9ef4fa5f3bcd374646" />
    ),
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
    powerRank: 7,
    powerRankText: (
      <>
        <Center>
          <Title order={3}>Mason watching Bijan actually do something this week</Title>
        </Center>
        <Center>
          <iframe
            width="315"
            height="560"
            src="https://www.youtube.com/embed/bBXtrdTxnr4?si=TmcRbQHVYRTf0r9E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Center>
      </>
    ),
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
    powerRank: 9,
    powerRankText: (
      <MantineImg src="https://preview.redd.it/7xba4oc00r961.jpg?width=640&crop=smart&auto=webp&s=ee4b37d90320536c979a2a2e0233d8dd7aaa7a19" />
    ),
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
    powerRank: 10,
    powerRankText: (
      <MantineImg src="https://external-preview.redd.it/come-back-sweet-prince-v0-rR4N2ldsWKhLYy0dKQMRNbW3AOBhRrFeuR3ZQuJuI3A.jpg?auto=webp&s=4a26e21155ca7a8988d75fc721000b325320e894" />
    ),
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
    powerRank: 8,
    powerRankText: (
      <MantineImg src="https://preview.redd.it/bucky-irving-v0-zprc2eksbsqd1.jpeg?width=1080&crop=smart&auto=webp&s=b3e8c8ea53b0c30c9e482b40babc374774bcffd0" />
    ),
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
    powerRank: 11,
    powerRankText: (
      <MantineImg src="https://preview.redd.it/dynasty-leagues-right-now-v0-j2y3qakl7w3a1.png?auto=webp&s=d59e66450808ecdb75d57bfbe685606ff0770f5f" />
    ),
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
    powerRank: 12,
    powerRankText: (
      <>
        <Center>
          <Title order={2}>🦧 Uh Oh Stinky 🦧</Title>
        </Center>
        <Center>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FveF-we6lcE?si=tGNtntnqF0lzfb4d"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Center>
      </>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'A-',
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
      score: 107.92,
    },
    awayTeam: {
      name: 'Pukamon',
      id: '2',
      score: 99.96,
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
      score: 134.3,
    },
  },
  {
    homeTeam: {
      name: "Henry's Hustle",
      id: '7',
      score: 137.16,
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
      score: 123.88,
    },
    awayTeam: {
      name: 'Purdy Good',
      id: '9',
      score: 122.6,
    },
  },
];

export const powerRankingsAuthor = 'Will Stone, Deputy Commissioner';

export const article: MainArticle = {
  coverImage: Week6,
  title: 'Scrum Master Showdown',
  summary:
    'We recap the highly anticipated matchup between two coaches who literally manage things for a living.',
  author: 'Mason White, Commissioner',
  content: (
    <>
      <Paragraph>
        Whether it's Luke Skywalker vs. Darth Vader, Rocky vs. Creed, Harry Potter vs. Voldemort or
        Me vs. Ikea furniture assembly, nothing beats a good showdown.
      </Paragraph>
      <Paragraph>
        Week 6 featured an epic clash between our two favorite scrum masters, Coach Zari of{' '}
        <TeamName teamName="Candace Bergen" /> and Coach Jaime of{' '}
        <TeamName teamName="Jaiwalking to Victory" />.
      </Paragraph>
      <Paragraph>
        Before we go further though, let's define "Scrum Master" for the non-technical folks out
        there (hi Erin, Mom, Dad, Bro-in-law, Auntie Sharon, Josh and Courtney!)
      </Paragraph>
      <Paragraph>
        A Scrum Master is someone who has mastered "scrum", which is the ancient art of herding
        nerdy, disorganized and non-communicative cats.
      </Paragraph>
      <Paragraph>
        Only joking. A Scrum Master is essentially a project manager for a software development
        team. Kinda the same thing though, right?
      </Paragraph>
      <Image
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXZoMm1saXc0anBsamdkMXN4aTQxdTdwenh6dGJhdGRjZXlxMmI5aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Mb5DA2wbqBBkwTu/giphy.gif"
        caption="Jaime and Zari everytime software engineers start talking about coding"
      />
      <Paragraph>
        So let's answer the question on everyone's mind. Does managing software projects actually
        translate to managing a fictious sports team?
      </Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote="Are there any similarities between being a scrum master and coaching an imaginary football team?"
        intervieweeImage={teams[1].logo}
        intervieweeName="Coach Zari, Candace Bergen"
        intervieweeQuote="The only difference is one of them you can drink on the job."
      />
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote="Are there any similarities between being a scrum master and coaching an imaginary football team?"
        intervieweeImage={teams[2].logo}
        intervieweeName="Coach Jaime, Jaiwalking to Victory"
        intervieweeQuote="It's all about motivation, focus and being able to adapt to what's happening in the sprint (work) or on the field; encouragement goes a long way. 'Winners always want the ball when the game's on the line'."
      />
      <Paragraph>
        But there's another storyline brewing here like an overly-pretentious, overly-expensive
        craft beer made by some guy named Clyde at one of your 3,000 local micro breweries...
      </Paragraph>
      <Paragraph>
        Coach Zari has been a mainstay in the league since our inaugural season in 2019. Coach Jaime
        is a rookie embarking on her first fantasy football season ever.
      </Paragraph>
      <Paragraph>It's a classic matchup between new blood and the wily veteran.</Paragraph>
      <Paragraph>
        Before we get to the results, I got a chance to follow up with both of them about the
        showdown.
      </Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote="How do you feel your matchup against Zari went? Were you intimidated by facing a 5-year giraffe fantasy football league veteran?"
        intervieweeImage={teams[2].logo}
        intervieweeName="Coach Jaime, Jaiwalking to Victory"
        intervieweeQuote="Intimidated...not at all; I was more concerned I was going to be beat by a team named after 78 yr old woman; that's just embarrassing!"
      />
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote="How do you think your matchup against Jaime went?"
        intervieweeImage={teams[1].logo}
        intervieweeName="Coach Zari, Candace Bergen"
        intervieweeQuote="Fantasy Football is all about taking big risks and hoping they play out (and not get injured). Our team is currently held together by scotch tape, Trevor Lawrence's luscious locks, and the ghost of Mac Jones in the Patriots locker room, so we had to shoot for the fences and hope someone had a big game because the bench is a sad mess. They obviously didn't, so next practice everyone including our injured players (looking at you, Pacheco and Mason) will be running extra laps!"
      />
      <Paragraph>So who came away with the dubya?</Paragraph>
      <Image
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2plYmNyb2sxeXA5Z2tpcHd4NnJsbDFieHFzcXVldjk2MWkweG5pcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v4aN9JGFL62dO/giphy.gif"
        caption="Get it?! Dubya? Please don't make me explain it further..."
      />
      <Paragraph>
        Well, you can call it beginner's luck, a blessing from "Uh Oh Stinky" himself or that
        encouragement stuff she was talking about, but the fact remains that Coach Jaime
        emphatically claimed a Week 6 victory in a blowout 144.9 - 98.1
      </Paragraph>
      <Paragraph>
        If you've been following along, you know that's 4 wins IN A ROW for{' '}
        <TeamName teamName="Jaiwalking to Victory" />.
      </Paragraph>
      <Paragraph>
        Yes, after receiving an actual "F" draft grade and getting smoked like a brisket in the
        first two weeks, Coach Jaime is quite literally...jay walking to victory.
      </Paragraph>
      <Paragraph>
        Now go hug your friendly neighborhood Scrum Master! But make sure you ask first, because
        that could be an HR violation.
      </Paragraph>
    </>
  ),
};

export const jokeArticles: JokeArticle[] = [
  {
    title:
      "Doctors Stumped: Man's brain refuses to do JavaScript again after smelling fresh air on vacation",
    link: 'https://www.youtube.com/watch?v=AaUWE9orqYk',
  },
  {
    title: "Fortune 100 companies announce new '8 Days a Week' RTO policy using Beatles hit tune",
    link: 'https://www.youtube.com/watch?v=kle2xHhRHg4',
  },
  {
    title:
      'Innovation: Scott categorizes breakfast and lunch into Epics, unlocking new culinary efficiencies',
    link: 'https://www.youtube.com/watch?v=EBnczwMjeao',
  },
  {
    title:
      'TV: Netflix claims "Nobody Wants This" was original title of "The Secret Lives of Mormon Wives"',
    link: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExemJyNGpjNWNrbWlubTVzZmJmMzMyaTF4YnYyd2cxcnpyYWlkNHBwbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QeRmsCZNIOtOedq0ot/giphy.gif',
  },
  {
    title:
      'To Know: eNPS scores to be pre-approved by C-Suite before submission. Thank you for your cooperation.',
    link: 'https://tenor.com/view/1984-gif-24184060',
  },
  {
    title: 'Several Patriots fans hospitalized with hope-ium overdose following Drake Maye debut',
    link: 'https://imgflip.com/i/96p4we',
  },
];

export const playerOfTheWeek: Player = {
  name: 'Chris Godwin',
  points: 35.5,
};
