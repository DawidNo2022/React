import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import styles from './SearchForm.module.scss';

const SearchForm = () => (
  <form className={styles.searchForm}>
    <TextInput placeholder='Search...' />
    <Button>
      <span className='fa fa-search' />
    </Button>
  </form>
);

export default SearchForm;
