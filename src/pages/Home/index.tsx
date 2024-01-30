import img0 from '@/assets/pic0.jpg';
import img1 from '@/assets/pic1.jpg';
import img2 from '@/assets/pic2.jpg';
import { Carousel } from '@/components/Carousel';
import { Footer } from '@/components/Footer';
import { Follow } from '@/components/IconRow/Follow';
import styles from '@/pages/Home/Home.module.scss';

export const Home = () => (
  <div class={styles.Home}>
    <Carousel numPages={2}>
      <div style={{ 'background-image': `url(${img0})`, 'background-position': '50% 15%' }} />
      <div style={{ 'background-image': `url(${img1})`, 'background-position': 'center' }} />
    </Carousel>

    <div id="about" class={styles.card}>
      <div>
        <h2>about</h2>
        <div>about me goes here</div>
      </div>
    </div>
    <div id="solutions" class={styles.card}>
      <div>
        <h2>solutions</h2>
        <div>solutions go here</div>
      </div>
    </div>
    <div id="contact" class={styles.card}>
      <div>
        <h2>contact me</h2>
        <div>info to contact me goes here</div>
      </div>
    </div>
    <div class={styles.socials} style={{ 'background-image': `url(${img2})`, 'background-position': '4%' }}>
      <Follow />
    </div>
    <Footer />
  </div>
);
