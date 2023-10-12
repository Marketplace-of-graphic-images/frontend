import React, { ChangeEventHandler, FC } from 'react';
import styles from './SearchInput.module.scss';
import { SearchButton } from '../../../ui-lib/Button';
import { useDispatch, useSelector } from '../../../services/hooks';
import searchNameThunk from '../../../thunks/search-name-thunk';

interface SearchFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  data: string;
}

const SearchInput: FC<SearchFieldProps> = ({ data }) => {
  const [inputText, setInputText] = React.useState('');
  const dispatch = useDispatch();

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => (
    setInputText(event.target.value)
  );
  const showQuestion = () => {
    dispatch(searchNameThunk(inputText));
  };
  const cleanForm = () => {
    setInputText('');
  };
  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    showQuestion();
    cleanForm();
  };

  return (
    <form className={styles.form} onSubmit={showQuestion}>
      <input 
        type='input' 
        placeholder={data}
        value={inputText} 
        className={styles.field} 
        onChange={onChangeHandler} />
      <SearchButton />
    </form>
  );
};
export default SearchInput;
