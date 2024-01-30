import styles from '@/App.module.scss';
import { Navbar } from '@/components/Navbar';
import { Home } from '@/pages/Home';

export const App = () => (
  <div class={styles.App}>
    <Navbar />
    <Home />
  </div>
);
