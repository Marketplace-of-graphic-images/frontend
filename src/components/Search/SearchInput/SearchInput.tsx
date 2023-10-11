import React, { ChangeEventHandler, FC } from 'react';
import styles from './SearchInput.module.scss';
import { SearchButton } from '../../../ui-lib/Button';

interface SearchFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  data: string;
}

const SearchInput: FC<SearchFieldProps> = ({ data }) => {
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
