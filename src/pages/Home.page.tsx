import { Welcome } from '../components/Welcome/Welcome';
import List from '../components/List/List';
import { Standings } from '../components/Table/StandingsTable';
import News from '../components/News/News';
import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';
import Scores from '../components/Scores/Scores';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export function HomePage() {
  return (
    <>
      <Hero />
      <Nav />
      <Scores />
      <News />
      <Welcome />
      <List />
      <Standings />
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
