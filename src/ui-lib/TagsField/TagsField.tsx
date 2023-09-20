import React, {FC} from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './TagsField.module.scss';
import PopularButton from '../Button/PopularButton/PopularButton';
import AllResource from '../Lists/AllResurce/AllResurce';
import { SearchIconBlack } from '../Icons';

interface TagsFieldProps {
  data: string[];
}

const TagsField: FC<TagsFieldProps> = ({ data }) => {

  const testClick = () => {
    console.log('Нажатие на тег');
  }

  return (
    <div className={styles.tagsButtons}> 
    { 
      data.map((item) => (
        <PopularButton
        key={uuidv4()}
        text={item}
        onClick={testClick}
        icon={(
          <SearchIconBlack width={16} height={16} />)}
        />
      ))
    }
    </div>
  );
};

export default TagsField;
