import type { ParentProps } from 'solid-js';
import styles from '@/App.module.scss';
import { Navbar } from '@/components/Navbar';
import { Home } from '@/pages/Home';

export const App = (props: ParentProps) => (
  <div class={styles.App}>
    <Navbar />
    <Home />
  </div>
);
