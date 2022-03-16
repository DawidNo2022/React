import { addList } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './ListForm.module.scss';
const ListForm = () => {
  const [title, setTitle] = useState(''); //zmienna stanu + funkcja do modyfikacji stanu(setValue)
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));

    setTitle('');
    setDescription('');
  };
  const handleSetTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSetDescription = (e) => {
    setDescription(e.target.value);
  };
  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      Title:
      <TextInput type='text' value={title} onChange={handleSetTitle} />
      Description:
      <TextInput
        type='text'
        value={description}
        onChange={handleSetDescription}
      />
      <Button>Add List</Button>
    </form>
  );
};

export default ListForm;
