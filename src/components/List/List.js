import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import styles from './List.module.scss'; //style ostatnie
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm.js';
import SearchForm from '../SearchForm/SearchForm.js';
import { getColumnsByList, getListById } from '../../redux/store.js';

const List = () => {
  //funkcja strzalkowa
  const { listId } = useParams();
  const columns = useSelector((state) => getColumnsByList(state, listId));
  const listData = useSelector((state) => getListById(state, listId));

  console.log(columns);
  if (!listData) return <Navigate to='/' />;
  return (
    //co ma zwracac dany komponent
    <div className={styles.form}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column
            key={column.id}
            {...column} //spread operator
          /> //key nie uzywac indexu array
        ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;
