import { createSignal, Index, type ParentProps } from 'solid-js';
import styles from '@/components/Carousel/Carousel.module.scss';

export const Carousel = (props: ParentProps<{ numPages: number }>) => {
  const [control, setControl] = createSignal(0);
  const [view, setView] = createSignal(0);
  let touched = false;

  const changeImg = () =>
    setTimeout(() => {
      if (!touched) setView(p => (p + 1) % props.numPages);
      touched = false;
      changeImg();
    }, 8_000);
  changeImg();

  return (
    <div class={styles.Carousel}>
      <div class={styles.controls}>
        <Index each={[...Array(props.numPages)]}>
          {(_, i) => (
            <button
              onClick={() => setView(i) + 1 && (touched = true)}
              class={i === control() ? styles.active : ''}
              aria-label={`show slide ${i}`}
            />
          )}
        </Index>
      </div>
      <div
        class={styles.slider}
        prop:scrollLeft={view() * window.innerWidth}
        onScrollEnd={e => setControl((e.target.scrollLeft / window.innerWidth) >> 0)}
        onTouchEnd={e => {
          setTimeout(() => setControl(Math.round(e.target.parentElement!.scrollLeft / window.innerWidth)), 1450);
          touched = true;
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
