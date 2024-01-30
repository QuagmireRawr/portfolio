import img0 from '@/assets/pic0.jpg';
import img2 from '@/assets/pic2.jpg';
import { Footer } from '@/components/Footer';
import { Follow } from '@/components/IconRow/Follow';
import styles from '@/pages/Home/Home.module.scss';

export const Home = () => (
  <div class={styles.Home}>
    <div class={styles.hero}>
      <div
        id="top"
        class={styles.heroImage}
        style={{ height: '100%', 'background-image': `url(${img0})`, 'background-position': '45% 15%' }}
      >
        <Follow />
      </div>
    </div>

    <div id="about" class={styles.card} style={{ background: '#191d32' }}>
      <div>
        <h2>about</h2>
        <div>
          I'm proud to be a Thrivent financial professional. I provide personalized financial guidance to people at all
          stages of life. At Thrivent, we view money not as a goal, but as a tool — one that can afford you a life rich
          in meaning and gratitude. We believe humanity thrives when individuals make the most of all they've been
          given. I'm here to help you do just that.
        </div>
        <div>
          Want to pursue lifelong dreams — while supporting people and causes you care about? The right guidance can
          help you get there. Tell me where you're at today. Driven by your goals and values, I'll draw on my industry
          expertise to help you map out a path to a more secure financial future.
        </div>
      </div>
    </div>

    <div class={styles.socials} style={{ 'background-image': `url(${img2})`, 'background-position': '50% 35%' }} />

    <div id="contact" class={styles.card}>
      <div>
        <h2>contact me</h2>
        <span class={styles.contact}>
          <span>
            <svg viewBox="0 0 256 256">
              <g stroke-miterlimit="10" stroke-width="0">
                <path d="M214 223H42c-22 0-41-19-41-41V74c0-23 19-41 41-41h172c22 0 40 18 40 41v108c0 22-18 41-40 41zM42 45c-16 0-29 13-29 29v108c0 16 13 29 29 29h172c16 0 28-13 28-29V74c0-16-12-29-28-29H42z" />
                <path d="m32 74 92 89c5 5 14-3 8-9L41 66c-6-6-14 3-9 8z" />
                <path d="m132 163 91-89c6-5-3-14-8-8l-91 88c-6 6 3 14 8 9z" />
                <path d="m223 184-61-58c-5-5-14 4-8 9l60 58c6 5 15-4 9-9zm-181 9 61-58c5-5-3-14-9-9l-61 58c-5 5 3 14 9 9z" />
              </g>
            </svg>
            <a href="mailto:sameer.bham@thrivent.com">Sameer.bham@thrivent.com</a>
          </span>
          <span>
            <svg viewBox="0 0 202.6 202.6">
              <path d="m198 160-31-31c-6-6-17-6-23 0l-16 16-3-2a143 143 0 0 1-65-65l-2-3 10-11 6-5c6-6 6-17 0-23L43 5c-7-6-17-6-23 0l-9 9A51 51 0 0 0 1 40c-4 34 11 66 54 108 58 59 106 54 108 54a53 53 0 0 0 26-10l9-9c6-6 6-17 0-23zm-7 16-4 4-2 2-13 8-10 2c-1 0-45 4-100-51C15 94 7 67 10 41a43 43 0 0 1 11-23l6-6c2-2 6-3 9 0l31 31c2 2 2 6 0 9L46 73l1 4c2 1 3 3 4 6 6 10 14 24 29 40 15 15 30 23 40 29l6 3 4 2 21-21c2-2 6-3 9 0l31 31c3 2 2 7 0 9z" />
            </svg>
            <a href="tel:14694087201">+1 (469) 408-7201</a>
          </span>
        </span>
      </div>
    </div>

    <Footer />
  </div>
);
