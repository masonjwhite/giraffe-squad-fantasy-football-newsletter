/* eslint-disable react/no-unescaped-entities */
import { Timeline as MantineTimeline, Text, Grid, Avatar } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconNews, IconTrophy, IconMedal, IconQuestionMark } from '@tabler/icons-react';
import Navigation from './Navigation/Navigation';
import commissionerImage from '../../../images/Commissioner.jpg';
import oldLogo from '../../../images/Logo_OLD.png';
import oldNewsletter from '../../../images/Newsletter_OLD.png';
import newLogo from '../../../images/Logo.png';
import sitePreview from '../../../images/SitePreview.png';
import classes from './Timeline.module.css';

export default function Timeline() {
    const isMedium = useMediaQuery('(max-width: 62em)');

    const bulletSize = isMedium ? 72 : 96;
    const avatarSize = isMedium ? 72 : 96;
    const iconSize = isMedium ? 40 : 56;

    return (
        <>
            <Navigation />
            <Grid justify="center" className={classes.timelineGrid}>
                <Grid.Col
                  className={classes.timelineGridColumn}
                  span={{ lg: 4, md: 8, sm: 12 }}
                >
                    <MantineTimeline
                      color="rgb(255, 156, 90)"
                      active={20}
                      bulletSize={bulletSize}
                      lineWidth={3}
                    >
                        <MantineTimeline.Item
                          className={classes.timelineBullet}
                          bullet={(
                                <Avatar
                                  src="https://www.clarionledger.com/gcdn/-mm-/6dd57a2316aa1eba49522f657c3b512ece069745/c=0-54-481-326/local/-/media/JacksonMS/None/2014/10/25/635498599530220108-image4.jpg?width=481&height=271&fit=crop&format=pjpg&auto=webp"
                                  size={avatarSize}
                                />
                            )}
                          title="Rayne Dakota Prescott is born"
                        >
                            <Text c="dimmed" size="sm">YEAH HERE WE GO....Our league meme is born.</Text>
                            <Text size="xs" mt={4}>July 29, 1993 | 0 AD (After Dak)</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          id="2019"
                          className={classes.timelineBullet}
                          bullet={(
                                <Avatar
                                  src={commissionerImage}
                                  size={avatarSize}
                                />
                            )}
                          title="Mason joins the I'm a Giraffe Squad"
                        >
                            <Text c="dimmed" size="sm">
                                The future Commissioner brings with him
                                grand visions of a squad fantasy football league
                            </Text>
                            <Text size="xs" mt={4}>February 11, 2019 | 25 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          className={classes.timelineBullet}
                          bullet={(
                                <Avatar
                                  src={oldLogo}
                                  size={avatarSize}
                                />
                            )}
                          title="Innagural Season"
                        >
                            <Text c="dimmed" size="sm">
                                Our league's first season featured only 8 teams,{' '}
                                many of which are still in the league today. The OGs include:
                                Adam, Kara, Mason, Zac and Zari.

                            </Text>
                            <Text size="xs" mt={4}>September 5, 2019 | 26 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          className={classes.timelineBullet}
                          bullet={<IconTrophy size={iconSize} />}
                          title="2019 Champion: Coach James, Giraffe Whisperer (1)"
                        >
                            <Text c="dimmed" size="sm">
                                Despite autodrafting and barely touching his lineup all{' '}
                                season, Coach James pulled out the victory against{' '}
                                the formidable Managerless Team to become the league's{' '}
                                first champion. Humble beginnings.
                            </Text>
                            <Text size="xs" mt={4}>January, 2020 | 26 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          id="2020"
                          className={classes.timelineBullet}
                          bullet={<IconNews size={iconSize} />}
                          title="Expansion to 10 teams, the newsletter begins"
                        >
                            <Text c="dimmed" size="sm">
                                With the shadow of COVID over the World, we started our{' '}
                                second season with two new teams added to the bunch.{' '}
                                Commissioner Mason published the first issue of the{' '}
                                Giraffe Squad Fantasy Newsletter as a simple Slack post{' '}
                                in an effort to bring some laughs and lightheartedness{' '}
                                to an otherwise challenging time.
                            </Text>
                            <Text size="xs" mt={4}>September 10, 2020 | 27 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          className={classes.timelineBullet}
                          bullet={<IconTrophy size={iconSize} />}
                          title="2020 Champion: Coach Will Stone, The Empire Strikes Dak (1)"
                        >
                            <Text c="dimmed" size="sm">
                                Future Deputy Commissioner, Will Stone, won his first{' '}
                                championship in his rookie campaign. An impressive feat!{' '}
                                Will overcame a devastating Christian McCaffrey{' '}
                                injury led by a strong roster which included Stefon Diggs,{' '}
                                DK Metcalf, Deandre Hopkins and George Kittle.
                            </Text>
                            <Text size="xs" mt={4}>December 28, 2020 | 27 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          id="2021"
                          className={classes.timelineBullet}
                          bullet={(
                                <Avatar
                                  src="https://media.licdn.com/dms/image/v2/D4E03AQGfxt1sHhN-Gw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1692727319461?e=1732147200&v=beta&t=uglch9Hd_nY5HgUdtQ2JdvnllOEKLWR93TbYsIxsHKU"
                                  size={avatarSize}
                                />
                            )}
                          title="Mike Bettencourt appointed as league's first Deputy Commissioner"
                        >
                            <Text c="dimmed" size="sm">
                                Realizing his hands were way too full with the newsletter,{' '}
                                Commissioner Mason appointed long-time league veteran, Mike Bettencourt{' '}
                                as the league's first Deputy Commissioner.
                            </Text>
                            <Text size="xs" mt={4}>September 8, 2021 | 28 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          className={classes.timelineBullet}
                          bullet={(
                                <Avatar
                                  src={oldNewsletter}
                                  size={avatarSize}
                                />
                            )}
                          title="The newsletter gets a facelift"
                        >
                            <Text c="dimmed" size="sm">
                                Utilizing his penchant for design, Deputy Commissioner Mike Bettencourt{' '}
                                elevated the newsletter to the stratosphere by creating{' '}
                                an actual newsletter document in Figma. This early version laid the{' '}
                                foundation for many of the hallmarks we've come to know and love in{' '}
                                our modern version and even had a trade advertisement space!
                            </Text>
                            <Text size="xs" mt={4}>September 22, 2021 | 28 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          className={classes.timelineBullet}
                          bullet={(
                                <Avatar
                                  src="https://media.istockphoto.com/id/168259334/photo/human-hand.jpg?s=612x612&w=0&k=20&c=xcZvXt4EfPgWxCbGsVdGetBWGsubgv75LQCpKabmpb4="
                                  size={avatarSize}
                                />
                            )}
                          title="Squeaking by"
                        >
                            <Text c="dimmed" size="sm">
                                Week 14 2021 saw the smallest margin of victory to date.{' '}
                                Coach Tim got an early Christmas present by edging out{' '}
                                Coach James by a miniscule .06 points!
                            </Text>
                            <Text size="xs" mt={4}>December 13, 2021 | 28 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          className={classes.timelineBullet}
                          bullet={<IconTrophy size={iconSize} />}
                          title="2021 Champion: Coach Mason White, undefined (1)"
                        >
                            <Text c="dimmed" size="sm">
                                Commissioner Mason White won his first fantasy championship{' '}
                                ever in 2021 with his team, undefined. And no that's not a{' '}
                                JavaScript error folks, he just thought he was being funny.
                            </Text>
                            <Text size="xs" mt={4}>January 3rd, 2022 | 28 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          id="2022"
                          className={classes.timelineBullet}
                          bullet={<IconMedal size={iconSize} />}
                          title="A record breaking season"
                        >
                            <Text c="dimmed" size="sm">
                                This season was one for the record books, literally! The{' '}
                                {' '}league set records for 6 different categories in 2022{' '}
                                including: most wins in a season (13), most losses in a season (15),{' '}
                                longest win streak (9), longest losing streak (15), largest margin of{' '}
                                victory/defeat (113.58), and easiest strength of schedule{' '}
                                (96.28 avg points against). All of which are still standing today.{' '}
                            </Text>
                            <Text size="xs" mt={4}>September 8, 2022 | 29 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          className={classes.timelineBullet}
                          bullet={<IconTrophy size={iconSize} />}
                          title="2022 Champion: Coach Will Stone, DAK TO DAK TO DAK (2)"
                        >
                            <Text c="dimmed" size="sm">
                                Future Deputy Commissioner, Will Stone, claimed his second title{' '}
                                in 3 years with a commanding season. He tallied a league record 13 wins,{' '}
                                a feat that has not been repeated since. He was led by his favorite{' '}
                                player and team namesake, Dak Prescott with a supporting cast that{' '}
                                included Jaylen Waddle, Christian McCaffrey and Nick Chubb.
                            </Text>
                            <Text size="xs" mt={4}>January 3rd, 2022 | 29 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          id="2023"
                          className={classes.timelineBullet}
                          bullet={(
                                <Avatar
                                  src="https://media.licdn.com/dms/image/v2/C4D03AQGmhavku6FqSg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1539138153157?e=1732147200&v=beta&t=OnoZ_00c2nbgDkL1V9X-PZfTI4C3ZIC6urL8RfSuBhw"
                                  size={avatarSize}
                                />
                            )}
                          title="Mike Bettencourt retires and steps down as Deputy Commissioner, succeeded by Will Stone"
                        >
                            <Text c="dimmed" size="sm">
                                Mike Bettencourt retired from the league before the beginning{' '}
                                of the 2023 season, leaving a Polar Seltzer can-sized hole in{' '}
                                our hearts. League juggernaut and fantasy football guru, Will Stone was{' '}
                                immediately appointed to Deputy Commissioner to assist with newsletter{' '}
                                and administrative duties.
                            </Text>
                            <Text size="xs" mt={4}>September 6, 2023 | 30 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          className={classes.timelineBullet}
                          bullet={(
                                <Avatar
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hkdOXyLSqTkc86aAxMsHuIQoleI8Q6tY7A&s"
                                  size={avatarSize}
                                />
                            )}
                          title="Season 4 Begins: 'Dak Attack'"
                        >
                            <Text c="dimmed" size="sm">
                                The league's obsession with Dak Prescott peaked in 2023, with two{' '}
                                different teams having Dak-related team names{' '}
                                (Mixon it with Dak, The Dakstreet Boys). Even more confusing was{' '}
                                only one of them actually had Dak on their roster. And even worse,{' '}
                                neither of those coaches were Coach/Deputy Commissioner Will Stone{' '}
                                who happens to be Dak's biggest fan. Confused? So were we.
                            </Text>
                            <Text size="xs" mt={4}>September 7, 2023 | 30 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          className={classes.timelineBullet}
                          bullet={(
                                <Avatar
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-06OgWFsxqAL9uNIW1Bf8wr94Mau8v2IaA&s"
                                  size={avatarSize}
                                />
                            )}
                          title="Glipmse of Greatness: The newsletter website prototype is built"
                        >
                            <Text c="dimmed" size="sm">
                                With Commissioner Mason on his honeymoon, Deputy Commissioner{' '}
                                Will Stone took it upon himself to code a prototype of the{' '}
                                newsletter website. Little did he know his little experiment{' '}
                                would soon become the website you're currently on!
                            </Text>
                            <Text size="xs" mt={4}>October 12, 2023 | 30 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          className={classes.timelineBullet}
                          bullet={(
                                <Avatar
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPm3FcfhXKbmFmZk7hNw-E0TcWe-wYjEEKA&s"
                                  size={avatarSize}
                                />
                            )}
                          title="Coach Adam has the hardest season to date"
                        >
                            <Text c="dimmed" size="sm">
                                Coach Adam, OG and longtime Coach of Henry's Hustle, saw{' '}
                                the most difficult schedule in league history in 2023.{' '}
                                His opponents averaged a whopping 133.41 points per week against him.{' '}
                                Despite the onslaught, Coach Adam navigated deftly to a 5th place finish with a{' '}
                                record of 7-8.
                            </Text>
                            <Text size="xs" mt={4}>January 1, 2024 | 30 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          className={classes.timelineBullet}
                          bullet={<IconTrophy size={iconSize} />}
                          title="2023 Champion: Coach Will Stone, CeeDee Phone Home (3)"
                        >
                            <Text c="dimmed" size="sm">
                                Deputy Commissioner Will Stone cemented his dynasty by{' '}
                                winning a third, yes third, championship in 2023. He's literally{' '}
                                won every year he's played except 2021. His championship campaign{' '}
                                was led by his team's namesake CeeDee Lamb and supported by{' '}
                                Jahmyr Gibbs and Deebo Samuel.
                            </Text>
                            <Text size="xs" mt={4}>January 1, 2024 | 30 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          id="2024"
                          className={classes.timelineBullet}
                          bullet={(
                                <Avatar
                                  src={newLogo}
                                  size={avatarSize}
                                />
                            )}
                          title="New brand who dis?"
                        >
                            <Text c="dimmed" size="sm">
                                Before the start of our 5th Anniversary Season,
                                Deputy Commissioner Will Stone debuted the league's
                                new brand identity to rave reviews.
                            </Text>
                            <Text size="xs" mt={4}>September 4, 2024 | 31 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          className={classes.timelineBullet}
                          bullet={<IconTrophy size={iconSize} />}
                          title="Championship Trophy Unveiled"
                        >
                            <Text c="dimmed" size="sm">
                                To further amplify the 5th anniversary festivities, Commissioner
                                Mason White also announced the inagural Giraffe Squad Fantasy
                                Football trophy, which will be awarded for the first time to
                                the 2024 Champion!
                            </Text>
                            <Text size="xs" mt={4}>September 4, 2024 | 31 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          className={classes.timelineBullet}
                          bullet={(
                                <Avatar
                                  src={sitePreview}
                                  size={avatarSize}
                                />
                            )}
                          title="Newsletter Website Debuts"
                        >
                            <Text c="dimmed" size="sm">
                                After a labor-intensive Labor Day Weekend, Commissioner
                                Mason White and Deputy Commissioner Will Stone debuted
                                the official Giraffe Squad Fantasy Football Newsletter.
                                Complete with "multiple weeks" feature that allows everyone
                                to follow the action throughout the whole year!
                                If you're reading this, you're on it!
                            </Text>
                            <Text size="xs" mt={4}>September 11, 2024 | 31 AD</Text>
                        </MantineTimeline.Item>
                        <MantineTimeline.Item
                          className={classes.timelineBullet}
                          bullet={<IconQuestionMark size={iconSize} />}
                          title="Who will be the 2024 Champion?"
                        >
                            <Text c="dimmed" size="sm">
                                Stay tuned to find out!
                            </Text>
                            <Text size="xs" mt={4}>TBD | 31 AD</Text>
                        </MantineTimeline.Item>
                    </MantineTimeline>
                </Grid.Col>
            </Grid>
        </>
    );
}
