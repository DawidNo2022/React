import styles from './Column.module.scss';
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';

const Column = ({ id, title, icon, cards, addCard }) => {
  //przerobic propsy w reszcie komp
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={`${styles.icon} fa fa-${icon}`} />
        {title}
      </h2>

      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={id} action={addCard} />
    </article>
  );
};

export default Column;
