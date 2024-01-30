import { createSignal } from 'solid-js';
import styles from '@/components/Navbar/Navbar.module.scss';

export const Navbar = () => {
  const [hideMenu, setHideMenu] = createSignal(true);

  return (
    <div class={`${styles.Navbar} ${hideMenu() ? styles.hidden : ''}`}>
      <div class={styles.links}>
        <a href="#top" class={styles.brand} aria-label="Return to Top">
          home
        </a>
        <a href="#about">about</a>
        <a href="#solutions">solutions</a>
        <a href="#contact">contact me</a>
      </div>
      <button onClick={() => setHideMenu(p => !p)}>^</button>
    </div>
  );
};
