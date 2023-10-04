import { Welcome } from '../components/Welcome/Welcome';
import List from '../components/List/List';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export function HomePage() {
  return (
    <>
      <Welcome />
      <List />
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
