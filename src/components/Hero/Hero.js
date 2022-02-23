import styles from './Hero.module.scss';

const Hero = () => (
  <div className={styles.hero}>
    <h1 className={styles.title}>My first React App</h1>
    <p className={styles.subtitle}>
      A simpe to-do app, with lists, columns and cards
    </p>
  </div>
);

export default Hero;
