import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
//wyjasnic dzialanie Column z COlumnForm

const ColumnForm = (props) => {
  const [title, setTitle] = useState(''); //zmienna stanu + funkcja do modyfikacji stanu(setValue)
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: title, icon: icon });

    setTitle('');
    setIcon('');
  };
  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      Title:
      <TextInput
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Icon:
      <TextInput
        type='text'
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
