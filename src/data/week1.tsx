/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */

import { Text } from '@mantine/core';
import { Team, Matchup, MainArticle, JokeArticle, Player } from '../types';
import Paragraph from '../components/News/MainArticle/Paragraph/Paragraph';
import Exposition from '../components/News/MainArticle/Exposition/Exposition';
import Interview from '../components/News/MainArticle/Interview/Interview';
import TeamName from '../components/News/MainArticle/TeamName/TeamName';
import commissionerImg from '../images/Commissioner.jpg';
import Week1 from '../images/week1.png';
import GiraffeHelmet from '../images/Giraffe_Helmet.webp';
import WharfRatHelmet from '../images/wharf_rats_helmet.webp';
import LamarioHelmet from '../images/lamario_helmet.webp';

export const teams: Team[] = [
  {
    id: '1',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/64203cd3285f9f3871a185bb8c326d4dd9b6d25bea1d1118293a6043b40fd93e.png',
    name: 'Joey B & The Q-tips',
    coach: 'Mason',
    record: '0-1',
    pointsFor: 106.46,
    pointsAgainst: 113.48,
    powerRank: 8,
    powerRankText: (
      <Text>
        Our honorable commissioner and head coach of <b>Joey B & The Q-Tips</b>, <b>Mason White</b>,
        slides into the 8th spot to start the season after a dissapointing loss to <b>Pukamon</b>.
        Mark Andrews did the heavy lifting for <b>Kara's</b> team by completely sinking{' '}
        <b>The Q-Tips</b>, meanwhile, <b>Joey B</b> looked like a JV quarterback playing against a
        Patriots squad that entered the year with about as much hype as your yearly W2.
        <br />
        <br />
        <b>Draft Grade:</b> D
        <br />
        <b>Panic Meter: </b>
        <a
          href="https://www.tiktok.com/@out.of.pocket.sports/video/7411383559883214110"
          target="_blank"
          rel="noreferrer"
        >
          save the children
        </a>
      </Text>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'D',
  },
  {
    id: '2',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_1_k.png',
    name: 'Pukamon',
    coach: 'Kara',
    record: '1-0',
    pointsFor: 113.48,
    pointsAgainst: 106.46,
    powerRank: 6,
    powerRankText: (
      <Text>
        <b>Pukamon</b> starts the season with a strong win over <b>Joey B & The Q-tips</b> but
        settles into the middle of these power rankings following the loss of their titular player,{' '}
        <b>Puka Nacua</b> to IR. Kara will need to pray that 50 year old Tyler Lockett or the corpse
        of DeAndre Hopkins can replace Puka's fantasy impact.
        <br />
        <br />
        <b>Draft Grade:</b> B-
        <br />
        <b>Panic Meter: </b>
        <a
          href="https://www.tiktok.com/@orthomurse2009/video/7412829933606685994?q=puka%20nacua%20meme&t=1726012820195"
          target="_blank"
          rel="noreferrer"
        >
          Kara right now
        </a>
      </Text>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'B-',
  },
  {
    id: '3',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/7de364b656ae287ccf84bb8e4f90fe3cf3c4befe3ef6dbde6c7ebfe0b2e82767.jpg',
    name: 'The Replacements',
    coach: 'Scott',
    record: '0-1',
    pointsFor: 104.18,
    pointsAgainst: 118.52,
    powerRank: 10,
    powerRankText: (
      <Text>
        <b>The Replacements</b>, one of our league's newest additions, started their fantasy career
        with some growing pains, but there is a lot to be optimistic about with this team. Josh
        Allen put up video game numbers scoring over <b>31 points</b>, but Scott got no contribution
        from his running backs, with Derrick Henry, Raheem Mostert, and Javonte Williams{' '}
        <b>COMBINING</b> for less than 17 points. These next few weeks will be about finding out
        whether that's the rule or the exception for this team.
        <br />
        <br />
        <b>Draft Grade: D-</b>
        <br />
        <b>
          Panic Meter:{' '}
          <a
            href="https://www.tiktok.com/@coolaid121/video/7361203631913291051?q=derrick%20henry%20meme&t=1726013202219"
            target="_blank"
            rel="noreferrer"
          >
            give it some time
          </a>
        </b>
      </Text>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'D-',
  },
  {
    id: '4',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s90sq/fantasy-logos/c56308dc24fb248e2b7aa0d46db5437685efbde43722ce3a687d31023e7f8d6a.jpg',
    name: 'Kirkin it Old-School',
    coach: 'Zac',
    record: '0-1',
    pointsFor: 103.5,
    pointsAgainst: 121.06,
    powerRank: 9,
    powerRankText: (
      <Text>
        <b>Kirkin it Old-School</b>The artist formerly known as <b>All you need is Love</b> would
        probably like to forget the season opener this year. The real headline here is around player
        health. CMC was a late scratch for Monday night with an achilles injury that ultimately
        tanked this game, but injury to starting QB Jordan Love now thrusts the ancient Kirk
        Cousins, one year removed from forgetting to not tear his achilles into the starting role.
        Kirko's first game did not inspire much confience... but it's a long season.
        <br />
        <br />
        <b>Draft Grade:</b> B
        <br />
        <b>Panic Meter: </b>
        <a
          href="https://www.reddit.com/r/GreenBayPackers/comments/1fdlgj4/with_apologies_to_matt_lafleur/"
          target="_blank"
          rel="noreferrer"
        >
          Brainrot on Packers subreddit
        </a>
      </Text>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'B',
  },
  {
    id: '5',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/46632e5f7e5ea783ff5b6916aa67cc3a1e4db1b62a34c31e88869e31fb5266a6.jpg',
    name: 'Super LaMario',
    coach: 'Will',
    record: '1-0',
    pointsFor: 118.52,
    pointsAgainst: 104.18,
    powerRank: 7,
    powerRankText: (
      <Text>
        As my <b>3</b> fantasy trophies can attest, <b>C's earn degrees.</b>
        <br />
        <br />
        <b>Draft Grade:</b> C
      </Text>
    ),
    helmetImage: LamarioHelmet,
    draftGrade: 'C',
  },
  {
    id: '6',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/e7180887533d328d002f500a6008232752eeb20ad3418d992f7f529e286eca6b.jpg',
    name: 'Candace Bergen',
    coach: 'Zari',
    record: '1-0',
    pointsFor: 121.06,
    pointsAgainst: 103.5,
    powerRank: 3,
    powerRankText: (
      <Text>
        <b>Candace Bergen</b> starts the season with a strong win over <b>All you need is Love</b>{' '}
        and takes the third spot in these power rankings. The team was led by the newly crowned
        highest paid player in NFL history, the rightful handsomist man alive and future NFL 2024
        MVP and 2024 Super-Bowl MVP, first ballot Hall of Famer and one day GOAT{' '}
        <b>Rayne Dakota Prescott</b> - who was stolen in cold blood but that's cool I guess.
        <br />
        <br />
        <b>Draft Grade:</b> C+
        <br />
        <b>Panic Meter: </b>
        <a
          href="https://www.tiktok.com/@nflonfox/video/7327504105121811742?q=dak%20prescott%20here%20we%20go&t=1726014231689"
          target="_blank"
          rel="noreferrer"
        >
          yeah here we go
        </a>
      </Text>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'C+',
  },
  {
    id: '7',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_h.png',
    name: "Henry's Hustle",
    coach: 'Adam',
    record: '0-1',
    pointsFor: 91.72,
    pointsAgainst: 112.24,
    powerRank: 11,
    powerRankText: (
      <Text>
        <b>Adam</b> can exit this week blaming Jake Ferguson's MCL sabotaging opening night or Scary
        Terry forgetting their was a game, but only <b>2 out of 10</b> starters on the team reached
        their expected points this week. The team will need to find some consistency to get back on
        track, but with a breakout game from bench player <b>JK Dobbins</b> and a little luck, they
        could be back in the mix.
        <br />
        <br />
        <b>Draft Grade:</b> D+
        <br />
        <b>Panic Meter: </b>
        🚨
      </Text>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'D+',
  },
  {
    id: '8',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_11_j.png',
    name: 'Pattibot',
    coach: 'Jackie',
    record: '0-1',
    pointsFor: 115.76,
    pointsAgainst: 122.16,
    powerRank: 4,
    powerRankText: (
      <Text>
        Maybe a hot take, but I'm putting <b>Pattibot</b> in the top 4 after a close loss to{' '}
        <b>Wharf Rats</b> in the season opener. Patti Bot is the only team in the league with 3
        "Elite" players according to Yahoo, with Trey McBride, CeeDee Lamb and Joe Mixon. Expect
        this team to find its footing and be a contender all season long. The one thing to look out
        for is the fantasy value of Drake London, who was projected to be a top 10 reciever this
        year but scored a measly 3 points this week.
        <br />
        <br />
        <b>Draft Grade:</b> B-
        <br />
        <b>Panic Meter: </b>
        <a
          href="https://www.tiktok.com/@dirtyjsports/video/7278352880317254958?q=drake%20london&t=1726014688832"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          I hope you're hungry
        </a>
      </Text>
    ),
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
    powerRank: 5,
    powerRankText: (
      <Text>
        Getting a win and escaping the week without any major injuries is a win in itself.{' '}
        <b>Purdy Good</b> Will look to get more production out of the TE position going forward, but
        with a solid core of players and a bench featuring Xavier Worthy, Joe doesn't lack
        firepower.
        <br />
        <br />
        <b>Draft Grade:</b> A-
        <br />
        <b>Panic Meter: </b>
        🥱
      </Text>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'A-',
  },
  {
    id: '10',
    logo: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_10_n.png',
    name: 'Nacua Matata',
    coach: 'Nick',
    record: '1-0',
    pointsFor: 150.78,
    pointsAgainst: 88.54,
    powerRank: 1,
    powerRankText: (
      <Text>
        <b>Nacua Matata</b> firmly establishes itself as the team to beat after a dominant Week 1
        performance. The team put up the highest score of the week and had the largest margin of
        victory. But can they keep it up? Anthony Richardson is a walking boom-or-bust player, and
        had some chunk plays that could easily have gone the other way.
        <br />
        <br />
        <b>Draft Grade:</b> A-
        <br />
        <b>Panic Meter: </b>
        😎
      </Text>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'A-',
  },
  {
    id: '11',
    logo: 'https://s.yimg.com/ep/cx/blendr/v2/image-football-trophy-png_1721174536245.png',
    name: 'Jaiwalking to Victory',
    coach: 'Jaime',
    record: '0-1',
    pointsFor: 88.54,
    pointsAgainst: 150.78,
    powerRank: 12,
    powerRankText: (
      <Text>
        <b>Jaiwalking to Victory</b> had a rough start to the season, putting up the lowest score of
        the week with a cool 88. But don&apos;t count them out just yet! With many players
        completely forgetting to show up this week, there's only direction to go from here.
        <br />
        <br />
        This is just one of two teams to have 0 "Elite" players - top 20 players defined by Yahoo -
        and will need to rely on depth to make up the difference. The only problem is there isn't
        much depth to get excited about here.
        <br />
        <br />
        <b>Draft Grade: F</b>
        <br />
        <b>
          Panic Meter:{' '}
          <a
            href="https://www.google.com/search?q=uh+oh+stinkuy&oq=uh+oh+stinkuy&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABixAxiABDIHCAIQABiABDIHCAMQABiABDIHCAQQLhiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDE2ODdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:790496af,vid:FveF-we6lcE,st:0"
            target="_blank"
            rel="noreferrer"
          >
            uh oh stinky
          </a>
        </b>
      </Text>
    ),
    helmetImage: GiraffeHelmet,
    draftGrade: 'F',
  },
  {
    id: '12',
    logo: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/1b498f79c6072a597eaf052dd6d2b1af353ba76db4a0b5e3721790e4b2a9fc5f.jpg',
    name: 'The Wharf Rats',
    coach: 'Marc',
    record: '1-0',
    pointsFor: 122.16,
    pointsAgainst: 115.76,
    powerRank: 2,
    powerRankText: (
      <Text>
        Yahoo was quick to crown <b>The Wharf Rats</b> as the team to beat this season, awarding
        them with a draft grade of <b>A+</b>, so it&apos;s no suprise Marc's team finds itself in
        the top 2 after a close win over <b>Pattibot</b>. The most impressive part of this
        team&apos;s win was the fact that their WR&apos;s combined for 11 points. Marc&apos;s squad
        got contributions from the often forgotten positions, with their Defense and Kickers hauling
        in <b>34 combined points.</b>
        <br />
        <br />
        <b>Draft Grade:</b> A+
        <br />
        <b>Panic Meter: </b>
        <a
          href="https://cdn.memes.com/up/11365011627511492/i/1627769424531.jpg"
          target="_blank"
          rel="noreferrer"
        >
          Yahoo's golden child
        </a>
      </Text>
    ),
    helmetImage: WharfRatHelmet,
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
      score: 106.46,
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
      score: 104.18,
    },
  },
  {
    homeTeam: {
      name: 'Candace Bergen',
      id: '6',
      score: 121.06,
    },
    awayTeam: {
      name: 'Kirkin it Old-School',
      id: '4',
      score: 103.5,
    },
  },
  {
    homeTeam: {
      name: 'Purdy Good',
      id: '9',
      score: 112.24,
    },
    awayTeam: {
      name: "Henry's Hustle",
      id: '7',
      score: 91.72,
    },
  },
  {
    homeTeam: {
      name: 'The Wharf Rats',
      id: '12',
      score: 122.16,
    },
    awayTeam: {
      name: 'Pattibot',
      id: '8',
      score: 115.76,
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

export const powerRankingsAuthor = 'Will Stone, Deputy Commissioner';

export const article: MainArticle = {
  coverImage: Week1,
  title: 'Making the Grade',
  summary:
    'Ever wanted an A+ draft grade? Marc reveals his secrets. Jaime shares woes of being a newbie. Scott confronts questionable ethics concerns by using his child as his team logo.',
  author: 'Mason White, Commissioner',
  content: (
    <>
      <Paragraph>Welcome back fantasy football maniacs, managers and masochsits!</Paragraph>
      <Paragraph>WE ARE BACK FOR OUR 5TH ANNIVERSARY SEASON!</Paragraph>
      <Paragraph>
        We&apos;re pulling out all the stops to celebrate this milestone! Firstly, Deputy
        Commisioner Will Stone and I are proud to debut our brand-new newsletter website (if
        you&apos;re reading this you&apos;re on it). You like dat? You better... we sacrificed our
        Labor Day Weekend for this monstrosity.
      </Paragraph>
      <Paragraph>
        And if that doesn&apos;t have you as excited as Travis Kelce getting a new endorsement deal,
        we are also pleased to announce that we will be awarding this year&apos;s winner a replica
        Lombardi Trophy complete with league branding!
      </Paragraph>
      <Paragraph>
        Snazzy websites and trophies aren&apos;t all that&apos;s new this year, we also added 3 new
        teams to our league! I am pleased to welcome Marc, Jaime and Scott to the league.
        They&apos;ve joined our merry band of misfits for 2025 and I couldn&apos;t be happier to
        have them.
      </Paragraph>
      <Exposition text="Awkward Tom Brady broadcast pause" />
      <Paragraph>
        Let&apos;s zoom in on these new faces! I got a chance to catch up with each of them this
        week and ask a question or two about their first week as Giraffe Squad Fantasy Football
        League coaches.
      </Paragraph>
      <Paragraph>
        First up is not only a league newcomer, but also fantasy football newcomer in general,
        <TeamName teamName="Jaiwalking to Victory" />
        &apos;s Coach Jaime. She&apos;s a brave soul for signing up for this league that is not only
        competitive, but will also shame you on a website for the whole internet to see if you play
        poorly. Did she know that when I asked her to join? Nope. Too late now 🤷🏼‍♂️.
      </Paragraph>
      <Interview
        interviewerName="Mason White, Commissioner"
        interviewerQuote="How do you feel your first fantasy football week went?"
        interviewerImage={commissionerImg}
        intervieweeName="Coach Jaime, Jaiwalking to Victory"
        intervieweeQuote={`
          (Redcated)....It looked like (redacted), definitely smelt like (redacted) and I bet if
          I were to taste it, it would be (redacted)! Hey, but it's only the first week, I
          feel confident in my ability as a coach to mess up the rest of the year and somehow
          come out on top.
        `}
        intervieweeImage={teams[10].logo}
      />
      <Paragraph>
        That&apos;s a veteran move Jaime! Keeping calm when the (redacted) hits the fan. And after
        looking at my squad&apos;s Week 1 performance, we might have to battle for who will come in
        last this season. Just be glad we&apos;re not one of those leagues that make the last place
        coach take the SAT in a Limu Emu costume.....yet.
      </Paragraph>
      <Paragraph>
        Next up we have Coach Scott, who is leading <TeamName teamName="The Replacements" />
        this year. I noticed something interesting about the team logo when he joined the league...
        it&apos;s his adorable daughter! There have been some questions raised by our league
        &ldquo;Logo Ethics Committee&rdquo; about using his daughter as his logo. I caught up with
        him about the matter.
      </Paragraph>
      <Interview
        interviewerName="Mason White, Commissioner"
        interviewerQuote={`
          With your daughter being your logo, how are you planning on using the merchandising
          royalties? Don't you think that's a conflict of interest?  
        `}
        interviewerImage={commissionerImg}
        intervieweeName="Coach Scott, The Replacements"
        intervieweeQuote="I will probably split 50/50. Although 50/50 of 0 is still 0…"
        intervieweeImage={teams[2].logo}
      />
      <Paragraph>
        And finally...the main event. There can only be one golden child. One team with a target on
        their backs. Think the 90&apos;s Bulls, the 00s Patriots, Joey Chestnut at the hotdog
        contest or Chris Collinsworth in a worshipping Patrick Mahomes contest. This year our golden
        child is Coach Marc of <TeamName teamName="The Wharf Rats" />, who was blessed with the
        hallowed A+ draft grade by our Yahoo Fantasy Football overlords. I got a chance to chat with
        him about all the hype...
      </Paragraph>
      <Interview
        interviewerName="Mason White, Commissioner"
        interviewerQuote={`
          How did you prepare for the draft? Did you have a strategy going in or during it?
          We're all dying to know how you got that A+!
        `}
        interviewerImage={commissionerImg}
        intervieweeName="Coach Marc, The Wharf Rats"
        intervieweeQuote={`
          Honestly there was some luck- but having drafted teams in the past I had an idea of
          the general order of picking positions. I had been playing Madden with my son over
          the past year or so. Some of the picks were from bad memories of getting smoked by
          my 17 year old. All came together in an algorithm in my brain while I was at a Labor
          day party and doing the draft on my phone!
        `}
        intervieweeImage={teams[11].logo}
      />
      <Paragraph>
        Priceless advice straight from a fascinating fantasy football fiend. I remember playing
        Madden with my Dad. He used to threaten me if I scored another touchdown he&apos;d send me
        to bed. Childhood trauma aside, we&apos;re all waiting with bated breath to see if his
        dazzling draft night performance will lead to a sizzling season or he&apos;ll slip like
        he&apos;s returning a punt in Sao Paulo.
      </Paragraph>
      <Paragraph>
        Anyways, that&apos;s all he wrote folks. I have to go organize my collection of 200 sealed
        copies of Shrek on VHS!
      </Paragraph>
      <Paragraph>👋🏼 Stay demure, stay mindful.</Paragraph>
    </>
  ),
};

export const jokeArticles: JokeArticle[] = [
  {
    title: 'VIDEO: Uncle Rico reacts to Anthony Richardson’s 66 yard bomb',
    link: 'https://youtube.com/shorts/jP8kHbaPs0s?si=awYGojV14e6ulebY',
  },
  {
    title: 'SHOCKING: Jerome Ford ruins Browns sprint metrics with last-minute touchdown',
    link: 'https://www.youtube.com/watch?v=a46Pu9-QIto',
  },
  {
    title: 'Nacua rushed to the Pukamon Center after Week 1 knee injury',
    link: 'https://youtu.be/bPPWK77WxGQ?si=iNpbnCtRbSdTU05f&t=83',
  },
  {
    title: 'BREAKING: Panthers offense reportedly still on Node 14',
    link: 'https://www.youtube.com/watch?v=mQif8VDt7nE',
  },
  {
    title:
      'Kendrick Lamar and Drake announce they will live tweet their beef on stage for upcoming Super Bowl LIX halftime show',
    link: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExajV3MjdydnJtM2hzMXducjB6ZXVoOXI3MHViZW84OWI4eGJxZHFjcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8GQoiQaVEFCYfZLQPq/giphy.gif',
  },
  {
    title: 'Scientists discover comprehensive list of things Scott likes more than golf',
    link: 'http://www.blankwebsite.com/',
  },
];

export const playerOfTheWeek: Player = {
  name: 'Saquon Barkley',
  points: 33.2,
};
