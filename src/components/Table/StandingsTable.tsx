import { Table, Title } from '@mantine/core';
import classes from './StandingsTable.module.css';

export function Standings() {
  const standings = [
    { team: 'DakStreet Boys', record: '5-0', PtsFor: 658, PtsAgainst: 431 },
    { team: 'The Bus Stop', record: '4-1', PtsFor: 647, PtsAgainst: 569 },
    { team: 'Henrys Hustle', record: '3-2', PtsFor: 617, PtsAgainst: 643 },
    { team: 'Pattibot', record: '3-2', PtsFor: 599, PtsAgainst: 571 },
    { team: 'Average Joes', record: '3-2', PtsFor: 564, PtsAgainst: 549 },
    { team: 'Jaguar King', record: '2-3', PtsFor: 595, PtsAgainst: 547 },
    { team: 'Any Given Sunday', record: '2-3', PtsFor: 586, PtsAgainst: 623 },
    { team: 'VisiGoffs', record: '2-3', PtsFor: 575, PtsAgainst: 569 },
    { team: 'Lets Get Wiested', record: '2-3', PtsFor: 527, PtsAgainst: 622 },
    { team: 'CeeDee Phone Home', record: '2-3', PtsFor: 522, PtsAgainst: 576 },
    { team: 'Hurts So Good', record: '1-4', PtsFor: 568, PtsAgainst: 658 },
    { team: 'Mixon it with Dak', record: '1-4', PtsFor: 518, PtsAgainst: 619 },
  ];

  const rows = standings.map((element) => (
    <Table.Tr key={element.team}>
      <Table.Td>{element.team}</Table.Td>
      <Table.Td>{element.record}</Table.Td>
      <Table.Td>{element.PtsFor}</Table.Td>
      <Table.Td>{element.PtsAgainst}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className={classes.container}>
      <Title className={classes.title}>Standings</Title>
      <Table striped withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Team</Table.Th>
            <Table.Th>Record</Table.Th>
            <Table.Th>Pts For</Table.Th>
            <Table.Th>Pts Agaisnt</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}
