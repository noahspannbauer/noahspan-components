import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export const ChevronUp = ({ ...rest }: FontAwesomeIconBaseProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faChevronUp} {...rest} />
    </span>
  );
};
