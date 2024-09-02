import { Table, Title } from '@mantine/core';
import { Team } from '../../types';
import globalClasses from '../../global.module.css';

function sortTeams(teamA: Team, teamB: Team) {
  const teamAWins = teamA.record.split('-')[0];
  const teamBWins = teamB.record.split('-')[0];

  const equalWins = teamAWins === teamBWins;
  const equalPointsFor = teamA.pointsFor === teamB.pointsFor;

  // Use alphabetical if equal wins and equal points
  if (equalWins && equalPointsFor) {
    return teamA.name > teamB.name ? 1 : -1;
  }

  // Use points for if equal wins
  if (equalWins) {
    return teamA.pointsFor < teamB.pointsFor ? 1 : -1;
  }

  // Use number of wins by default
  return teamAWins < teamBWins ? 1 : -1;
}

export default function Standings({ teams }: { teams: Team[] }) {
  const rows = teams.sort(sortTeams).map((team) => (
    <Table.Tr key={team.name}>
      <Table.Td>{team.name}</Table.Td>
      <Table.Td align="right">{team.record}</Table.Td>
      <Table.Td align="right">{team.pointsFor}</Table.Td>
      <Table.Td align="right">{team.pointsAgainst}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Title className={globalClasses.sectionHeader}>Standings</Title>
      <Table striped withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Team</Table.Th>
            <Table.Th>Record</Table.Th>
            <Table.Th>Pts For</Table.Th>
            <Table.Th>Pts Against</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
}
