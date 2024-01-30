import imgThriventLogo from '@/assets/thrivent-logo.png';
import styles from '@/components/IconRow/IconRow.module.scss';

export const Follow = () => (
  <div class={styles.IconRow}>
    <a href="https://connect.thrivent.com/sameer-bham">
      <img src={imgThriventLogo} alt="Thrivent" />
    </a>
    <a href="https://www.linkedin.com/in/sameer-bham-7789261b8" aria-label="LinkedIn">
      <svg viewBox="0 0 256 256">
        <path d="M5.6 85.5H58V254H5.6V85.5zM31.8 1.6a30.4 30.4 0 1 1 0 60.8 30.4 30.4 0 0 1 0-60.8m59.1 83.9H141v23h.8a55 55 0 0 1 49.5-27.2c53.1 0 63 34.9 63 80.3v92.5h-52.5v-82c0-19.6-.3-44.7-27.2-44.7-27.3 0-31.5 21.3-31.5 43.3V254H91V85.5z" />
      </svg>
    </a>
    <a href="https://www.facebook.com/profile.php?id=61555214536310" aria-label="Facebook">
      <svg viewBox="11.5 7.5 17.5 32.5">
        <path d="m28 25.6.9-5.6h-5.3v-4c0-1.6.6-3 3-3H29V8c-1.4-0-3-.4-4.4-.4-4.6 0-8 3-8 8V20h-5v5.6h5v14a18.4 18.4 0 0 0 6.6 0V25.6h4.4z" />
      </svg>
    </a>
    <a href="https://www.instagram.com/financewsameer" aria-label="Instagram">
      <svg viewBox="8 8 497 497">
        <path d="M96 23c-16 6-30 15-44 29-13 13-22 27-28 43s-10 34-11 60-2 34-2 101l2 102c1 26 5 44 11 59 6 17 15 30 29 44 13 14 27 22 43 28s34 11 60 12l101 1 102-1c26-2 44-6 59-12a121 121 0 0 0 72-72c6-15 11-33 12-59l1-102-1-101c-2-26-6-44-12-60s-14-30-28-43c-14-14-27-22-44-29-15-6-33-10-59-11-27-1-35-2-102-2l-101 2c-26 1-44 5-60 11zm261 33c24 1 37 5 45 9 12 4 20 9 29 18 8 9 14 17 18 28 3 9 7 22 9 46l1 99c0 65 0 74-2 100-1 24-5 37-8 45a77 77 0 0 1-47 47c-8 4-21 8-45 9l-100 1-99-1c-24-1-37-5-46-9a81 81 0 0 1-47-47c-3-8-7-21-8-45l-1-100 1-99c1-24 5-37 8-46 5-11 10-19 19-28 8-9 17-14 28-18 9-4 22-8 46-9l99-1 100 1z" />
        <path d="M131 256a126 126 0 1 0 253 0 126 126 0 0 0-253 0zm208 0a82 82 0 1 1-164 0 82 82 0 0 1 164 0z" />
        <g>
          <circle cx="388.6" cy="125" r="29.5" />
        </g>
      </svg>
    </a>
  </div>
);
