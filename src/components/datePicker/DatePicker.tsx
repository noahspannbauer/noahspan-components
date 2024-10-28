import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps
} from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { PickerValidDate } from '@mui/x-date-pickers/models';

type DatePickerBaseProps = Omit<
  MuiDatePickerProps<PickerValidDate, boolean>,
  'onChange' | 'value'
>;

export interface DatePickerProps extends DatePickerBaseProps {
  onChange: (newValue: string) => void;
  value: string;
}

export const DatePicker = ({ onChange, value, ...rest }: DatePickerProps) => {
  const handleDateChanged = (date: Dayjs | null) => {
    onChange(date !== null ? date!.format('MM/DD/YYYY') : '');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        onChange={handleDateChanged}
        value={value !== '' ? dayjs(value) : null}
        {...rest}
      />
    </LocalizationProvider>
  );
};
