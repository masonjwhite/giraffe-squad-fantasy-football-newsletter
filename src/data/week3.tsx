/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import {
  Text,
  Paper,
  Title,
  Grid,
  GridCol,
  Progress,
  Group,
  RingProgress,
  Center,
  Image as MantineImg,
} from '@mantine/core';
import { RadarChart } from '@mantine/charts';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import Paragraph from '../components/News/MainArticle/Paragraph/Paragraph';
import Image from '../components/News/MainArticle/Image/Image';
import Interview from '../components/News/MainArticle/Interview/Interview';
import Exposition from '../components/News/MainArticle/Exposition/Exposition';
import TeamName from '../components/News/MainArticle/TeamName/TeamName';
import { Team, Matchup, MainArticle, JokeArticle, Player } from '../types';
import commissionerImg from '../images/Commissioner.jpg';
import Week3 from '../images/week3.png';
import GiraffeHelmet from '../images/Giraffe_Helmet.webp';

interface powerRankingsMarkupProps {
  awardTitle: string;
  awardDescription: string;
  qbRank: number;
  rbRank: number;
  wrRank: number;
  teRank: number;
  flexRank: number;
  dstRank: number;
  kRank: number;
  playoffPercent: number;
  championPercent: number;
}

const PowerRankingsMarkup = (props: powerRankingsMarkupProps) => {
  const {
    awardTitle,
    awardDescription,
    qbRank,
    rbRank,
    wrRank,
    teRank,
    flexRank,
    dstRank,
    kRank,
    playoffPercent,
    championPercent,
  } = props;
  const getRank = (rank: number) => 12 - rank + 1;
  const getColor = (rank: number) => (rank < 7 ? '#ff9c5a' : '#fbd089');
  const data = [
    {
      position: 'QB',
      rank: getRank(qbRank),
    },
    {
      position: 'RB',
      rank: getRank(rbRank),
    },
    {
      position: 'WR',
      rank: getRank(wrRank),
    },
    {
      position: 'TE',
      rank: getRank(teRank),
    },
    {
      position: 'FLEX',
      rank: getRank(flexRank),
    },
    {
      position: 'DST',
      rank: getRank(dstRank),
    },
    {
      position: 'K',
      rank: getRank(kRank),
    },
  ];

  return (
    <>
      <Paper
        radius="md"
        withBorder
        p="sm"
        bg="var(--mantine-color-body)"
        style={{ marginBottom: '1rem' }}
      >
        <Title order={3} style={{ textAlign: 'center' }}>
          {awardTitle}
        </Title>
        {awardDescription === 'CONGRATS' ? (
          <MantineImg radius="md" src="https://i.imgflip.com/94klei.jpg" />
        ) : (
          <Text style={{ textAlign: 'center' }}>{awardDescription}</Text>
        )}
      </Paper>
      <Grid>
        <GridCol span={{ md: 6, sm: 12 }}>
          <Title order={3} style={{ textAlign: 'center' }}>
            Position Rankings
          </Title>
          <Paper radius="md" withBorder p="sm" bg="var(--mantine-color-body)">
            <Progress.Root size="2rem" style={{ marginBottom: '.5rem' }}>
              <Progress.Section value={(getRank(qbRank) / 12) * 100} color={getColor(qbRank)}>
                <Progress.Label>QB</Progress.Label>
              </Progress.Section>
            </Progress.Root>
            <Progress.Root size="2rem" style={{ marginBottom: '.5rem' }}>
              <Progress.Section value={(getRank(rbRank) / 12) * 100} color={getColor(rbRank)}>
                <Progress.Label>RB</Progress.Label>
              </Progress.Section>
            </Progress.Root>
            <Progress.Root size="2rem" style={{ marginBottom: '.5rem' }}>
              <Progress.Section value={(getRank(wrRank) / 12) * 100} color={getColor(wrRank)}>
                <Progress.Label>WR</Progress.Label>
              </Progress.Section>
            </Progress.Root>
            <Progress.Root size="2rem" style={{ marginBottom: '.5rem' }}>
              <Progress.Section value={(getRank(teRank) / 12) * 100} color={getColor(teRank)}>
                <Progress.Label>TE</Progress.Label>
              </Progress.Section>
            </Progress.Root>
            <Progress.Root size="2rem" style={{ marginBottom: '.5rem' }}>
              <Progress.Section value={(getRank(flexRank) / 12) * 100} color={getColor(flexRank)}>
                <Progress.Label>FLEX</Progress.Label>
              </Progress.Section>
            </Progress.Root>
            <Progress.Root size="2rem" style={{ marginBottom: '.5rem' }}>
              <Progress.Section value={(getRank(dstRank) / 12) * 100} color={getColor(dstRank)}>
                <Progress.Label>DST</Progress.Label>
              </Progress.Section>
            </Progress.Root>
            <Progress.Root size="2rem" style={{ marginBottom: '.5rem' }}>
              <Progress.Section value={(getRank(kRank) / 12) * 100} color={getColor(kRank)}>
                <Progress.Label>K</Progress.Label>
              </Progress.Section>
            </Progress.Root>
          </Paper>
        </GridCol>
        <GridCol span={{ md: 6, sm: 12 }}>
          <Title order={3} style={{ textAlign: 'center' }}>
            Position Strengths
          </Title>
          <Paper radius="md" withBorder p="sm" bg="var(--mantine-color-body)">
            <RadarChart
              h={300}
              data={data}
              dataKey="position"
              series={[{ name: 'rank', color: '#fbd089', strokeColor: '#ff9c5a' }]}
              withPolarGrid
            />
          </Paper>
        </GridCol>
      </Grid>
      <Grid>
        <GridCol span={{ md: 6, sm: 12 }}>
          <Paper radius="md" withBorder p="sm" bg="var(--mantine-color-body)">
            <Group>
              <RingProgress
                size={80}
                roundCaps
                thickness={8}
                sections={[
                  { value: playoffPercent * 100, color: playoffPercent > 0.5 ? 'teal' : 'red' },
                ]}
                label={
                  <Center>
                    {playoffPercent && playoffPercent > 0.5 ? (
                      <IconArrowUpRight size={20} />
                    ) : (
                      <IconArrowDownRight size={20} />
                    )}
                  </Center>
                }
              />

              <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
                  Playoff Odds
                </Text>
                <Text fw={700} size="xl">
                  {`${(playoffPercent * 100).toFixed(0)}%`}{' '}
                </Text>
              </div>
            </Group>
          </Paper>
        </GridCol>
        <GridCol span={{ md: 6, sm: 12 }}>
          <Paper radius="md" withBorder p="sm" bg="var(--mantine-color-body)">
            <Group>
              <RingProgress
                size={80}
                roundCaps
                thickness={8}
                sections={[
                  { value: championPercent * 100, color: championPercent > 0.2 ? 'teal' : 'red' },
                ]}
                label={
                  <Center>
                    {championPercent && championPercent > 0.2 ? (
                      <IconArrowUpRight size={20} />
                    ) : (
                      <IconArrowDownRight size={20} />
                    )}
                  </Center>
                }
              />

              <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
                  Champion Odds
                </Text>
                <Text fw={700} size="xl">
                  {`${(championPercent * 100).toFixed(0)}%`}
                </Text>
              </div>
            </Group>
          </Paper>
        </GridCol>
      </Grid>
    </>
  );
};

export const teams: Team[] = [
  {
    id: '5',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/46632e5f7e5ea783ff5b6916aa67cc3a1e4db1b62a34c31e88869e31fb5266a6.jpg',
    name: 'Super LaMario',
    coach: 'Will',
    record: '3-0',
    pointsFor: 423.58,
    pointsAgainst: 316.22,
    powerRank: 1,
    powerRankText: (
      <PowerRankingsMarkup
        awardTitle="TOP CHUNGUS 🏆"
        awardDescription="Super LaMario leads the league in total points through 3 weeks with 423"
        qbRank={1}
        rbRank={3}
        wrRank={3}
        teRank={9}
        flexRank={3}
        dstRank={11}
        kRank={7}
        playoffPercent={0.99}
        championPercent={0.41}
      />
    ),
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
    powerRank: 2,
    powerRankText: (
      <PowerRankingsMarkup
        awardTitle="BRAGGING RIGHTS💪"
        awardDescription="Candace Bergen blew out The Wharf Rats by 52.08pts (152.28pts to 100.2pts)"
        qbRank={9}
        rbRank={5}
        wrRank={11}
        teRank={12}
        flexRank={9}
        dstRank={10}
        kRank={10}
        playoffPercent={0.55}
        championPercent={0.3}
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
    record: '3-0',
    pointsFor: 320.58,
    pointsAgainst: 280.04,
    powerRank: 5,
    powerRankText: (
      <PowerRankingsMarkup
        awardTitle="CLOSE CALL 🤏"
        awardDescription="Purdy Good narrowly beat Joey B & The Q-tips by just over a touchdown, despite nearly the entire team falling short of expecations. Brock Purdy and Kyren Williams accounted for nearly half of the team's points and carried the squad to a W."
        qbRank={11}
        rbRank={6}
        wrRank={9}
        teRank={6}
        flexRank={7}
        dstRank={6}
        kRank={11}
        playoffPercent={0.7}
        championPercent={0.07}
      />
    ),
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
    powerRank: 3,
    powerRankText: (
      <PowerRankingsMarkup
        awardTitle="HIGH SCORE🏆"
        awardDescription="The Replacements dominated the league this week with an impressive 180pts. That's the highest score of the season so far 🔥"
        qbRank={2}
        rbRank={9}
        wrRank={6}
        teRank={4}
        flexRank={12}
        dstRank={8}
        kRank={9}
        playoffPercent={0.56}
        championPercent={0.05}
      />
    ),
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
    powerRank: 6,
    powerRankText: (
      <PowerRankingsMarkup
        awardTitle="LUCKY BREAK🍀"
        awardDescription="A touchdown could have made all the difference, as Pukamon beat Pattibot by a razor thin 5.32pts 😓"
        qbRank={3}
        rbRank={10}
        wrRank={1}
        teRank={3}
        flexRank={8}
        dstRank={2}
        kRank={6}
        playoffPercent={0.48}
        championPercent={0.04}
      />
    ),
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
    powerRank: 4,
    powerRankText: (
      <PowerRankingsMarkup
        awardTitle="NOT SO LUCKY...😡"
        awardDescription="Nacua Matata would have beat 8 out of 11 teams this week, but still ended up taking the L"
        qbRank={8}
        rbRank={4}
        wrRank={5}
        teRank={2}
        flexRank={11}
        dstRank={9}
        kRank={8}
        playoffPercent={0.64}
        championPercent={0.09}
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
    record: '1-2',
    pointsFor: 356.92,
    pointsAgainst: 337.1,
    powerRank: 8,
    powerRankText: (
      <PowerRankingsMarkup
        awardTitle="KARMA ¯\_(ツ)_/¯"
        awardDescription="The fantasy gods are fair and just. They have evaluated the Marvin Harrison Jr. heist and promptly smited Mark Andrews ability to play football. Andrews has been a total ghost on offense, he's literally just running around out there doing cardio. Mason is stacked at RB, but could use an extra body at WR to sure up the FLEX spot and account for bye weeks... maybe a deal with Henry's Hustle is in the cards?"
        qbRank={10}
        rbRank={1}
        wrRank={7}
        teRank={7}
        flexRank={10}
        dstRank={12}
        kRank={5}
        playoffPercent={0.53}
        championPercent={0.06}
      />
    ),
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
    powerRank: 10,
    powerRankText: (
      <PowerRankingsMarkup
        awardTitle="MADDEN CURSED 🎮"
        awardDescription="Zac's prized league-winning RB, and the Madden 25 cover athlete, CMC has missed every game this year and has landed on IR. Reports have him visiting a doctor in Germany and getting stem-cell treatment for his achilles tendonitis. His return, and the return of Jordan Love from injury will be crucial for Zac's playoff hopes."
        qbRank={12}
        rbRank={8}
        wrRank={4}
        teRank={8}
        flexRank={1}
        dstRank={4}
        kRank={2}
        playoffPercent={0.15}
        championPercent={0.01}
      />
    ),
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
    powerRank: 9,
    powerRankText: (
      <PowerRankingsMarkup
        awardTitle="Draft Grade Tax 💰"
        awardDescription="Wharf Rats has had the toughest strength of schedule so far of any team in the league. Opponents have dropped a cumulative 426 points on Marc's team. Better times ahead?"
        qbRank={7}
        rbRank={2}
        wrRank={12}
        teRank={11}
        flexRank={5}
        dstRank={7}
        kRank={3}
        playoffPercent={0.56}
        championPercent={0.08}
      />
    ),
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
    powerRank: 11,
    powerRankText: (
      <PowerRankingsMarkup
        awardTitle="CONGRATULATIONS"
        awardDescription="CONGRATS"
        qbRank={5}
        rbRank={12}
        wrRank={10}
        teRank={5}
        flexRank={6}
        dstRank={3}
        kRank={1}
        playoffPercent={0.06}
        championPercent={0.01}
      />
    ),
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
    powerRank: 7,
    powerRankText: (
      <PowerRankingsMarkup
        awardTitle="BOTTOM OF THE PILE😬"
        awardDescription="It wasn't the finest week for Pattibot, who was left in the dust with a lowly 98pts. Despite all evidence to the contrary though, PattiBot has a very strong team according to Yahoo ADP in the upcoming weeks, and despite being wholly winless, clings onto the 7th spot in our Power Rankings."
        qbRank={6}
        rbRank={7}
        wrRank={2}
        teRank={1}
        flexRank={2}
        dstRank={1}
        kRank={4}
        playoffPercent={0.71}
        championPercent={0.16}
      />
    ),
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
    powerRank: 12,
    powerRankText: (
      <PowerRankingsMarkup
        awardTitle="UH OH STINKY 🦧"
        awardDescription="Henry's Hustle has the lowest points scored in the league with 300, but they also have been unlucky, with opponents scoring the 3rd most points against the team cumulatively. Adam is #1 in the waiver wire priority, and is in the trade market for a RB. Better times ahead?"
        qbRank={4}
        rbRank={11}
        wrRank={8}
        teRank={10}
        flexRank={4}
        dstRank={5}
        kRank={12}
        playoffPercent={0.07}
        championPercent={0.01}
      />
    ),
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

export const powerRankingsAuthor = 'Will Stone, Deputy Commissioner';

export const article: MainArticle = {
  coverImage: Week3,
  title: 'Enter the Was(TE)land',
  summary:
    'Is the tight end position still relevant? Mason and Adam struggle with ghosts. Jackie has a "Blank Space" on her roster reserved for Travis Kecle.',
  author: 'Mason White, Commissioner',
  content: (
    <>
      <Paragraph>It's the end of the tight end position as we know it.</Paragraph>
      <Paragraph>
        Let's see if this rings a bell. You're hyped for another week of fantasy football. You and
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
      <Image src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTZ6a251cDlzbm1oOW4yMGd2ZTAzMDRtbzNodGQxcmdvOWJoeDJuMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QYencIEnoffFOrPCyX/giphy.gif" />
      <Paragraph>
        I caught up with some of the Coaches navigating this tricky post-apocalyptic landscape.
      </Paragraph>
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
        intervieweeQuote="It's been really frustrating. The man is a ghost. He's let me down more than I let down my parents when I went through that long hair phase. We're calling in The Ghost Busters (not the crappy reboot ones, the real ones from 1984) this week for an intervention."
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
        interviewerQuote="A little birdie told me you were attempting to acquire star tight end Travis Kelce at the beginning of the season. Given his subpar performance so far, do you feel like you dodged a bullet?"
        intervieweeImage={teams[10].logo}
        intervieweeName="Coach Jackie, Pattibot"
        intervieweeQuote="That is true, as a Swiftie I figured I'd be watching Chiefs games and it would make sense to acquire Kelce, but I don't know what's going on with him and Mahomes, definitely something off. I'm not losing faith yet though, Jaime may see a trade request for him yet!"
      />
      <Paragraph>
        Next up, I headed down to the farm with Coach Adam of <TeamName teamName="Henry's Hustle" />
        . His tight end, Jake Ferguson, recently laid an egg in Week 2.
      </Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote="You've been experiencing lackluster performance from your tight end, Jake Ferguson lately. To what degree is he responsible for your current last place position?"
        intervieweeImage={teams[11].logo}
        intervieweeName="Coach Adam, Henry's Hustle"
        intervieweeQuote="Tight end Jake Ferguson started weak, then was injured, but thankfully came back strong this week with 15.5 points - the second highest haul on the squad. Makes me question why on Earth I traded Jonathan Taylor to Will for Isaiah Likely. Must’ve been the champ’s Jedi mind tricks. He is powerful."
      />
      <Image src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTc1NmtkeHdlcnRiMWVoNzAyZzFrYXNjdDQyem1xZG1hcXh1ZWxydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4560Nv2656Gv0Lvp9F/giphy.gif" />
      <Paragraph>
        So there you have it folks. Is the tight end position no longer relevant? Should you spend
        more energy drafting your kicker than tight end? Are fantasy leagues going to add fullbacks?
        Is it weird that I don't eat my cereal with milk?
      </Paragraph>
      <Paragraph>🤷🏼‍♂️🤷🏼‍♂️🤷🏼‍♂️🤷🏼‍♂️</Paragraph>
      <Paragraph>And for all those out there in the Was(TE)land, stay safe!</Paragraph>
    </>
  ),
};

export const jokeArticles: JokeArticle[] = [
  {
    title: "ENTERTAINMENT: Amazon's 'Rings of Power' series to feature Jeff Bezos as Gollum",
    link: 'https://pbs.twimg.com/media/EW9WyrIUwAAk5Yy.jpg',
  },
  {
    title: 'Panthers find new position for struggling QB Bryce Young',
    link: 'https://i.redd.it/sjejyyb9ygqd1.jpeg',
  },
  {
    title: 'Taylor Swift endorses Chick-Fil-A opening on Sundays, change imminent',
    link: 'https://www.youtube.com/shorts/1lFLk5QmDyY',
  },
  {
    title:
      'REPORT: Row-level-security to blame for Cowboys tough day on defense team representative says',
    link: 'https://preview.redd.it/cowboys-fandom-in-one-picture-v0-wwmm4ygktfqd1.jpeg?width=1080&crop=smart&auto=webp&s=f65fe73996751b8fd85e0740c3239be48d1d3b04',
  },
  {
    title:
      "Miami Dolphins announce Carrot Top as their new starting quarterback: 'we like how he matches the uniforms'",
    link: 'https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTY4MTkxMjA2MDAyNjY1Mzcz/carrot-top-scott-thompsonjpg.webp',
  },
  {
    title: 'Secrets Revealed: How to score a perfect performance review',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

export const playerOfTheWeek: Player = {
  name: 'Jauan Jennings',
  points: 46.5,
};
