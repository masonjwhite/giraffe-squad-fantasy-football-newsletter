/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import { Text, Image as MantineImage } from '@mantine/core';
import Image from '../components/News/MainArticle/Image/Image';
import Paragraph from '../components/News/MainArticle/Paragraph/Paragraph';
import Exposition from '../components/News/MainArticle/Exposition/Exposition';
import Interview from '../components/News/MainArticle/Interview/Interview';
import TeamName from '../components/News/MainArticle/TeamName/TeamName';
import { Team, Matchup, MainArticle, JokeArticle, Player } from '../types';
import commissionerImg from '../images/Commissioner.jpg';
import Week5 from '../images/week5.png';
import GiraffeHelmet from '../images/Giraffe_Helmet.webp';

function MoviePowerRanking({ blurb, posterUrl }: { blurb: string; posterUrl: string }) {
  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Text>{blurb}</Text>
      <MantineImage style={{ marginTop: '1rem' }} w={250} src={posterUrl} />
    </div>
  );
}

export const teams: Team[] = [
  {
    id: '5',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/46632e5f7e5ea783ff5b6916aa67cc3a1e4db1b62a34c31e88869e31fb5266a6.jpg',
    name: 'Super LaMario',
    coach: 'Will',
    record: '5-0',
    pointsFor: 669.32,
    pointsAgainst: 535.5600000000001,
    powerRank: 1,
    powerRankText: (
      <MoviePowerRanking
        blurb="3 Championships and sitting comfortably at 5-0? My friend, you bow to no one."
        posterUrl="https://m.media-amazon.com/images/I/81lD6R3Yu6L._AC_UF894,1000_QL80_.jpg"
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
    record: '4-1',
    pointsFor: 605.48,
    pointsAgainst: 537.5,
    powerRank: 2,
    powerRankText: (
      <MoviePowerRanking
        blurb="This movie not only stars Candace Bergen, but is also a great metaphor for Coach Zari after a big bounce back win in Week 5."
        posterUrl="https://upload.wikimedia.org/wikipedia/en/8/86/Let_Them_All_Talk_%28film%29.png"
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
    record: '4-1',
    pointsFor: 550.26,
    pointsAgainst: 504.08,
    powerRank: 4,
    powerRankText: (
      <MoviePowerRanking
        blurb="Oh, yeah. Oooh, ahhh, that's how it always starts. Then later there's running and screaming."
        posterUrl="https://i.ebayimg.com/00/s/MTYwMFgxMTA1/z/V-MAAOSwGhxgsOhn/$_57.JPG?set_id=8800005007"
      />
    ),
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
    powerRank: 3,
    powerRankText: (
      <MoviePowerRanking
        blurb="3 in a row!"
        posterUrl="https://m.media-amazon.com/images/M/MV5BNzA5OTdiMTAtN2E0OS00ZGMwLWI4NjAtZmZmZjhiYzQyYWIzXkEyXkFqcGc@._V1_.jpg"
      />
    ),
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
    powerRank: 5,
    powerRankText: (
      <MoviePowerRanking
        blurb="Mewtwo vs. Mew? More like Puka Nacua vs. Puka Nacua's Knee"
        posterUrl="https://m.media-amazon.com/images/I/71TQ8HJ1I0L._AC_UF894,1000_QL80_.jpg"
      />
    ),
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
    powerRank: 6,
    powerRankText: (
      <MoviePowerRanking
        blurb="It was always a risk drafting Rashee Rice..."
        posterUrl="https://m.media-amazon.com/images/I/61lgGNxNDKL._AC_UF894,1000_QL80_.jpg"
      />
    ),
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
    powerRank: 7,
    powerRankText: (
      <MoviePowerRanking
        blurb="An explosive 165 points in Week 5. Coach Adam has become Death, the destroyer of fantasy seasons."
        posterUrl="https://m.media-amazon.com/images/I/71xDtUSyAKL._AC_UF894,1000_QL80_.jpg"
      />
    ),
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
    powerRank: 12,
    powerRankText: (
      <MoviePowerRanking
        blurb="Hopefully this works..."
        posterUrl="https://i.ytimg.com/vi/k5BaGgyK_K4/sddefault.jpg"
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
    record: '2-3',
    pointsFor: 551.92,
    pointsAgainst: 581.44,
    powerRank: 8,
    powerRankText: (
      <MoviePowerRanking
        blurb="Malik Nabers, Davante Adams AND Christian McCaffrey are all out. Coach Zac is grinding through some viscious left hooks this season."
        posterUrl="https://m.media-amazon.com/images/I/61MZdcVwQFL._AC_UF894,1000_QL80_.jpg"
      />
    ),
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
    powerRank: 10,
    powerRankText: (
      <MoviePowerRanking
        blurb="I'm not sure he could save Coach Nick's season now anyways..."
        posterUrl="https://m.media-amazon.com/images/M/MV5BMTYxODQ0MjY4MV5BMl5BanBnXkFtZTcwMzAzMTg3OA@@._V1_.jpg"
      />
    ),
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
    powerRank: 9,
    powerRankText: (
      <MoviePowerRanking
        blurb="She may have been on the bench through the first 4 weeks, but Coach Jackie finally made it into the big game this week!"
        posterUrl="https://m.media-amazon.com/images/I/611oGlzwLcL._AC_UF894,1000_QL80_.jpg"
      />
    ),
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
    powerRank: 11,
    powerRankText: (
      <MoviePowerRanking
        blurb="About that A+ draft grade..."
        posterUrl="https://m.media-amazon.com/images/I/61PSJy2niwL._AC_UF894,1000_QL80_.jpg"
      />
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'A+',
  },
];

export const matchups: Matchup[] = [
  {
    homeTeam: {
      name: "Henry's Hustle",
      id: '7',
      score: 165.56,
    },
    awayTeam: {
      name: 'Joey B & The Q-tips',
      id: '1',
      score: 104.8,
    },
  },
  {
    homeTeam: {
      name: 'Candace Bergen',
      id: '6',
      score: 97.78,
    },
    awayTeam: {
      name: 'Pukamon',
      id: '2',
      score: 85.6,
    },
  },
  {
    homeTeam: {
      name: 'Highly Questionable',
      id: '4',
      score: 121.46,
    },
    awayTeam: {
      name: 'The Replacements',
      id: '3',
      score: 119.44,
    },
  },
  {
    homeTeam: {
      name: 'Nacua Matata',
      id: '10',
      score: 115.5,
    },
    awayTeam: {
      name: 'Super LaMario',
      id: '5',
      score: 122.22,
    },
  },
  {
    homeTeam: {
      name: 'Purdy Good',
      id: '9',
      score: 120.26,
    },
    awayTeam: {
      name: 'Pattibot',
      id: '8',
      score: 127.02,
    },
  },
  {
    homeTeam: {
      name: 'The Wharf Rats',
      id: '12',
      score: 102.44,
    },
    awayTeam: {
      name: 'Jaiwalking to Victory',
      id: '11',
      score: 130.84,
    },
  },
];

export const powerRankingsAuthor = 'Mason White, Commissioner';

export const article: MainArticle = {
  coverImage: Week5,
  title: 'The "Uh Oh Stinky" Effect',
  summary: 'Is our league being blessed by an overweight orangutan...?',
  author: 'Mason White, Commissioner',
  content: (
    <>
      <Paragraph>I'm baccccckkkkk!</Paragraph>
      <Paragraph>
        After a brief hiatus due to vacation, I'm back and ready to serve up an article that will
        make you laugh, make you cry, make you cringe and most importantly, make you question why I
        continue to do this every week.
      </Paragraph>
      <Image
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTVodnZvNzhha3RyaWVoaHBlcGNybngwNm5hNmd2NHo1ano5bWNlMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/b6iVj3IM54Abm/giphy.gif"
        caption="Me returning from vacation ready to cook up a killer article"
      />
      <Exposition text="Changes into priest outfit" />
      <Paragraph>Do you have a moment to talk about our lord and savior, "Uh Oh Stinky"?</Paragraph>
      <Paragraph>
        This obese monke (pronounced "mon kay" by the Gen Z kids) is dishing out more fantasy
        football mojo than a healthy Christian McCaffrey playing against 4th graders.
      </Paragraph>
      <Paragraph>
        What if I told you that every team that has been blessed with the "Uh Oh Stinky" power
        ranking has seen a significant improvement in their team's play in the subsequent weeks?
      </Paragraph>
      <Paragraph>
        It's true. You can fact check me like a Vice Presidential Candidate on that.
      </Paragraph>
      <Paragraph>
        Week 1's recipient was <TeamName teamName="Jaiwalking to Victory" /> following an abysmal
        draft and Week 1, scoring just 88 points. After receiving the blessing from our chubby
        orangutan, the team went on to win their first, second AND third games of the season. Coach
        Jaime is actually kind of jay walking to victory...
      </Paragraph>
      <Paragraph>Not converted yet?</Paragraph>
      <Paragraph>
        <TeamName teamName="Henry's Hustle" /> received a double dose of stinky in Weeks 2 and 3.
        Since then, he's gone on to win not only his first game, but also exploded for 165 points
        against yours truly in Week 5.
      </Paragraph>
      <Paragraph>Starting to have a religious experience?</Paragraph>
      <Paragraph>
        My final piece of evidence is <TeamName teamName="Pattibot" />, who received the "Uh Oh
        Stinky" in Week 4. The squad went on to pummel the UNDEAFTED{' '}
        <TeamName teamName="Purdy Good" /> in Week 5 for their first win.
      </Paragraph>
      <Image src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2hzd2IxM3RyN3R6ZmFqMzczdXVmenYwbnd3dTB1cHV5MzNuNnl3OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/doUu2ByZDbPYQ/giphy.gif" />
      <Paragraph>
        I just had to see what a few of our league's coaches about this miraculous phenomenon.
      </Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote={
          'Do you believe that after you received the "Uh Oh Stinky" power ranking last week your team suddenly got better? Starting to wonder if it\'s a blessing vs. a curse...'
        }
        intervieweeImage={teams[10].logo}
        intervieweeName="Coach Jackie, Pattibot"
        intervieweeQuote={
          'I recall getting the "uh oh stinky" power ranking and thinking, I can\'t go lower than this, so I do think it bolstered me to make some moves and be risky. Hoping this is the start of a turn around!'
        }
      />
      <Paragraph>
        You gotta risk it for the biscuit, Coach Jackie! Next I caught up with a neutral party,
        Coach Zari, who hasn't gotten the "Uh Oh Stinky!" blessing yet.
      </Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote={
          'Are you believer or a skeptic that the "Uh Oh Stinky" power ranking is giving teams an unfair advantage? All of the teams that have received it seem to instantly get better.'
        }
        intervieweeImage={teams[1].logo}
        intervieweeName="Coach Zari, Candace Bergen"
        intervieweeQuote="I'm a believer! There is something fishy going on. Seems like the title is motivating the players."
      />
      <Image src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWdmcm16dDFwbHgwY250bm45ZWV0ZXkyN2l6bDdqcHBieWNuMnB2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Jl0T1gCUKl1PETWZOq/giphy.gif" />
      <Paragraph>
        Finally, I chatted with the first ever recipient of the "Uh Oh Stinky" ranking, Coach Jaime,
        who's miraculously won 3 games in a row!
      </Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote={
          'You received the "Uh Oh Stinky" power ranking in Week 1. Now you\'ve won 3 games in a row, was it secretly a blessing?'
        }
        intervieweeImage={teams[3].logo}
        intervieweeName="Coach Jaime, Jaiwalking to Victory"
        intervieweeQuote="Honestly, they couldn't get any worse; they were literally at the bottom! Blessing or curse.....neither. I threatened I'd cut each and every single one of my players and now they're performing. On our way to the top!"
      />
      <Paragraph>
        So there you have it! What do you think? Blessing? Curse? Coincidence? A stretch because I
        couldn't think of an article idea this week?
      </Paragraph>
      <Paragraph>
        All I know is that with Will still on vacation and me in charge of the power rankings, you
        better believe I'll be putting myself at number 12 this week to get my share of this
        orangutan-tastic divine power!
      </Paragraph>
      <Paragraph>Amen!</Paragraph>
    </>
  ),
};

export const jokeArticles: JokeArticle[] = [
  {
    title: 'MOVIES: Joker 2 deemed the worst sequel since World War II',
    link: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2F5ajV6Y3NyeGx1dWxwc3gwa25uaG42N3dwY3N1NXhyb3F2Y3BheSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AIN92uOXDQWi35LGRD/giphy.gif',
  },
  {
    title: 'Swag Surfing to become an olympic sport in 2028 Summer Olympics',
    link: 'https://packaged-media.redd.it/z4h5hyn8unsd1/pb/m2-res_1080p.mp4?m=DASHPlaylist.mpd&v=1&e=1728363600&s=175cc278e1aad2ff004e0f210bc3b6262db9ad2b',
  },
  {
    title:
      "Robert Saleh fired as Jets Head Coach for looking too much like Imhotep from 'The Mummy' movie franchise",
    link: 'https://ibb.co/vPmxBgq',
  },
  {
    title: 'US Military engineers to study Derrick Henry for new tank design',
    link: 'https://youtube.com/shorts/Zukeq3NYu7A?si=9FipBNM8E68Q8RhA',
  },
  {
    title: 'Bills medical staff: "Josh Allen thought he was Tim Allen after viscious head injury"',
    link: 'https://www.youtube.com/watch?v=LehNm4VVqJI',
  },
];

export const playerOfTheWeek: Player = {
  name: "Ja'Marr Chase",
  points: 41.3,
};
