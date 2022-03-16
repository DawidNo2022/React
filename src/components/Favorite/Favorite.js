import Card from '../Card/Card.js';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import styles from './Favorite.module.scss';

const Favourite = () => {
  const favoriteCards = useSelector((state) => getFavoriteCards(state));
  console.log(favoriteCards);
  return (
    <div class={styles.container}>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              //id={card.id}
              isFavorite={card.isFavorite}
            />
          ))}
        </ul>
      </article>
    </div>
  );
};
export default Favourite;
