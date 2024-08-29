import {
  Grid,
  Card,
  Image,
  Avatar,
  Title,
  Text,
  Flex,
  Collapse,
  Box,
  Blockquote,
  Space,
  Mark,
  Divider,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Snickers from '../../images/snickers3.png';
import Jersey from '../../images/Giraffe_Jersey.png';
import SnickersCloseUp from '../../images/snickers1.png';

import classes from './News.module.css';

export default function News() {
  const [opened, { toggle }] = useDisclosure(false);
  const willIcon = (
    <Avatar
      src="https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/2482266e246e51fc0a087de4fb4aa927a806305ef1966242d06f57251d836504.jpg"
      radius="xl"
      size="s"
      className={classes.pic}
    />
  );

  const karaIcon = (
    <Avatar
      src="https://s.yimg.com/cv/apiv2/default/nfl/nfl_1_k.png"
      radius="xl"
      size="s"
      className={classes.pic}
    />
  );

  const chatGPTIcon = (
    <Avatar
      src="https://images.axios.com/rseGAk89vuIlIcOMwtFzdPfRUzI=/117x0:1197x1080/1600x1600/2023/01/17/1673986436931.jpg"
      radius="xl"
      size="s"
      className={classes.pic}
    />
  );

  const audreyIcon = (
    <Avatar
      src="https://s.yimg.com/cv/apiv2/default/nfl/nfl_2_a.png"
      radius="xl"
      size="s"
      className={classes.pic}
    />
  );

  return (
    <div className={classes.container}>
      <Grid>
        <Grid.Col span={{ md: 12, lg: 8 }} className={classes.expandable}>
          <Box onClick={toggle}>
            <Image radius="md" src={Jersey} className={classes.mainImage} />
            <Title className={classes.title}>Squirrel-Steroids Scandal</Title>
            <Text>
              Exclusive Investigation Uncovers Shocking Scandal: Squirrel Masterminds Fantasy
              Football Cheating Scheme with Performance Enhancing Drugs!
            </Text>
            <Flex gap="sm" align="Center">
              <Text c="dimmed" size="sm">
                Will Stone
              </Text>
              <Text c="dimmed" size="sm">
                -
              </Text>
              <Text c="dimmed" size="xs">
                Click to expand
              </Text>
            </Flex>
            <Collapse in={opened}>
              <Divider my="sm" variant="dashed" />
              <Text>
                In the vast, unpredictable realm of fantasy football, one team recently emerged from
                the depths of despair to savor the sweet nectar of victory for the very first time.
                Yes, you read that right; the underdog, the underachiever, last week's power
                rankings laughingstock, <Mark color="orange">Hurts So Good</Mark>, has finally
                broken the curse and tasted the glory of a win.
              </Text>
              <Space h="sm" />
              <Text>
                This week we caught up with coach <Mark color="orange">Kara</Mark> to talk us
                through the chaos and emotional rollercoaster of the team that just refused to stay
                winless! We had hoped to find a story of true inspiration, but instead, stumbled
                into a scandal that some around the league are calling{' '}
                <Mark color="orange">Mr. Snickersgate</Mark>.
              </Text>
              <Space h="sm" />
              <Text>
                Below is the trasncript of the interview that blew this scandal right open:
              </Text>

              <Blockquote
                icon={willIcon}
                color="orange"
                radius="xs"
                iconSize={60}
                mt="xl"
                className={classes.quote}
              >
                How does it feel to have your first victory of the season?
              </Blockquote>

              <Blockquote
                icon={karaIcon}
                color="blue"
                radius="xs"
                iconSize={60}
                cite="– Kara"
                mt="xl"
                className={classes.quoteReply}
              >
                I'm incredibly proud of our team's hard work and dedication. It's a gteat feeling
                and it reinforces our belief in our strategies and the potential of this team. But
                we're staying focused, knowing that there are many more challenges ahead.
              </Blockquote>

              <Blockquote
                icon={willIcon}
                color="orange"
                radius="xs"
                iconSize={60}
                mt="xl"
                className={classes.quote}
              >
                And we have to know, what did you say to Jamar Chase ahead of teh game this past
                weekend? He popped off for 52 points!
              </Blockquote>

              <Blockquote
                icon={karaIcon}
                color="blue"
                radius="xs"
                iconSize={60}
                cite="– Kara"
                mt="xl"
                className={classes.quoteReply}
              >
                Well, as a football coach, I'd say this victory says more about our team's amazing
                skills and our secret weapon: our our lucky team mascot,{' '}
                <Mark color="blue">Mr. Snickers the Squirrel</Mark>. Mr. Snickers brought some extra
                nutty energy to the game, and that's why we won.
              </Blockquote>

              <Blockquote
                icon={willIcon}
                color="orange"
                radius="xs"
                iconSize={60}
                mt="xl"
                className={classes.quote}
              >
                Mr. Snickers the what??
                <Space h="md" />
                Can you please elaborate on Mr. Snickers as we drug test your entire team?
              </Blockquote>

              <Blockquote
                icon={karaIcon}
                color="blue"
                radius="xs"
                iconSize={60}
                cite="– Kara"
                mt="xl"
                className={classes.quoteReply}
              >
                I cannot comment on that at this time
              </Blockquote>

              <Text>
                Our journalists are working overtime to audit Kara's staff and determine wrongdoing
                in this matter. Attempts to defraud the fair competition of the league will be met
                with judicial punishment from the commisioner and his board of trustees. Preliminary
                investigative efforts have uncovered new images from Sunday's game of the rabid
                squirrel, one Squirrelbert Squanch Snickers, alisas:{' '}
                <Mark color="orange">Mr. Snickers</Mark>.
              </Text>
              <Divider my="sm" variant="dashed" />
              <Image radius="md" src={SnickersCloseUp} />
              <Divider my="sm" variant="dashed" />

              <Text>
                We reached out to <Mark color="orange">Dr. Cha T'gpt</Mark>, a renound sports
                scientist who has studied at every university in the world (with publically
                available medical journals accessible by a web crawler) to gain a better
                understanding of what <Mark color="orange">"Nutty Energy"</Mark> could have been
                supplied and how that could have affected or contributed to Ja'Marr Chase's 52
                fantasy point performance.
              </Text>

              <Blockquote
                icon={chatGPTIcon}
                color="grey"
                radius="xs"
                iconSize={60}
                cite="– Dr. Cha T'gpt"
                mt="xl"
                className={classes.quote}
              >
                "Nutty Energy" is not a recognized or legitimate medication or substance, and its
                use is not endorsed or approved by any medical or sports authorities. It's important
                to note that the use of any unauthorized or illicit substances in professional
                sports, such as the NFL, is strictly prohibited and can lead to severe consequences,
                including suspension, fines, or even a ban from the sport.
                <Space h="md" />
                Athletes should always consult with medical professionals and follow the guidance of
                their team's medical staff to ensure they are using safe and legal methods to
                enhance their performance. It's essential to prioritize health and integrity in
                sports.
              </Blockquote>

              <Text>
                Lastly, before the news broke to the public, we polled coach Audrey to get her take
                on the matter of shadow squirrels and PED oversight
              </Text>

              <Blockquote
                icon={willIcon}
                color="orange"
                radius="xs"
                iconSize={60}
                mt="xl"
                className={classes.quote}
              >
                Hey Audrey, as a trusted member of our fantasy league I know people will value your
                opinion on this: do you believe rabid anthropomorphic squirrels with no medical
                licenses or FDA oversight should have the ability to administer "nutty energy" to
                players before games to achieve a competitive advantage?
              </Blockquote>

              <Blockquote
                icon={audreyIcon}
                color="blue"
                radius="xs"
                iconSize={60}
                cite="– Audrey"
                mt="xl"
                className={classes.quoteReply}
              >
                Well, certainly a trusted (but non peer reviewed) resource such as{' '}
                <Mark color="blue">Dr. Bingus'</Mark> Field Guide to Nut Energy; Almond Milk,
                Cashews and More would be my first look for the kind of supporting materials that
                one might hope to obtain. With it's epilogue sharing such remarks like, "Never mind
                RedZone, how about Green zone; enter the pistachio realm: or "GreenBay Packers... is
                the secret cheese or something a bit more nutty?" A bit difficult to deny those
                results."
              </Blockquote>

              <Blockquote
                icon={willIcon}
                color="orange"
                radius="xs"
                iconSize={60}
                mt="xl"
                className={classes.quote}
              >
                So you're not outraged by Mr. Snickers and his scheme to defraud our league of
                competitive integrity?
              </Blockquote>

              <Blockquote
                icon={audreyIcon}
                color="blue"
                radius="xs"
                iconSize={60}
                cite="– Audrey"
                mt="xl"
                className={classes.quoteReply}
              >
                I think it's those folks at Twix that we should be looking at; with their constant
                need to split left and right twix apart, making it become such an exact replica of
                the end zone, practically 3D printing the NFL's trade secret. Wouldn't be surprised
                if that's Mahomes next venture.
              </Blockquote>
              <Text>
                So the league's radar on squirrel related shennanigans remains at Defcon 5, but it
                seems there is some more paranoia about Twix bars and the theft of intellectual
                property. Perhaps a story for another week. Also Audrey I would love to browse your
                library, I didn't know you were a Dr. Bingus reader!
              </Text>
              <Space h="md" />
              <Text>
                So there we have it folks, as your newsletter author this week my goal is to just
                provide the facts, interview some coaches, and let people come to their own
                conclusions. Did I lose to Kara this week because Mr. Snickers helped her cheat? Or
                did Kara's ChatGPT hallucinate during our interview? I can't say, but probably
                definitely the squirrel thing.
              </Text>
            </Collapse>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ md: 12, lg: 4 }}>
          <Card>
            <Title>In the News</Title>
            <Divider my="sm" variant="dotted" />
            <Text>Scientists Find Evidence of Sand on Mars</Text>
            <Divider my="sm" variant="dotted" />
            <Text>
              Incredible Breakthrough: Researchers Deploy App on the First Try Without Bamboozlement
            </Text>
            <Divider my="sm" variant="dotted" />
            <Text>Alien Invasion Aborted as Extraterrestrials Discover Philadelphia.</Text>
            <Divider my="sm" variant="dotted" />
            <Text>
              Chiefs Forced to Forfeit Victory Because Although They Won Together, it Wasn't With
              Purpose
            </Text>
            <Divider my="sm" variant="dotted" />
            <Text>
              World's Most Advanced Fiber Optics Developed: Can NPM Install in Only 90 Minutes
            </Text>
            <Divider my="sm" variant="dotted" />
            <Text>
              Exclusive: Man Discovers a Hidden Third Pedal in His Car – Claims to Have Invented
              'Turbo Reverse'
            </Text>
            <Divider my="sm" variant="dotted" />
            <Text>Fish Oil Softgel Supplements Key to Immortality</Text>
            <Divider my="sm" variant="dotted" />
            <Text>New Company CEO Crowned After Man Reports All Four Phishing Attempts</Text>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}

// fish oil
// astronauts on iss rto
// man with worst music taste in history discovered
// phish attempt -> CEO --> president
//
