import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export interface PlusIconProps extends FontAwesomeIconBaseProps {}

export const PlusIcon = ({ ...rest }: PlusIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faPlus} {...rest} />
    </span>
  );
};
