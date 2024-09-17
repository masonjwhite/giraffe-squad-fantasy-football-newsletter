/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import { Text } from '@mantine/core';
import Paragraph from '../components/News/MainArticle/Paragraph/Paragraph';
import Interview from '../components/News/MainArticle/Interview/Interview';
import TeamName from '../components/News/MainArticle/TeamName/TeamName';
import Image from '../components/News/MainArticle/Image/Image';
import Exposition from '../components/News/MainArticle/Exposition/Exposition';
import { Team, Matchup, MainArticle, JokeArticle, Player } from '../types';
import commissionerImg from '../images/Commissioner.jpg';
import Week2 from '../images/week2.png';
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
  coverImage: Week2,
  title: 'Oops, he did it again!',
  summary: "Christian McCaffrey played with Zac's heart, got lost in the game. Kara talks losing her team's namesake. Joe and Nick discuss Green Bay's hottest new dating show.",
  author: 'Mason White, Commissioner',
  content: (
    <>
      <Paragraph>
        Welcome to the Week 2 Fantasy Newsletter, Britney Army!
      </Paragraph>
      <Paragraph>
        Am I going to cram every lyric to "Oops I did it Again" into one article?
      </Paragraph>
      <Paragraph>
        Let's just say...
      </Paragraph>
      <Image
        src="https://media.giphy.com/media/JoVB2SzGWJojVtIZQs/giphy.gif?cid=790b7611cwsa3yx04vd6v1385vy9insamw0cggehgw79z9e0&ep=v1_gifs_search&rid=giphy.gif&ct=g"
      />
      <Paragraph>
        This week we're talking injuries. And dang have there been a lot of them!
        Actually, come to think of it, there might be more notable players hurt than "Dynamic Kickoff" returns so far.
      </Paragraph>
      <Paragraph>
        First, we saw Jordan Love hit the "grass" in Sao Paulo.
        Puka Nacua's knee said "football is death".
        Kenneth Walker III's injury status became "oh...bleek".
        Keenan Allen learned the "heel" command.
        Evan Engram didn't want to be associated with the Jaguars this season (who can blame him?).
        Tee Higgins still hasn't "tee'd" off yet.
        Raheem Mostert decided that De'Von Achane would handle "most ert" the carries for the first part of the season.
      </Paragraph>
      <Paragraph>
        Week 2 made me lose all my senses. We saw Tua Tagovailoa have yet another vicious concussion on Thursday night (no jokes for this one folks, too serious).
        Marquise "Hollywood" Brown decided that he would go on a writer's strike.
        Isiah Pacheco took the pregame "break a leg" well wishes a little TOO seriously.
        Cooper Kupp's ankle decided that it had been shown up enough by Marvin Harrison Jr for one day.
      </Paragraph>
      <Paragraph>
        I had a chance to interview our resident Packers fanboys, Nick and Joe, about the devastating loss of Jordan Love.
      </Paragraph>
      <Interview
        interviewerName="Mason White, Commissioner"
        interviewerQuote="Lorem ipsum dolor sit amet"
        interviewerImage={commissionerImg}
        intervieweeName="Coach Nick, Nacua Matata"
        intervieweeQuote="Lorem ipsum dolor sit amet"
        intervieweeImage={teams[0].logo}
      />
      <Interview
        interviewerName="Mason White, Commissioner"
        interviewerQuote="Lorem ipsum dolor sit amet"
        interviewerImage={commissionerImg}
        intervieweeName="Coach Joe, Purdy Good"
        intervieweeQuote="Lorem ipsum dolor sit amet"
        intervieweeImage={teams[5].logo}
      />
      <Paragraph>
        Coach Kara of{' '}
        <TeamName teamName="Pukamon" />,
        is also dealing with a key player being hurt, her namesake: Puka Nacua.
      </Paragraph>
      <Paragraph>
        I asked her how she's been dealing with the situation and if she'll change her team's name.
      </Paragraph>
      <Interview
        interviewerName="Mason White, Commissioner"
        interviewerQuote="Lorem ipsum dolor sit amet"
        interviewerImage={commissionerImg}
        intervieweeName="Coach Zac, Highly Questionable"
        intervieweeQuote="Lorem ipsum dolor sit amet"
        intervieweeImage={teams[4].logo}
      />
      <Paragraph>
        But perhaps most dramatically, Christian McCaffrey is on the IR AGAIN after he made us all believe him and the 49ers were more than just friends.
      </Paragraph>
      <Paragraph>
        When I heard the news the first thought that went through my head was the chorus of Britney Spears' 2000 mega hit "Oops I did it Again".
      </Paragraph>
      <Paragraph>
        TBD....
      </Paragraph>
      <Paragraph>
        Now what if I told you ONE single team had Christian McCaffrey AND 3 other key injured players?
      </Paragraph>
      <Paragraph>
        That is the unfortunate fate of Zac Fermanis, coach of the aptly named{' '}
        <TeamName teamName="Highly Questionable" />
      </Paragraph>
      <Paragraph>
        I was able to snag him for a second when he wasn't busy trawling the waiver wire.
      </Paragraph>
      <Interview
        interviewerName="Mason White, Commissioner"
        interviewerQuote="Lorem ipsum dolor sit amet"
        interviewerImage={commissionerImg}
        intervieweeName="Coach Zac, Highly Questionable"
        intervieweeQuote="Lorem ipsum dolor sit amet"
        intervieweeImage={teams[9].logo}
      />
      <Interview
        interviewerName="Mason White, Commissioner"
        interviewerQuote="Lorem ipsum dolor sit amet"
        interviewerImage={commissionerImg}
        intervieweeName="Coach Zac, Highly Questionable"
        intervieweeQuote="Lorem ipsum dolor sit amet"
        intervieweeImage={teams[9].logo}
      />
      <Image
        src="https://media.giphy.com/media/d5kD2Paz7YFD1zfmVe/giphy.gif?cid=ecf05e471t0jmura4sdbcthf8g1nt512ff94dvbtxu4u4i7u&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        caption="Me seeing Zac continue to battle it out despite the injuries"
      />
      <Paragraph>
        So there you have it folks! Let's hope Week 3 cools down on the injury front because I'm not sure my karma can do another article poking fun of people's injuries.
      </Paragraph>
      <Paragraph>
        Anyways, I'm off do some random acts of kindness!
      </Paragraph>
      <Exposition
        text="Puts headphones blaring Brittney Spears back on"
      />
      <Image
        src="https://media.giphy.com/media/RhGjuQok9Bc01sagms/giphy.gif?cid=790b7611cwsa3yx04vd6v1385vy9insamw0cggehgw79z9e0&ep=v1_gifs_search&rid=giphy.gif&ct=g"
      />
    </>
  ),
};

export const jokeArticles: JokeArticle[] = [
  {
    title: 'WILL TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'ENTERTAINMENT: "The Bear" wins Emmy for best comedy series despite close race with the Dallas Cowboys 2024 season',
    link: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXM5Mjhwc3dqYnFldTM0ejF5NmYxM2F2YmZnb2F1bHZnd2xmYzh6OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/I1Yt13Z4JW1yWIRCVd/giphy.gif',
  },
  {
    title: 'WILL TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: "MUSIC: Jane's Addiction to record soundtrack for Fight Club 2",
    link: 'https://youtube.com/shorts/1oL0IaylEkY?si=RVJSD-znbzzL9ZnY',
  },
  {
    title: 'WILL TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'CRIME WATCH: Marvin Harrison Jr. Stolen from Will Stone for next to nothing',
    link: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGhjOHlienh0c290NWYwcDBwcmw3cGp3YzU0MXpnbnB5NWtnbmpyMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fUqSeJqC5M4oS94SVn/giphy.gif',
  },
];

export const playerOfTheWeek: Player = {
  name: 'Dak Prescott',
  points: 31,
};
