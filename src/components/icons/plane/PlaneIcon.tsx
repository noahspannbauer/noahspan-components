import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export interface PlaneIconProps extends FontAwesomeIconBaseProps {}

export const PlaneIcon = ({ ...rest }: PlaneIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faPlane} {...rest} />
    </span>
  );
};
