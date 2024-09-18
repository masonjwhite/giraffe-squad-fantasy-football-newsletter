/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import { Text, Paper, Avatar, Grid, GridCol, Title, Badge } from '@mantine/core';
import Paragraph from '../components/News/MainArticle/Paragraph/Paragraph';
import Interview from '../components/News/MainArticle/Interview/Interview';
import TeamName from '../components/News/MainArticle/TeamName/TeamName';
import Image from '../components/News/MainArticle/Image/Image';
import Exposition from '../components/News/MainArticle/Exposition/Exposition';
import { Team, Matchup, MainArticle, JokeArticle, Player } from '../types';
import commissionerImg from '../images/Commissioner.jpg';
import Week2 from '../images/week2.png';
import GiraffeHelmet from '../images/Giraffe_Helmet.webp';

const StudsAndScrubs = ({
  studName,
  studImg,
  studPts,
  scrubName,
  scrubImg,
  scrubPts,
}: {
  studName: string;
  studImg: string;
  studPts: number;
  scrubName: string;
  scrubImg: string;
  scrubPts: number;
}) => {
  return (
    <Grid>
      <GridCol span={{ md: 6, sm: 12, xs: 12 }}>
        <Paper radius="md" withBorder p="sm" bg="var(--mantine-color-body)">
          <Title order={3} style={{ textAlign: 'center' }}>
            Stud{' '}
            <img
              src="https://emojis.slackmojis.com/emojis/images/1643514721/7264/big-chungus.png?1643514721"
              style={{ verticalAlign: 'middle', height: '1.375rem' }}
            />
          </Title>
          <Avatar src={studImg} size={120} radius={120} mx="auto" />
          <Text ta="center" fz="sm" fw={500} mt="sm">
            {studName}
          </Text>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Badge color="#ff9c5a">{studPts} points</Badge>
          </div>
          <Text ta="center" c="dimmed" fz="sm">
            Chungus™️ Stud of the Week
          </Text>
        </Paper>
      </GridCol>
      <GridCol span={{ md: 6, sm: 12, xs: 12 }}>
        <Paper radius="md" withBorder p="sm" bg="var(--mantine-color-body)">
          <Title order={3} style={{ textAlign: 'center' }}>
            Scrub{' '}
            <img
              src="https://i.kym-cdn.com/photos/images/original/001/598/772/918.png"
              style={{ verticalAlign: 'middle', height: '1.375rem' }}
            />
          </Title>
          <Avatar src={scrubImg} size={120} radius={120} mx="auto" />
          <Text ta="center" fz="sm" fw={500} mt="sm">
            {scrubName}
          </Text>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Badge color="#ff9c5a">{scrubPts} points</Badge>
          </div>
          <Text ta="center" c="dimmed" fz="sm">
            Uh Oh Stinky™️ Certified Scrub of the Week
          </Text>
        </Paper>
      </GridCol>
    </Grid>
  );
};

export const teams: Team[] = [
  {
    id: '5',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/46632e5f7e5ea783ff5b6916aa67cc3a1e4db1b62a34c31e88869e31fb5266a6.jpg',
    name: 'Super LaMario',
    coach: 'Will',
    record: '2-0',
    pointsFor: 277.0,
    pointsAgainst: 206.48000000000002,
    powerRank: 1,
    powerRankText: (
      <>
        <Text style={{ marginBottom: '1rem' }}>
          <b>Super Lamario</b> led the league this week with an impressive <b>158 points</b>. This
          guy must be a genius.
        </Text>
        <StudsAndScrubs
          studName="Achane in the Membrane"
          studImg="https://s.yimg.com/it/api/res/1.2/wYHlnRpotokdl7w41mPeqA--~A/YXBwaWQ9eW5ld3M7dz00MDA7aD0yNjY7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08102023/40118.png"
          scrubName="Dallas Goedert"
          scrubImg="https://s.yimg.com/it/api/res/1.2/qdbTXq8a0qZhBFEJ85cuWw--~A/YXBwaWQ9eW5ld3M7dz00MDA7aD0yNjY7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/09172024/31019.png"
          studPts={29.5}
          scrubPts={6.8}
        />
      </>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'C',
  },
  {
    id: '6',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/e7180887533d328d002f500a6008232752eeb20ad3418d992f7f529e286eca6b.jpg',
    name: 'Candace Bergen',
    coach: 'Zari',
    record: '2-0',
    pointsFor: 251.58,
    pointsAgainst: 228.18,
    powerRank: 3,
    powerRankText: (
      <StudsAndScrubs
        studName="Alvin (& the chipmunks) Kamara"
        studImg="https://s.yimg.com/iu/api/res/1.2/toPju7F1PR_HKN1.zrRqQA--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08232023/30180.png"
        scrubName="Hayden (the worst) Hurst"
        scrubImg="https://s.yimg.com/iu/api/res/1.2/mkw.tFMTGdJUPzDHmZBXEA--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/07272023/30995.png"
        studPts={44}
        scrubPts={1.5}
      />
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'C+',
  },
  {
    id: '9',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_3_j.png',
    name: 'Purdy Good',
    coach: 'Joe',
    record: '2-0',
    pointsFor: 211.1,
    pointsAgainst: 178.78,
    powerRank: 5,
    powerRankText: (
      <StudsAndScrubs
        studName="Kyren Williams"
        studImg="https://s.yimg.com/iu/api/res/1.2/H7zRG04H3Y7cwUuh7QtZIw--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/09162024/34120.png"
        scrubName="Xavier Worthless"
        scrubImg="https://s.yimg.com/iu/api/res/1.2/MYi7nnYWTZ7UtSXlkuDsWQ--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08162024/40877.png"
        studPts={15.2}
        scrubPts={4.2}
      />
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'A-',
  },
  {
    id: '1',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/64203cd3285f9f3871a185bb8c326d4dd9b6d25bea1d1118293a6043b40fd93e.png',
    name: 'Joey B & The Q-tips',
    coach: 'Mason',
    record: '1-1',
    pointsFor: 255.66,
    pointsAgainst: 227.62,
    powerRank: 2,
    powerRankText: (
      <StudsAndScrubs
        studName="James Cook"
        studImg="https://s.yimg.com/iu/api/res/1.2/fS96nGlRuWcTyuYeDefI9Q--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08282024/34019.png"
        scrubName="Jake Moody"
        scrubImg="https://s.yimg.com/iu/api/res/1.2/5IUWg4HIkTIuNb5sJSUVwg--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/09052024/40129.png"
        studPts={28.5}
        scrubPts={5}
      />
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'D',
  },
  {
    id: '10',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_10_n.png',
    name: 'Nacua Matata',
    coach: 'Nick',
    record: '1-1',
    pointsFor: 237.84,
    pointsAgainst: 187.4,
    powerRank: 6,
    powerRankText: (
      <>
        <Text style={{ marginBottom: '1rem' }}>
          It wasn't the finest week for <b>Nacua Matata</b>, who was left in the dust with a lowly{' '}
          <b>87 points</b> 😬. Nick's squad falls to the middle of the pack after posting both the
          highest score in the opener, and the lowest score this week. Which week's performance is
          the norm and which is the outlier?
        </Text>
        <StudsAndScrubs
          studName="Big **** Brock"
          studImg="https://s.yimg.com/iu/api/res/1.2/efqI02TidpVuuC48iDsXbQ--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/07152024/40878.png"
          scrubName="Tank Dell"
          scrubImg="https://s.yimg.com/iu/api/res/1.2/Bk0bSdXOEDZus_06EtDYfQ--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/09092024/40097.png"
          studPts={18.8}
          scrubPts={2.3}
        />
      </>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'A-',
  },
  {
    id: '2',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_1_k.png',
    name: 'Pukamon',
    coach: 'Kara',
    record: '1-1',
    pointsFor: 231.72,
    pointsAgainst: 232.39999999999998,
    powerRank: 9,
    powerRankText: (
      <StudsAndScrubs
        studName="Cobra Kyler"
        studImg="https://i.redd.it/ezygtxlgrc061.jpg"
        scrubName="Sam LaPorta Potty"
        scrubImg="https://s.yimg.com/iu/api/res/1.2/s7ljXc8Xgyapwcb_bYAEkA--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08142024/40064.png"
        studPts={28.5}
        scrubPts={3.3}
      />
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'B-',
  },
  {
    id: '4',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/4fecee0eff529cd27243f5a74b1730153aafee3a3a1adf65e4e090c617d2ddaf.jpg',
    name: 'Highly Questionable',
    coach: 'Zac',
    record: '1-1',
    pointsFor: 229.44,
    pointsAgainst: 239.3,
    powerRank: 8,
    powerRankText: (
      <StudsAndScrubs
        studName="Despite Daniel Jones"
        studImg="https://s.yimg.com/iu/api/res/1.2/QdblMK_4H2WYkbRJLj8pmw--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/07172024/40899.png"
        scrubName="Jaleel McWho?"
        scrubImg="https://s.yimg.com/iu/api/res/1.2/oifbw_ysm18iMfRKtxDjDA--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08122024/40696.png"
        studPts={28.7}
        scrubPts={0.6}
      />
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'B',
  },
  {
    id: '3',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/7de364b656ae287ccf84bb8e4f90fe3cf3c4befe3ef6dbde6c7ebfe0b2e82767.jpg',
    name: 'The Replacements',
    coach: 'Scott',
    record: '1-1',
    pointsFor: 225.34,
    pointsAgainst: 217.74,
    powerRank: 10,
    powerRankText: (
      <StudsAndScrubs
        studName="George Kittle"
        studImg="https://s.yimg.com/iu/api/res/1.2/Y6vEXwaOegwQkKWKgTTe9A--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/09052024/30259.png"
        scrubName="The Worse Diggs Brother"
        scrubImg="https://s.yimg.com/iu/api/res/1.2/EBIg1l25UVJDtxqH4Grg3Q--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/09092024/28534.png"
        studPts={20.6}
        scrubPts={7.7}
      />
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'D-',
  },
  {
    id: '12',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/1b498f79c6072a597eaf052dd6d2b1af353ba76db4a0b5e3721790e4b2a9fc5f.jpg',
    name: 'The Wharf Rats',
    coach: 'Marc',
    record: '1-1',
    pointsFor: 224.46,
    pointsAgainst: 274.24,
    powerRank: 7,
    powerRankText: (
      <StudsAndScrubs
        studName="Breece Hall"
        studImg="https://s.yimg.com/iu/api/res/1.2/.5fUuEYj4xsn6s7bMMHNIA--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/09092024/33991.png"
        scrubName="George Pickens"
        scrubImg="https://s.yimg.com/iu/api/res/1.2/oWR1TpcaF_Lx0qTma3maQQ--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08212023/34007.png"
        studPts={24.4}
        scrubPts={4.9}
      />
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'A+',
  },
  {
    id: '8',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_11_j.png',
    name: 'Pattibot',
    coach: 'Jackie',
    record: '0-2',
    pointsFor: 240.44,
    pointsAgainst: 252.68,
    powerRank: 4,
    powerRankText: (
      <>
        <Text style={{ marginBottom: '1rem' }}>
          <b>Pattibot</b> had a rough week, scoring <b>124 points</b> and losing to{' '}
          <b>Candace Bergen</b> by just 5.84 points. A touchdown would have won this game for
          Jackie's team, who is still looking for their first win. But with a strong roster and an
          easier upcoming schedule, I still believe in this squad.
        </Text>
        <StudsAndScrubs
          studName="CeeDee Lamb"
          studImg="https://s.yimg.com/iu/api/res/1.2/vHJd1o1fZaZvZoaao2Tvjg--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/07312024/32687.png"
          scrubName="Joe Mixup"
          scrubImg="https://s.yimg.com/iu/api/res/1.2/SL8i6PJbmAo.pqhYpS1y0A--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08152024/30161.png"
          studPts={19}
          scrubPts={8}
        />
      </>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'B-',
  },
  {
    id: '11',
    logo: 'https://s.yimg.com/ep/cx/blendr/v2/image-football-trophy-png_1721174536245.png',
    name: 'Jaiwalking to Victory',
    coach: 'Jaime',
    record: '0-2',
    pointsFor: 202.68,
    pointsAgainst: 299.98,
    powerRank: 11,
    powerRankText: (
      <StudsAndScrubs
        studName="DK Khalid"
        studImg="https://s.yimg.com/iu/api/res/1.2/Ilzja72956FiYgbLPRwQUA--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/09032024/31896.png"
        scrubName="Taylor Swift's Boyfriend"
        scrubImg="https://s.yimg.com/iu/api/res/1.2/W0rxghFDZj5yaJSXELq6BQ--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/09112024/26686.png"
        studPts={28.9}
        scrubPts={1.6}
      />
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'F',
  },
  {
    id: '7',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_h.png',
    name: "Henry's Hustle",
    coach: 'Adam',
    record: '0-2',
    pointsFor: 190.94,
    pointsAgainst: 233.39999999999998,
    powerRank: 12,
    powerRankText: (
      <StudsAndScrubs
        studName="Tush Push"
        studImg="https://s.yimg.com/iu/api/res/1.2/fs5wt.4gwElAelpcbfu5Gw--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/09172024/32723.png"
        scrubName="This isnt a real person"
        scrubImg="https://s.yimg.com/iu/api/res/1.2/W8cz_XZyJ8ND0sXLOL8_cA--~C/YXBwaWQ9eXNwb3J0cztoPTQzMDtxPTgwO3c9NjUw/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/07162024/32803.png"
        studPts={24.8}
        scrubPts={2.2}
      />
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'D+',
  },
];

export const matchups: Matchup[] = [
  {
    homeTeam: {
      name: 'Jaiwalking to Victory',
      id: '11',
      score: 114.14,
    },
    awayTeam: {
      name: 'Joey B & The Q-tips',
      id: '1',
      score: 149.2,
    },
  },
  {
    homeTeam: {
      name: 'Highly Questionable',
      id: '4',
      score: 125.94,
    },
    awayTeam: {
      name: 'Pukamon',
      id: '2',
      score: 118.24,
    },
  },
  {
    homeTeam: {
      name: "Henry's Hustle",
      id: '7',
      score: 99.22,
    },
    awayTeam: {
      name: 'The Replacements',
      id: '3',
      score: 121.16,
    },
  },
  {
    homeTeam: {
      name: 'The Wharf Rats',
      id: '12',
      score: 102.3,
    },
    awayTeam: {
      name: 'Super LaMario',
      id: '5',
      score: 158.48,
    },
  },
  {
    homeTeam: {
      name: 'Pattibot',
      id: '8',
      score: 124.68,
    },
    awayTeam: {
      name: 'Candace Bergen',
      id: '6',
      score: 130.52,
    },
  },
  {
    homeTeam: {
      name: 'Nacua Matata',
      id: '10',
      score: 87.06,
    },
    awayTeam: {
      name: 'Purdy Good',
      id: '9',
      score: 98.86,
    },
  },
];

export const article: MainArticle = {
  coverImage: Week2,
  title: 'Oops, he did it again!',
  summary:
    "Christian McCaffrey played with Zac's heart, got lost in the game. Kara talks losing her team's namesake. Joe and Nick discuss Green Bay's hottest new dating show.",
  author: 'Mason White, Commissioner',
  content: (
    <>
      <Paragraph>Welcome to the Week 2 Fantasy Newsletter, Britney Army!</Paragraph>
      <Paragraph>
        Am I going to cram every lyric to "Oops I did it Again" into one article?
      </Paragraph>
      <Paragraph>Let's just say...</Paragraph>
      <Image src="https://media.giphy.com/media/JoVB2SzGWJojVtIZQs/giphy.gif?cid=790b7611cwsa3yx04vd6v1385vy9insamw0cggehgw79z9e0&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
      <Paragraph>
        This week we're talking injuries. And dang have there been a lot of them! Actually, come to
        think of it, there might be more notable players hurt than "Dynamic Kickoff" returns so far.
      </Paragraph>
      <Paragraph>
        First, we saw Jordan Love hit the "grass" in Sao Paulo. Puka Nacua's knee said "football is
        death". Kenneth Walker III's injury status became "oh...bleek". Keenan Allen learned the
        "heel" command. Evan Engram didn't want to be associated with the Jaguars this season (who
        can blame him?). Tee Higgins still hasn't "tee'd" off yet. Raheem Mostert decided that
        De'Von Achane would handle "most ert" the carries for the first part of the season.
      </Paragraph>
      <Paragraph>
        Then Week 2 made me lose all my senses. We saw Tua Tagovailoa have yet another vicious
        concussion on Thursday night (no jokes for this one folks, too serious). Marquise
        "Hollywood" Brown decided that he would go on a writer's strike. Isiah Pacheco took the
        pregame "break a leg" well wishes a little TOO seriously. And Cooper Kupp's ankle decided
        that it had been shown up enough by Marvin Harrison Jr for one day.
      </Paragraph>
      <Paragraph>
        I had a chance to interview our resident Packers fanboys, Nick and Joe, about the
        devastating loss of Jordan Love.
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
        Coach Kara of <TeamName teamName="Pukamon" />, is also dealing with a key player being hurt,
        her team's namesake: Puka Nacua.
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
        But perhaps most dramatically, Christian McCaffrey is on the IR AGAIN after he made us all
        believe him and the 49ers were more than just friends.
      </Paragraph>
      <Paragraph>
        When I heard the news the first thought that went through my head was the chorus of Britney
        Spears' 2000 mega hit "Oops I did it Again".
      </Paragraph>
      <Paragraph>TBD....</Paragraph>
      <Paragraph>
        Now what if I told you ONE single team had Christian McCaffrey AND 3 other key injured
        players?
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
        So there you have it folks! Let's hope Week 3 cools down on the injury front because I'm not
        sure my karma can handle another article poking fun of people's injuries.
      </Paragraph>
      <Paragraph>Anyways, I'm off do some random acts of kindness!</Paragraph>
      <Exposition text="Puts headphones blaring Britney Spears back on" />
      <Image src="https://media.giphy.com/media/RhGjuQok9Bc01sagms/giphy.gif?cid=790b7611cwsa3yx04vd6v1385vy9insamw0cggehgw79z9e0&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
    </>
  ),
};

export const jokeArticles: JokeArticle[] = [
  {
    title: 'WILL TBD',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title:
      'ENTERTAINMENT: "The Bear" wins Emmy for best comedy series despite close race with the Dallas Cowboys 2024 season',
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
  name: 'Alvin Kamara',
  points: 44,
};
