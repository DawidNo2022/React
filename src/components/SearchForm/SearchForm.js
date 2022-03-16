import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import styles from './SearchForm.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';
const SearchForm = () => {
  //const string = useSelector((state) => state.searchString);
  const [searchString, setSearchString] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateSearchString(''));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));

    setSearchString('');
  };
  const handleSetSearch = (e) => {
    setSearchString(e.target.value);
  };
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search...'
        onChange={handleSetSearch}
        value={searchString}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
