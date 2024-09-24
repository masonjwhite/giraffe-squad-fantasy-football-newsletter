/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import { Text } from '@mantine/core';
import Paragraph from '../components/News/MainArticle/Paragraph/Paragraph';
import Image from '../components/News/MainArticle/Image/Image';
import Interview from '../components/News/MainArticle/Interview/Interview';
import Exposition from '../components/News/MainArticle/Exposition/Exposition';
import TeamName from '../components/News/MainArticle/TeamName/TeamName';
import { Team, Matchup, MainArticle, JokeArticle, Player } from '../types';
import commissionerImg from '../images/Commissioner.jpg';
import Week3 from '../images/week3.png';
import GiraffeHelmet from '../images/Giraffe_Helmet.webp';

export const teams: Team[] = [
  {
    id: '5',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/46632e5f7e5ea783ff5b6916aa67cc3a1e4db1b62a34c31e88869e31fb5266a6.jpg',
    name: 'Super LaMario',
    coach: 'Will',
    record: '3-0',
    pointsFor: 423.58,
    pointsAgainst: 316.22,
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
    record: '3-0',
    pointsFor: 403.86,
    pointsAgainst: 328.38,
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
    record: '3-0',
    pointsFor: 320.58,
    pointsAgainst: 280.04,
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
    record: '2-1',
    pointsFor: 405.18,
    pointsAgainst: 351.72,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'D-',
  },
  {
    id: '2',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_1_k.png',
    name: 'Pukamon',
    coach: 'Kara',
    record: '2-1',
    pointsFor: 335.4,
    pointsAgainst: 330.76,
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
    record: '1-2',
    pointsFor: 371.82,
    pointsAgainst: 367.24,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'A-',
  },
  {
    id: '1',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/64203cd3285f9f3871a185bb8c326d4dd9b6d25bea1d1118293a6043b40fd93e.png',
    name: 'Joey B & The Q-tips',
    coach: 'Mason',
    record: '1-2',
    pointsFor: 356.92,
    pointsAgainst: 337.1,
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
    record: '1-2',
    pointsFor: 333.44,
    pointsAgainst: 352.58000000000004,
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
    record: '1-2',
    pointsFor: 324.66,
    pointsAgainst: 426.52,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'A+',
  },
  {
    id: '11',
    logo: 'https://s.yimg.com/ep/cx/blendr/v2/image-football-trophy-png_1721174536245.png',
    name: 'Jaiwalking to Victory',
    coach: 'Jaime',
    record: '1-2',
    pointsFor: 315.96,
    pointsAgainst: 403.98,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'F',
  },
  {
    id: '8',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_11_j.png',
    name: 'Pattibot',
    coach: 'Jackie',
    record: '0-3',
    pointsFor: 338.8,
    pointsAgainst: 356.36,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'B-',
  },
  {
    id: '7',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_h.png',
    name: "Henry's Hustle",
    coach: 'Adam',
    record: '0-3',
    pointsFor: 300.68,
    pointsAgainst: 379.98,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'D+',
  },
];

export const matchups: Matchup[] = [
  {
    homeTeam: {
      name: 'Purdy Good',
      id: '9',
      score: 109.48,
    },
    awayTeam: {
      name: 'Joey B & The Q-tips',
      id: '1',
      score: 101.26,
    },
  },
  {
    homeTeam: {
      name: 'Pattibot',
      id: '8',
      score: 98.36,
    },
    awayTeam: {
      name: 'Pukamon',
      id: '2',
      score: 103.68,
    },
  },
  {
    homeTeam: {
      name: 'Nacua Matata',
      id: '10',
      score: 133.98,
    },
    awayTeam: {
      name: 'The Replacements',
      id: '3',
      score: 179.84,
    },
  },
  {
    homeTeam: {
      name: 'Jaiwalking to Victory',
      id: '11',
      score: 113.28,
    },
    awayTeam: {
      name: 'Highly Questionable',
      id: '4',
      score: 104.0,
    },
  },
  {
    homeTeam: {
      name: "Henry's Hustle",
      id: '7',
      score: 109.74,
    },
    awayTeam: {
      name: 'Super LaMario',
      id: '5',
      score: 146.58,
    },
  },
  {
    homeTeam: {
      name: 'The Wharf Rats',
      id: '12',
      score: 100.2,
    },
    awayTeam: {
      name: 'Candace Bergen',
      id: '6',
      score: 152.28,
    },
  },
];

export const article: MainArticle = {
  coverImage: Week3,
  title: 'Enter the Was(TE)land',
  summary:
    'Is the tight end position still relevant? Mason and Adam struggle with ghosts. Jackie TBD',
  author: 'Mason White, Commissioner',
  content: (
    <>
      <Paragraph>It's the end of the tight end position as we know it.</Paragraph>
      <Paragraph>
        Let me know if this rings a bell. You're hyped for another week of fantasy football. You and
        your opponent are projected within 10 points of eachother. It's going to be close. You turn
        on NFL Red Zone and obsessively refresh your app with Cheeto-stained fingers. Your team is
        flamin hot, but then you notice something...your tight end has a score of 0. You think "well
        it's just a slow start, he'll turn it around."
      </Paragraph>
      <Paragraph>
        He doesn't. You lose by 12 points. Your tight end finishes with 3.2 points.
      </Paragraph>
      <Image src="https://media.giphy.com/media/udv8jAcfnPaIU/giphy.gif?cid=790b7611su042jshmjigv6l00o00vk7o782r349owv3f1zn8&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
      <Paragraph>
        If this has happened to you, you might be entitled to financial compensation.
      </Paragraph>
      <Paragraph>
        The tight end position has become a bit of a pariah lately in fantasy football. Sure you
        have a few breakout games here and there, but how many dominant tight ends are there? Two?
        Maybe three?
      </Paragraph>
      <Paragraph>
        The rest of us are forced to face the Was(TE)land, a desolate landscape of disappointment
        and consistent sub 10-point performances.
      </Paragraph>
      <Paragraph>
        Fun fact. Not a single tight end on the waiver wire at the time of writing this article is
        projected more than 8 points.
      </Paragraph>
      <Paragraph>
        Another fun fact. You could have better production right now by picking up Greg Zurlein, the
        kicker for the New York Jets, than any available tight end.
      </Paragraph>
      <Paragraph>
        One more. Kyle Juszczyk, a FULLBACK, has more points than a few of the "high profile" tight
        ends.
      </Paragraph>
      <Image src="https://media.giphy.com/media/tT11BeHhm9RLi/giphy.gif?cid=790b7611ac0fg79c8dj69cecw6c7aywbe4heq707ryfip7f7&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
      <Paragraph>I caught up with some of the Coaches navigating this tricky landscape.</Paragraph>
      <Paragraph>
        First up is Coach Mason of <TeamName teamName="Joey B & The Q-Tips" />, who is dealing with
        a ghost. Specifically, the ghost of Mark Andrews.
      </Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote="Just wanted to start by saying, you're a very good looking man."
        intervieweeImage={teams[6].logo}
        intervieweeName="Coach Mason, Joey B & The Q-Tips"
        intervieweeQuote="Thank you. You're a wonderful commissioner and you're really loved by the league."
      />
      <Exposition text="ahem" />
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote="How are you dealing with Mark Andrews' lackluster season so far?"
        intervieweeImage={teams[6].logo}
        intervieweeName="Coach Mason, Joey B & The Q-Tips"
        intervieweeQuote="It's been really frustrating. The man is a ghost. He's let me down more than I let down my parents when I went through that long hair phase. Our kicker, Jake Moody, has almost 30 points more than he does. We're calling in The Ghost Busters (not the crappy reboot ones, the real ones from 1984) this week for an intervention."
      />
      <Paragraph>
        Folks, we almost had a blockbuster trade early this season. I heard through the rumor mill
        that Coach Jackie of <TeamName teamName="Pattibot" /> attempted to broker a trade with Coach
        Jaime of <TeamName teamName="Jaiwalking to Victory" />
        for (typically) dominant tight end, Travis Kelce.
      </Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote="TBD"
        intervieweeImage={teams[10].logo}
        intervieweeName="Coach Jackie, Pattibot"
        intervieweeQuote="TBD"
      />
      <Paragraph>
        Next up, we head down to the farm with Coach Adam of <TeamName teamName="Henry's Hustle" />.
        His tight end, Jake Ferguson, recently laid an egg in Week 2.
      </Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote="TBD"
        intervieweeImage={teams[11].logo}
        intervieweeName="Coach Adam, Henry's Hustle"
        intervieweeQuote="TBD"
      />
      <Paragraph>
        So there you have it folks. Is the tight end position no longer relevant? Should I spend
        more energy drafting my kicker than my tight end? Are fantasy leagues going to add
        fullbacks? Is it weird that I don't eat my cereal with milk?
      </Paragraph>
      <Paragraph>🤷🏼‍♂️</Paragraph>
      <Paragraph>For all those out there in the Was(TE)land, stay safe!</Paragraph>
    </>
  ),
};

export const jokeArticles: JokeArticle[] = [
  {
    title: "ENTERTAINMENT: Amazon's 'Rings of Power' series to feature Jeff Bezos as Gollum",
    link: 'https://pbs.twimg.com/media/EW9WyrIUwAAk5Yy.jpg',
  },
  {
    title: 'TBD Will',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Taylor Swift endorses Chick-Fil-A opening on Sundays, change imminent',
    link: 'https://www.youtube.com/shorts/1lFLk5QmDyY',
  },
  {
    title: 'TBD Will',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title:
      "Miami Dolphins announce Carrot Top as their new starting quarterback: 'we like how he matches the uniforms'",
    link: 'https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTY4MTkxMjA2MDAyNjY1Mzcz/carrot-top-scott-thompsonjpg.webp',
  },
  {
    title: 'TBD Will',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

export const playerOfTheWeek: Player = {
  name: 'Dak Prescott',
  points: 31,
};
