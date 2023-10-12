import React, { ChangeEventHandler, FC } from 'react';
import styles from './SearchInput.module.scss';
import { SearchButton } from '../../../ui-lib/Button';
import { useDispatch, useSelector } from '../../../services/hooks';
import searchNameThunk from '../../../thunks/search-name-thunk';
import { setImageSearchField } from '../../../store/systemSlice';

interface SearchFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  data: string;
}

const SearchInput: FC<SearchFieldProps> = ({ data }) => {
  const { imageSearchField } = useSelector((state) => state.system);
  const dispatch = useDispatch();

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => (
    dispatch(setImageSearchField(event.target.value))
  );
  const showQuestion = () => {
    dispatch(searchNameThunk(imageSearchField));
  };
  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    showQuestion();
  };

  return (
    <form className={styles.form} onSubmit={showQuestion}>
      <input 
        type='input' 
        placeholder={data}
        value={imageSearchField} 
        className={styles.field} 
        onChange={onChangeHandler} />
      <SearchButton />
    </form>
  );
};
export default SearchInput;
