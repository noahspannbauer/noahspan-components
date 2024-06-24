import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export const ChevronDown = ({ ...rest }: FontAwesomeIconBaseProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faChevronDown} {...rest} />
    </span>
  );
};
