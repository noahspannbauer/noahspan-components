import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export const ChevronLeft = ({ ...rest }: FontAwesomeIconBaseProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faChevronLeft} {...rest} />
    </span>
  );
};
