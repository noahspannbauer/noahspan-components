import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export interface TrashIconProps extends FontAwesomeIconBaseProps {}

export const TrashIcon = ({ ...rest }: TrashIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faTrashCan} {...rest} />
    </span>
  );
};
