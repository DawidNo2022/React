import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import styles from './SearchForm.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const SearchForm = () => {
  const [searchString, setSearchString] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_SEARCHSTRING', payload: { searchString } });
    //action({ title: title }, columnId);
    setSearchString('');
  };
  const handleSetSearch = (e) => {
    setSearchString(e.target.value);
  };
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder='Search...' onChange={handleSetSearch} />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
