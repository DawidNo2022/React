import PageTitle from '../PageTitle/PageTitle';
import styles from './Hero.module.scss';

const Hero = () => (
  <div className={styles.hero}>
    <PageTitle>My first React App</PageTitle>
    <p className={styles.subtitle}>
      A simpe to-do app, with lists, columns and cards
    </p>
  </div>
);

export default Hero;
