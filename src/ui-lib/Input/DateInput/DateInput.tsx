import React, { FC } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import styles from './DateInput.module.scss';
import { CalendarIcon } from '../../Icons';

/* eslint-disable @typescript-eslint/restrict-template-expressions */

interface DateInputProps {
  value: Date | undefined;
  onChange: (val: any) => void;
}

const DateInput: FC<DateInputProps> = ({ value, onChange }) => (
  <div>
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
);

export default DateInput;
