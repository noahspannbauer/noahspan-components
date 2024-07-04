import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export interface CalendarIconProps extends FontAwesomeIconBaseProps {}

export const CalendarIcon = ({ ...rest }: CalendarIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faCalendar} {...rest} />
    </span>
  );
};
