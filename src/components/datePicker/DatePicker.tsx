import {
  DatePicker as HeroUIDatePicker,
  DatePickerProps as HeroUIDatePickerProps,
  HeroUIProvider
} from '@heroui/react';

export { parseDate } from '@internationalized/date';

type DatePickerBaseProps = HeroUIDatePickerProps;

export interface DatePickerProps extends DatePickerBaseProps {}

export const DatePicker = ({ ...rest }: DatePickerProps) => {
  return (
    <HeroUIProvider>
      <HeroUIDatePicker {...rest} />
    </HeroUIProvider>
  );
};
