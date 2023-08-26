import React, { FC, ReactNode } from 'react';
import styles from './SearchForm.module.scss';

interface ISearchForm {
  FormName: string
  children: ReactNode
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const SearchForm: FC<ISearchForm> = ({
  FormName,
  children,
  onSubmit,
}) => (

  <form
    className={styles.SearchFormClass}
    noValidate
    name={FormName}
    action='post'
    onSubmit={onSubmit}>
    {children}
  </form>
);
export default SearchForm;
