import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export interface ChevronUpIconProps extends FontAwesomeIconBaseProps {}

export const ChevronUpIcon = ({ ...rest }: ChevronUpIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faChevronUp} {...rest} />
    </span>
  );
};
