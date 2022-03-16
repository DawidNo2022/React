import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { addColumn } from '../../redux/columnRedux';

const ColumnForm = ({ listId }) => {
  const [title, setTitle] = useState(''); //zmienna stanu + funkcja do modyfikacji stanu(setValue)
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));

    setTitle('');
    setIcon('');
  };
  const handleSetTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSetIcon = (e) => {
    setIcon(e.target.value);
  };
  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      Title:
      <TextInput type='text' value={title} onChange={handleSetTitle} />
      Icon:
      <TextInput type='text' value={icon} onChange={handleSetIcon} />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
