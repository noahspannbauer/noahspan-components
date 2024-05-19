import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export const Plane: React.FC<FontAwesomeIconBaseProps> = ({ ...rest }) => {
  return (
    <span>
      <FontAwesomeIcon icon={faPlane} {...rest} />
    </span>
  );
};
