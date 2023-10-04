import { Table, Title } from '@mantine/core';
import classes from './StandingsTable.module.css';

export function Standings() {

    const standings = [
        { team: 'DakStreet Boys', record: '4-0', PtsFor: 504, PtsAgainst: 350 },
        { team: 'The Bus Stop', record: '3-1', PtsFor: 511, PtsAgainst: 459 },
        { team: 'Pattibot', record: '3-1', PtsFor: 466, PtsAgainst: 431 },
        { team: 'Henrys Hustle', record: '2-2', PtsFor: 520, PtsAgainst: 563 },
        { team: 'Jaguar King', record: '2-2', PtsFor: 458, PtsAgainst: 411 },
        { team: 'VisiGoffs', record: '2-2', PtsFor: 477, PtsAgainst: 443 },
        { team: 'Lets Get Wiested', record: '2-2', PtsFor: 447, PtsAgainst: 526 },
        { team: 'Average Joes', record: '2-2', PtsFor: 438, PtsAgainst: 451 },
        { team: 'CeeDee Phone Home', record: '2-2', PtsFor: 405, PtsAgainst: 436 },
        { team: 'Any Given Sunday', record: '1-3', PtsFor: 445, PtsAgainst: 490 },
        { team: 'Mixon it with Dak', record: '1-3', PtsFor: 437, PtsAgainst: 464 },
        { team: 'Hurts So Good', record: '0-4', PtsFor: 428, PtsAgainst: 540 },
      ];



  const rows = standings.map((element) => (
    <Table.Tr key={element.team}>
      <Table.Td>{element.team}</Table.Td>
      <Table.Td>{element.PtsAgainst}</Table.Td>
      <Table.Td>{element.PtsFor}</Table.Td>
      <Table.Td>{element.record}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className={classes.container}>
      <Title className={classes.title}>
        Standings
      </Title>
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