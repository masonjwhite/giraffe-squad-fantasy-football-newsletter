import { Alert, Title, Text, Blockquote } from '@mantine/core';
const nickArticle = (
        <>
          <Title order={3} >Architecting Greatness</Title>
          <Text size="xl">Coach Nick (ChadFish) Bradfish is the leagues only remaining perfect team, and he just might cement himself in Giraffe fantasy football history unless someone can topple him. No one has been able to stress test this team to the point of failure, and that may not change anytime soon, with reinforcements arriving this week - in the form of versatile running back Alvin Kamara. Nick's team will take one last step in reaching its future state architecture when Cooper Kupp RTOs from injury. </Text>
          <Alert variant="light" color="orange" title="Fun Fact" style={{ marginTop: '1rem' }}>
            DakStreet Boys have had the fewest points scored against them this year. (350)
          </Alert>
        </>
    );

const jackieArticle = (
  <>
    <Title order={3} >Product (Owning) the Competition</Title>
    <Text size="xl">Making their debut in the top 5 last week, Jackie's team continues to rise in the Power Rankings with their most recent victory. We were able to catchup with coach Jackie postgame: </Text>
    <Blockquote color="grey" radius="xs" iconSize={30} cite="– Will" mt="xl">
      Your team is on a hot streak, did playing someone in each position help you succeed this week?
    </Blockquote>
    <Blockquote color="blue" radius="xs" iconSize={30} cite="– Jackie" mt="xl">
      I do believe there was a high correlation to having players in every position and winning. Not to toot my own horn but it was the first week when I won in all three of my fantasy leagues, so definitely riding that high! I'm sure it will coem back to bit em ein this upcoming week, I'm projected to win but my confidence in the predictions are low. Going to hope Taylor Swift and all the A-list celebrities keep coming to the Chiefs games to ensure Mahomes keeps up his performance.
    </Blockquote>
    <Alert variant="light" color="orange" title="Fun Fact" style={{ marginTop: '1rem' }}>
      PattiBot has the second highest ELO (chess rating) score of any team - narrowly beating The Bus Stop.
    </Alert>
  </>
);

const audreyArticle = (
  <>
    <Title order={3} >Scrumbling from the Top</Title>
    <Text size="xl">Audrey's squad finally suffered their first loss of the season, but went out swinging! Scoring 135 points, The Bus Stop would have won against 9 of the 11 other teams in week 4. The good news is there is plenty of firepower both on the field and on the bench for this team. We were able to catch up with coach Audrey for comment</Text>
    <Blockquote color="grey" radius="xs" iconSize={30} cite="– Will" mt="xl">
      Is there anything you plan to take away from this game? Or are you going to throw away the film and move on?
    </Blockquote>
    <Blockquote color="blue" radius="xs" iconSize={30} cite="– Audrey" mt="xl">
      Congrats to Zari, incredible effort, going to have to go back to the drawing board on my end. Definitely watching some game tape - major rewind to assess and move forward
    </Blockquote>
  </>
);

const teams = [
    {
        id: 'nick',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_10_n.png',
        name: 'DakStreet Boys',
        coach: 'Nick Bradfish',
        content:  nickArticle,
        rank: 1,
    },
    {
        id: 'jackie',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_11_j.png',
        name: 'Pattibot',
        coach: 'Jackie Munger',
        content: jackieArticle,
        rank: 2,
    },
    {
        id: 'audrey',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_2_a.png',
        name: 'The Bus Stop',
        coach: 'Audrey Pottinger',
        content: audreyArticle,
        rank: 3,
    },
    {
        id: 'adam',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_4_h.png',
        name: 'Henry\'s Hustle',
        coach: 'Adam LaCasse',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: 8,
    },
    {
        id: 'mason',
        image: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s90sq/fantasy-logos/113652f074d7b306a0e4a45eefeb5b5ee1e8542fdda2680cef96dd306229367a.png',
        name: 'Jaguar King',
        coach: 'Mason White',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: 9,
    },
    {
        id: 'zac',
        image: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s90sq/fantasy-logos/f81eb36e9164b5d16a14a0d98cb10325a3ecd5c40a18762114c0e8992be89eec.jpg',
        name: 'VisiGoffs',
        coach: 'Zac Fermanis',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: 6,
    },
    {
        id: 'zari',
        image: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s90sq/fantasy-logos/504c777005d70cb6a10b7418ec386981f855e9b18747117a8df8c51ac7319c3c.png',
        name: 'Let\'s Get Wiested',
        coach: 'Zari Bazarian',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: 4,
    },
    {
        id: 'joe',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_3_j.png',
        name: 'Average Joes',
        coach: 'Joe Pecosky',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: 5,
    },
    {
        id: 'will',
        image: 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/2482266e246e51fc0a087de4fb4aa927a806305ef1966242d06f57251d836504.jpg',
        name: 'CeeDee Phone Home',
        coach: 'Will Stone',
        content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
        rank: 7,
    },
    {
        id: 'kristen',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_7_k.png',
        name: 'Any Given Sunday',
        coach: 'Kristen Tsakiris',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: 10,
    },
    {
        id: 'david',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_1_d.png',
        name: 'Mixon it with Dak',
        coach: 'David Phillips',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: 11,
    },
    {
        id: 'kara',
        image: 'https://s.yimg.com/cv/apiv2/default/nfl/nfl_1_k.png',
        name: 'Hurts So Good',
        coach: 'Kara Prescott',
        content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
        rank: 12,
    },
  ];

  export default teams;