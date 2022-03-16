import styles from './Card.module.scss';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleonClick = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite({ id }));
  };
  const handleonClickRemove = (e) => {
    e.preventDefault();
    dispatch(removeCard({ id }));
  };
  console.log(isFavorite, 'favorite');
  return (
    <div>
      <li className={styles.card}>
        {title}

        <button
          onClick={handleonClick}
          className={clsx(styles.button, isFavorite && styles.favorite)}
        >
          <span className={`fa fa-star-o`} />
        </button>
        <button onClick={handleonClickRemove} className={styles.button}>
          <span className={`fa fa-trash`} />
        </button>
      </li>
    </div>
  );
};

export default Card;
