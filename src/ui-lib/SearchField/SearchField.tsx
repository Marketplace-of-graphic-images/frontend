import React, { ChangeEventHandler, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchField.module.scss';
import { SearchForm } from '../../components/Forms';
import { SearchButton } from '../Button';
import AllResource from '../Lists/AllResurce/AllResurce';
import { useDispatch, useSelector } from '../../services/hooks';
import { setImageSearchField } from '../../store/systemSlice';
import searchNameThunk from '../../thunks/search-name-thunk';

interface SearchFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  data: string;
}

const SearchField: FC<SearchFieldProps> = ({ data }) => {
  const [inputText, setInputText] = React.useState('');
  const { imageSearchField } = useSelector((state) => state.system);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => (
    dispatch(setImageSearchField(event.target.value))
  );
  
  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(searchNameThunk(imageSearchField));
    navigate('/search');
  };

  return (
    <SearchForm 
      FormName='SearchForm'
      onSubmit={handleOnSubmit}>
      <input 
        type='input' 
        placeholder={data}
        value={imageSearchField} 
        className={styles.SearchField} 
        onChange={onChangeHandler} />
      <SearchButton />
      <AllResource />
    </SearchForm>
  );
};
export default SearchField;
