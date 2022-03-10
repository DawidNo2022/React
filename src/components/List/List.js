import { useSelector } from 'react-redux';

import styles from './List.module.scss'; //style ostatnie
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm.js';

const List = () => {
  //funkcja strzalkowa
  const columns = useSelector((state) => state.columns);

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
            {...column} //spread operator
          /> //key nie uzywac indexu array
        ))}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;
