import { Text, Mark, Blockquote, Divider } from '@mantine/core';
import { Team, Matchup, MainArticle, JokeArticle, Player } from '../types';
import Jersey from '../images/Giraffe_Jersey.png';
import GiraffeHelmet from '../images/Giraffe_Helmet.webp';

export const teams: Team[] = [
  {
    id: '1',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/64203cd3285f9f3871a185bb8c326d4dd9b6d25bea1d1118293a6043b40fd93e.png',
    name: 'Joey B & The Q-tips',
    coach: 'Mason White',
    record: '0-0',
    pointsFor: 0,
    pointsAgainst: 0,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'D',
  },
  {
    id: '2',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_1_k.png',
    name: 'Pukamon',
    coach: 'Kara Prescott',
    record: '0-0',
    pointsFor: 0,
    pointsAgainst: 0,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'B-',
  },
  {
    id: '3',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/7de364b656ae287ccf84bb8e4f90fe3cf3c4befe3ef6dbde6c7ebfe0b2e82767.jpg',
    name: 'The Replacements',
    coach: 'Scott Quinn',
    record: '0-0',
    pointsFor: 0,
    pointsAgainst: 0,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'D-',
  },
  {
    id: '4',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/d4e9119c74190a7e41c5d1f849050cff5b25ad29c67481ed3aefb761a9e0554c.jpg',
    name: 'All you need is Love',
    coach: 'Zac Fermanis',
    record: '0-0',
    pointsFor: 0,
    pointsAgainst: 0,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'B',
  },
  {
    id: '5',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/46632e5f7e5ea783ff5b6916aa67cc3a1e4db1b62a34c31e88869e31fb5266a6.jpg',
    name: 'Super LaMario',
    coach: 'Will Stone',
    record: '0-0',
    pointsFor: 0,
    pointsAgainst: 0,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'C',
  },
  {
    id: '6',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/e7180887533d328d002f500a6008232752eeb20ad3418d992f7f529e286eca6b.jpg',
    name: 'Candace Bergen',
    coach: 'Zari Bazarian',
    record: '0-0',
    pointsFor: 0,
    pointsAgainst: 0,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'C+',
  },
  {
    id: '7',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_h.png',
    name: "Henry's Hustle",
    coach: 'Adam LaCasse',
    record: '0-0',
    pointsFor: 0,
    pointsAgainst: 0,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'D+',
  },
  {
    id: '8',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_11_j.png',
    name: 'Pattibot',
    coach: 'Jackie Munger',
    record: '0-0',
    pointsFor: 0,
    pointsAgainst: 0,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'B-',
  },
  {
    id: '9',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_3_j.png',
    name: 'Purdy Good',
    coach: 'Joe Pecosky',
    record: '0-0',
    pointsFor: 0,
    pointsAgainst: 0,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'A-',
  },
  {
    id: '10',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_10_n.png',
    name: 'Nacua Matata',
    coach: 'Nick Bradfish',
    record: '0-0',
    pointsFor: 0,
    pointsAgainst: 0,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'A-',
  },
  {
    id: '11',
    logo: 'https://s.yimg.com/ep/cx/blendr/v2/image-football-trophy-png_1721174536245.png',
    name: 'Jaiwalking to Victory',
    coach: 'Jaime Sheppard',
    record: '0-0',
    pointsFor: 0,
    pointsAgainst: 0,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'F',
  },
  {
    id: '12',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/1b498f79c6072a597eaf052dd6d2b1af353ba76db4a0b5e3721790e4b2a9fc5f.jpg',
    name: 'The Wharf Rats',
    coach: 'Marc Bouvier',
    record: '0-0',
    pointsFor: 0,
    pointsAgainst: 0,
    powerRank: 0,
    powerRankText: '',
    helmetImage: GiraffeHelmet,
    draftGrade: 'A+',
  },
];

export const matchups: Matchup[] = [
  {
    homeTeam: {
      name: 'Pukamon',
      id: '2',
      score: 113.48,
    },
    awayTeam: {
      name: 'Joey B & The Q-tips',
      id: '1',
      score: 80.46,
    },
  },
  {
    homeTeam: {
      name: 'Super LaMario',
      id: '5',
      score: 118.52,
    },
    awayTeam: {
      name: 'The Replacements',
      id: '3',
      score: 96.18,
    },
  },
  {
    homeTeam: {
      name: 'Candace Bergen',
      id: '6',
      score: 102.36,
    },
    awayTeam: {
      name: 'All you need is Love',
      id: '4',
      score: 103.5,
    },
  },
  {
    homeTeam: {
      name: 'Purdy Good',
      id: '9',
      score: 101.9,
    },
    awayTeam: {
      name: "Henry's Hustle",
      id: '7',
      score: 73.72,
    },
  },
  {
    homeTeam: {
      name: 'The Wharf Rats',
      id: '12',
      score: 99.06,
    },
    awayTeam: {
      name: 'Pattibot',
      id: '8',
      score: 113.76,
    },
  },
  {
    homeTeam: {
      name: 'Jaiwalking to Victory',
      id: '11',
      score: 88.54,
    },
    awayTeam: {
      name: 'Nacua Matata',
      id: '10',
      score: 150.78,
    },
  },
];

export const article: MainArticle = {
  coverImage: Jersey,
  title: 'TBD',
  summary: 'Catching up with new faces. Ever wanted an A+ draft grade? Marc reveals his secrets. Jaime shares woes of being a newbie. Scott confronts questionable ethics with using his child as his team logo.',
  author: 'Mason White, Commissioner',
  content: (
    <>
      <Text>
        Welcome back fantasy football maniacs, managers and masochsits!
      </Text>
      <br />
      <Text>
        WE ARE BACK FOR OUR 5TH ANNIVERSARY SEASON!
      </Text>
      <br />
      <Text>
        We&apos;re pulling out all the stops to celebrate this milestone! Firstly,
        Co-Commisioner Will Stone and I are proud to debut our brand-new newsletter website
        (if you&apos;re reading this you&apos;re on it). You like dat? You better...
        we sacrificed our Labor Day Weekend for this monstrosity.
      </Text>
      <br />
      <Text>
        And if that doesn&apos;t have
        you as excited as Travis Kelce getting a new endorsement deal, we are also pleased to
        announce that we will be awarding this year&apos;s winner a replica Lombardi Trophy
        complete with league branding!
      </Text>
      <br />
      <Text>
        **In Dak Prescott snap count voice** HERE WE GOOOO...
      </Text>
      <br />
      <Text>
        Snazzy websites and trophies aren&apos;t all that&apos;s new this year, we also added
        3 new teams to our league! I am pleased to welcome Marc, Jaime and Scott to the league.
        They&apos;ve joined our merry band of misfits for 2025 and I couldn&apos;t be happier
        to have them.
      </Text>
      <br />
      <Text>
        **Awkward pause a la Tom Brady&apos;s broadcat debut**
      </Text>
      <br />
      <Text>
        Let&apos;s zoom in on these new faces!
        I got a chance to catch up with each of them this week and ask a question or
        two about their first week as Giraffe Squad Fantasy Football League coaches.
      </Text>
      <br />
      <Text>
        First up is not only a league newcomer, but also fantasy football newcomer in general,
         <Mark style={{ margin: '0 .20rem' }} color="rgb(255, 156, 90)">Jaiwalking to Victory</Mark>&apos;s Jaime Sheppard. She&apos;s a brave soul
        for signing up for this league as it is not only competitive, but also will publically shame
        you on a website for the whole internet to see if you play poorly. Did she know that when
        I asked her to join? Nope. But it&apos;s too late now 🤷🏼‍♂️.
      </Text>
      <br />
      <Blockquote
        style={{ marginBottom: '1rem' }}
        color="rgb(255, 156, 90)"
        radius="xs"
        cite="Mason White, Commissioner"
      >
        Lorem ipsum dolor sit amet?
      </Blockquote>
      <Blockquote
        color="white"
        radius="xs"
        cite="Jaime Sheppard, Jaiwalking to Victory"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </Blockquote>
      <br />
      <Text>
        Well, after looking at my own squad, <Mark style={{ margin: '0 .20rem' }} color="rgb(255, 156, 90)">Joey B & The Q-tips</Mark>&apos;
        , Week 1 performance...we might have to battle for who will come in last this season.
        Just be glad we&apos;re not one of those leagues that make the last place coach take
        the SAT in a Limu Emu costume.....yet.
      </Text>
      <br />
      <Text>
        Next up we have Scott Quinn, who is leading <Mark style={{ margin: '0 .20rem' }} color="rgb(255, 156, 90)">The Replacements</Mark>
        this year. I noticed something interesting about the team logo when he joined the league...
        it&apos;s his adorable daughter! There have been some questions raised by our league
        &ldquo;Logo Ethics Committee&rdquo; about using his daughter as his logo. I caught up with
        him about the matter.
      </Text>
      <br />
      <Blockquote
        style={{ marginBottom: '1rem' }}
        color="rgb(255, 156, 90)"
        radius="xs"
        cite="Mason White, Commissioner"
      >
        Lorem ipsum dolor sit amet?
      </Blockquote>
      <Blockquote
        color="white"
        radius="xs"
        cite="Scott Quinn, The Replacements"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </Blockquote>
      <br />
      <Text>
        Finally...the main event. There can only be one golden child. One team with a target on
        their backs. Think the 90&apos;s Bulls, the 00s Patriots, Joey Chestnut at the hotdog
        contest or Chris Collinsworth in a worshipping Patrick Mahomes contest. This year
        our golden child is Marc Bouvier of <Mark style={{ margin: '0 .20rem' }} color="rgb(255, 156, 90)">The Wharf Rats</Mark>,
        who was blessed with the hallowed A+ draft grade by our Yahoo Fantasy Football overlords.
        I got a chance to chat with him about all the hype...
      </Text>
      <br />
      <Blockquote
        style={{ marginBottom: '1rem' }}
        color="rgb(255, 156, 90)"
        radius="xs"
        cite="Mason White, Commissioner"
      >
        Lorem ipsum dolor sit amet?
      </Blockquote>
      <Blockquote
        color="white"
        radius="xs"
        cite="Marc Bouvier, The Wharf Rats"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      </Blockquote>
      <br />
      <Text>
        Priceless advice straight from a budding fantasy football mind. We&apos;re
        all waiting with bated breath to see if his dazzling draft night performance will lead to a
        sizzling season or he&apos;ll slip like he&apos;s returning a punt in Sao Paulo.
      </Text>
      <br />
      <Text>
        Anyways, that&apos;s all he wrote folks. I have to go organize my collection of 200
        sealed copies of Shrek on VHS!
      </Text>
      <br />
      <Text>
        👋🏼 Stay demure, stay mindful.
      </Text>
      <br />
      <Text>
        - Commish
      </Text>
      <br />
      <Divider />
    </>
  ),
};

export const jokeArticles: JokeArticle[] = [
  {
    title: 'VIDEO: Uncle Rico reacts to Anthony Richardson’s 66 yard bomb',
    link: 'https://youtube.com/shorts/jP8kHbaPs0s?si=awYGojV14e6ulebY',
  },
  {
    title: 'WILL TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Nacua rushed to the Pukamon Center after Week 1 knee injury',
    link: 'https://youtu.be/bPPWK77WxGQ?si=iNpbnCtRbSdTU05f&t=83',
  },
  {
    title: 'WILL TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Kendrick Lamar and Drake announce they will live tweet their beef on stage for upcoming Super Bowl LIX halftime show',
    link: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExajV3MjdydnJtM2hzMXducjB6ZXVoOXI3MHViZW84OWI4eGJxZHFjcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8GQoiQaVEFCYfZLQPq/giphy.gif',
  },
  {
    title: 'WILL TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

export const playerOfTheWeek: Player = {
  name: 'Dak Prescott',
  points: 31,
};
