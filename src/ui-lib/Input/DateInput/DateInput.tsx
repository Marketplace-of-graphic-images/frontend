import React, { FC } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './libaryRestyle.scss';
import styles from './DateInput.module.scss';

import { CalendarIcon } from '../../Icons';

/* eslint-disable @typescript-eslint/restrict-template-expressions */

interface DateInputProps {
  value: Date | undefined;
  onChange: (val: any) => void;
  label?: string;
  width?: number;
  height?: number;
}

const DateInput: FC<DateInputProps> = (
  {
    value, 
    onChange, 
    label = '',
    width = 484,
    height = 46,
  },
) => (
  <div className={styles.datePicker__container} style={{ maxWidth: width }}>
    {label !== '' && (
      <label className={styles.datePicker__label}>
        {label}
      </label>
    )}

    <div className={styles.datePicker__inputContainer} style={{ maxHeight: height }}>
      <DatePicker
        onChange={onChange}
        value={value}
        className={styles.datePicker}
        calendarIcon={<CalendarIcon />}
        clearIcon={null}
        closeCalendar
        format='dd.MM.yyyy'
        minDate={new Date('01-01-1920')}
        maxDate={new Date()}
        tileClassName={styles.datePicker__tile}
        dayPlaceholder='дд'
        monthPlaceholder='мм'
        yearPlaceholder='гггг'
        calendarClassName={styles.datePicker__calendar} />
    </div>

  </div>
);

DateInput.defaultProps = {
  label: '',
  width: 484,
  height: 46,
};

export default DateInput;
