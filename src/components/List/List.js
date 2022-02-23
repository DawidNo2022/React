import { useState } from 'react'; //miedzy wlasnymi
import shortid from 'shortid';

import styles from './List.module.scss'; //style ostatnie
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm.js';

const List = () => {
  //funkcja strzalkowa
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'Books',
      icon: 'book',
      cards: [
        { id: 1, title: 'This is Going to Hurt' },
        { id: 2, title: 'Interpreter of Maladies' },
      ],
    },
    {
      id: 2,
      title: 'Movies',
      icon: 'film',
      cards: [
        { id: 1, title: 'Harry Potter' },
        { id: 2, title: 'Star Wars' },
      ],
    },
    {
      id: 3,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        { id: 1, title: 'The Witcher' },
        { id: 2, title: 'Skyrim' },
      ],
    },
  ]);
  const addCard = (newCard, columnId) => {
    const columnsUpdated = columns.map((column) => {
      if (column.id === columnId)
        return {
          ...column,
          cards: [...column.cards, { id: shortid(), title: newCard.title }],
        };
      else return column;
    });

    setColumns(columnsUpdated);
  };
  const addColumn = (newColumn) => {
    setColumns([
      ...columns,
      {
        id: shortid(),
        title: newColumn.title,
        icon: newColumn.icon,
        cards: [],
      }, //przecinki
    ]);
  };

  return (
    //co ma zwracac dany komponent
    <div className={styles.form}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span>soon</span>
        </h2>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            icon={column.icon}
            cards={column.cards}
            addCard={addCard}
          /> //key nie uzywac indexu array
        ))}
      </section>
      <ColumnForm action={addColumn} />
    </div>
  );
};

export default List;
