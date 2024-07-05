import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export interface ChevronDownIconProps extends FontAwesomeIconBaseProps {}

export const ChevronDownIcon = ({ ...rest }: ChevronDownIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faChevronDown} {...rest} />
    </span>
  );
};
