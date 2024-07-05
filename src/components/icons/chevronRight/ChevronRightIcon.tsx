import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export interface ChevronRightIconProps extends FontAwesomeIconBaseProps {}

export const ChevronRightIcon = ({ ...rest }: ChevronRightIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faChevronRight} {...rest} />
    </span>
  );
};
