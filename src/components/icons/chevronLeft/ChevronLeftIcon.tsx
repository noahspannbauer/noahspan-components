import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export interface ChevronLeftIconProps extends FontAwesomeIconBaseProps {}

export const ChevronLeftIcon = ({ ...rest }: ChevronLeftIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faChevronLeft} {...rest} />
    </span>
  );
};
