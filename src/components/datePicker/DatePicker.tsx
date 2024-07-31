import { useEffect, useState } from 'react';
import { IconButton } from '@material-tailwind/react';
import { Input, InputProps } from '../../components/input/Input';
import {
  Popover,
  PopoverContent,
  PopoverHandler
} from '../../components/popover/Popover';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { ChevronLeftIcon } from '../icons/chevronLeft/ChevronLeftIcon';
import { ChevronRightIcon } from '../icons/chevronRight/ChevronRightIcon';
import { CalendarIcon } from '../icons/calendar/CalendarIcon';

type DatePickerInputProps = Omit<InputProps, 'onChange'>;

export interface DatePickerProps {
  handleDateChanged: (date: string) => void;
  inputProps: DatePickerInputProps;
}

const defaultInputProps = {
  className: 'rounded-r-none relative',
  placeholder: 'MM/DD/YYYY'
};

export const DatePicker = ({
  handleDateChanged,
  inputProps
}: DatePickerProps) => {
  const [date, setDate] = useState<Date>();
  const [inputPropsState, setInputPropsState] =
    useState<DatePickerInputProps>();

  /* eslint-disable */
  const onDateChanged = (event: any) => {
    handleDateChanged(event.target.value);
  };
  /* eslint-enable */

  /* eslint-disable */
  const onDateSelected = (date: any) => {
    const dateString: string = format(new Date(date), 'MM/dd/yyyy');

    handleDateChanged(dateString);
    setDate(new Date(date));
  };
  /* eslint-enable */

  useEffect(() => {
    if (inputProps) {
      const newInputProps: DatePickerInputProps = {
        ...inputProps,
        ...defaultInputProps
      };
      console.log(newInputProps);
      setInputPropsState(newInputProps);
    }
  }, []);

  useEffect(() => {
    if (inputProps.value || inputProps.value === '') {
      const newInputProps: DatePickerInputProps = {
        ...inputPropsState,
        value: inputProps.value
      };
      const value: string = inputProps.value.toString();

      if (value.toString().length === 10) {
        if (isNaN(new Date(value).getTime())) {
          newInputProps.helperText = 'Invalid date';
          newInputProps.className = `rounded-r-none`;
        } else {
          newInputProps.className = defaultInputProps.className;
          newInputProps.helperText = '';
          setDate(new Date(value));
        }
      } else if (value.toString().length > 0) {
        newInputProps.helperText = 'Date format MM/DD/YYYY';
        newInputProps.className = defaultInputProps.className;
      }

      setInputPropsState(newInputProps);
    }
  }, [inputProps?.value]);

  return (
    <div className='relative flex w-full max-w-[24rem] z-50'>
      <Input {...inputPropsState} onChange={onDateChanged} />
      <Popover placement='bottom'>
        <PopoverHandler>
          <IconButton
            className='flex h-10 items-center gap-2 rounded-l-none border border-l-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3 min-w-[40px] max-w-[40px]'
            variant='text'
            color='blue-gray'
          >
            <CalendarIcon />
          </IconButton>
        </PopoverHandler>
        <PopoverContent className='z-[9996]'>
          <DayPicker
            mode='single'
            selected={date}
            onSelect={onDateSelected}
            showOutsideDays
            className='border-0'
            classNames={{
              caption: 'flex justify-center py-2 mb-4 relative items-center',
              caption_label: 'text-sm font-medium text-gray-900',
              nav: 'flex items-center',
              nav_button:
                'h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300',
              nav_button_previous: 'absolute left-1.5',
              nav_button_next: 'absolute right-1.5',
              table: 'w-full border-collapse',
              head_row: 'flex font-medium text-gray-900',
              head_cell: 'm-0.5 w-9 font-normal text-sm',
              row: 'flex w-full mt-2',
              cell: 'text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
              day: 'h-9 w-9 p-0 font-normal',
              day_range_end: 'day-range-end',
              day_selected:
                'rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white',
              day_today: 'rounded-md bg-gray-200 text-gray-900',
              day_outside:
                'day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10',
              day_disabled: 'text-gray-500 opacity-50',
              day_hidden: 'invisible'
            }}
            components={{
              IconLeft: () => <ChevronLeftIcon />,
              IconRight: () => <ChevronRightIcon />
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
