import { createSignal } from 'solid-js';
import styles from '@/components/Navbar/Navbar.module.scss';

export const Navbar = () => {
  const [hideMenu, setHideMenu] = createSignal(true);

  return (
    <nav class={hideMenu() ? styles.hidden : ''}>
      <div class={styles.links}>
        <a href="#top" class={styles.brand} aria-label="Return to Top">
          Sameer Bham
        </a>
        <a href="#about">about</a>
        <a href="#contact">contact me</a>
      </div>
      <button onClick={() => setHideMenu(p => !p)}>^</button>
    </nav>
  );
};
