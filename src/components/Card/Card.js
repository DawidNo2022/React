import styles from './Card.module.scss';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleonClick = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite({ id }));
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
      </li>
    </div>
  );
};

export default Card;
