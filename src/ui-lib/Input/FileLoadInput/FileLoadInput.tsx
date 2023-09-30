import React, { ComponentPropsWithoutRef, FC, ReactComponentElement } from 'react';
import styles from './FileLoadInput.module.scss';

interface FileLoadInputProps extends ComponentPropsWithoutRef<'input'> {
  onChange: (val: any) => void;
  icon?: ReactComponentElement<FC> | null;
  className?: string;
}

const FileLoadInput: FC<FileLoadInputProps> = (
  {
    icon = null, 
    className = '',
    onChange,
    ...rest
  },
) => (
  <label className={`${className} ${styles.fileLoadInput}`}>
    <input
      type='file'
      className={styles.fileLoadInput__input}
      onChange={onChange}
      {...rest} />
    {icon}
  </label>
);

FileLoadInput.defaultProps = {
  icon: null,
  className: '',
};

export default FileLoadInput;
