import React, { ChangeEventHandler, FC } from 'react';
import styles from './SearchField.module.scss';
import { SearchForm } from '../../components/Forms';
import { SearchButton } from '../Button';
import AllResurce from '../Lists/AllResurce/AllResurce';

interface IsearchField extends React.ComponentPropsWithoutRef<'input'> {
  data: string
}

const SearchField: FC<IsearchField> = ({ data }) => {
  const [inputText, setInputText] = React.useState('');

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => (
    setInputText(event.target.value)
  );
  const showQuestion = () => {
    console.log(inputText);
    alert(!inputText ? 'Введите поисковый запрос' : `Ура! Нашлось: ${inputText}`);
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
    <SearchForm 
      FormName='SearchForm'
      onSubmit={handleOnSubmit}>
      <input 
        type='input' 
        placeholder={data}
        value={inputText} 
        className={styles.SearchField} 
        onChange={onChangeHandler} />
      <SearchButton />
      <AllResurce />
    </SearchForm>
  );
};
export default SearchField;
