import { Timeline as MantineTimeline, Text, Grid } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';

// TODO MW: Add 2rem of left/right padding to `Grid` when XS

export default function Timeline() {
    return (
        <Grid style={{ marginTop: '2rem' }}>
            <Grid.Col style={{ marginBottom: '3rem' }} span={{ lg: 4, md: 4, sm: 4 }} offset={{ lg: 4, md: 4, sm: 4 }}>
                <MantineTimeline active={1} bulletSize={24} lineWidth={2}>
                    <MantineTimeline.Item bullet={<IconGitBranch size={24} />} title="New branch">
                    <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
                    <Text size="xs" mt={4}>2 hours ago</Text>
                    </MantineTimeline.Item>
            
                    <MantineTimeline.Item bullet={<IconGitCommit size={24} />} title="Commits">
                    <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
                    <Text size="xs" mt={4}>52 minutes ago</Text>
                    </MantineTimeline.Item>
            
                    <MantineTimeline.Item title="Pull request" bullet={<IconGitPullRequest size={24} />} lineVariant="dashed">
                    <Text c="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
                    <Text size="xs" mt={4}>34 minutes ago</Text>
                    </MantineTimeline.Item>
            
                    <MantineTimeline.Item title="Code review" bullet={<IconMessageDots size={24} />}>
                    <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                    <Text size="xs" mt={4}>12 minutes ago</Text>
                    </MantineTimeline.Item>
                </MantineTimeline>
            </Grid.Col>
        </Grid>
    )
}