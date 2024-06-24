import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export const ChevronRight = ({ ...rest }: FontAwesomeIconBaseProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faChevronRight} {...rest} />
    </span>
  );
};
