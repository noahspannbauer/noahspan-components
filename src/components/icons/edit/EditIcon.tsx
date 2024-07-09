import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export interface EditIconProps extends FontAwesomeIconBaseProps {}

export const EditIcon = ({ ...rest }: EditIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faEdit} {...rest} />
    </span>
  );
};
