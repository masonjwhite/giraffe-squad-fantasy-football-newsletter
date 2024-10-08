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
    record: '4-0',
    pointsFor: 547.1,
    pointsAgainst: 420.06000000000006,
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
    id: '9',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_3_j.png',
    name: 'Purdy Good',
    coach: 'Joe',
    record: '4-0',
    pointsFor: 430.0,
    pointsAgainst: 377.06,
    powerRank: 0,
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
    id: '6',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/e7180887533d328d002f500a6008232752eeb20ad3418d992f7f529e286eca6b.jpg',
    name: 'Candace Bergen',
    coach: 'Zari',
    record: '3-1',
    pointsFor: 507.7,
    pointsAgainst: 451.9,
    powerRank: 0,
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
    id: '2',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_1_k.png',
    name: 'Pukamon',
    coach: 'Kara',
    record: '3-1',
    pointsFor: 448.98,
    pointsAgainst: 427.26,
    powerRank: 0,
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
    record: '2-2',
    pointsFor: 516.98,
    pointsAgainst: 465.3,
    powerRank: 0,
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
    id: '1',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/64203cd3285f9f3871a185bb8c326d4dd9b6d25bea1d1118293a6043b40fd93e.png',
    name: 'Joey B & The Q-tips',
    coach: 'Mason',
    record: '2-2',
    pointsFor: 470.5,
    pointsAgainst: 448.90000000000003,
    powerRank: 0,
    powerRankText: (
      <MoviePowerRanking
        blurb="Mark Andrews actually got more than 0 points this week. He's still a ghost though."
        posterUrl="https://m.media-amazon.com/images/I/51wPxyWnA3L.jpg"
      />
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'D',
  },
  {
    id: '11',
    logo: 'https://s.yimg.com/ep/cx/blendr/v2/image-football-trophy-png_1721174536245.png',
    name: 'Jaiwalking to Victory',
    coach: 'Jaime',
    record: '2-2',
    pointsFor: 418.06,
    pointsAgainst: 504.1,
    powerRank: 0,
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
    id: '10',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_10_n.png',
    name: 'Nacua Matata',
    coach: 'Nick',
    record: '1-3',
    pointsFor: 485.76,
    pointsAgainst: 490.26,
    powerRank: 0,
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
    id: '4',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/4fecee0eff529cd27243f5a74b1730153aafee3a3a1adf65e4e090c617d2ddaf.jpg',
    name: 'Highly Questionable',
    coach: 'Zac',
    record: '1-3',
    pointsFor: 430.46,
    pointsAgainst: 462.00000000000006,
    powerRank: 0,
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
    id: '7',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_h.png',
    name: "Henry's Hustle",
    coach: 'Adam',
    record: '1-3',
    pointsFor: 423.7,
    pointsAgainst: 493.92,
    powerRank: 0,
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
    id: '12',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/1b498f79c6072a597eaf052dd6d2b1af353ba76db4a0b5e3721790e4b2a9fc5f.jpg',
    name: 'The Wharf Rats',
    coach: 'Marc',
    record: '1-3',
    pointsFor: 421.16,
    pointsAgainst: 540.1,
    powerRank: 0,
    powerRankText: (
      <MoviePowerRanking
        blurb="You know what's coming..."
        posterUrl="https://i.ytimg.com/vi/k5BaGgyK_K4/sddefault.jpg"
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
    record: '0-4',
    pointsFor: 438.92,
    pointsAgainst: 458.46000000000004,
    powerRank: 0,
    powerRankText: (
      <MoviePowerRanking
        blurb="Pattibot may have been on the bench through the first 4 weeks, but Coach Jackie made it into the big game this week!"
        posterUrl="https://m.media-amazon.com/images/I/611oGlzwLcL._AC_UF894,1000_QL80_.jpg"
      />
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'B-',
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
      score: 85.38,
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
      score: 111.46,
    },
    awayTeam: {
      name: 'Pattibot',
      id: '8',
      score: 110.02,
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
      score: 100.4,
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
        ranking has seen a significant improvement in their team's play in the subsequent weeks
        following the blessing.
      </Paragraph>
      <Paragraph>
        It's true. You can fact check me harder than a Vice Presidential Candidate on that.
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
        Since then, he's gone on to win not only his first game, but also exploded for 165 points in
        Week 5.
      </Paragraph>
      <Paragraph>Starting to have a religious experience?</Paragraph>
      <Paragraph>
        My final piece of evidence is <TeamName teamName="Pattibot" />, who received the "Uh Oh
        Stinky" in Week 4. The Pattibot squad went on to pummel the UNDEAFTED{' '}
        <TeamName teamName="Purdy Good" /> in Week 5 for their first win.
      </Paragraph>
      <Image src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2hzd2IxM3RyN3R6ZmFqMzczdXVmenYwbnd3dTB1cHV5MzNuNnl3OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/doUu2ByZDbPYQ/giphy.gif" />
      <Paragraph>
        I just had to see what a few of our league's coaches about this miraculous phenomenon.
      </Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote="TBD"
        intervieweeName="Coach Jackie, Pattibot"
        intervieweeQuote="TBD"
      />
      <Paragraph>TBD</Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote="TBD"
        intervieweeName="Coach Zari, Candace Bergen"
        intervieweeQuote="TBD"
      />
      <Paragraph>TBD</Paragraph>
      <Interview
        interviewerImage={commissionerImg}
        interviewerName="Mason White, Commissioner"
        interviewerQuote="TBD"
        intervieweeName="Coach Jaime, Jaiwalking to Victory"
        intervieweeQuote="TBD"
      />
      <Paragraph>TBD</Paragraph>
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
    title: "Hurricane Milton to be renamed Hurricane Milton Bradley because it's creating Trouble",
    link: 'https://www.youtube.com/watch?v=qe163arhs_I',
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
  name: 'Dak Prescott',
  points: 31,
};
