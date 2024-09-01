import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'color' | 'size'>;

export interface EyeIconProps extends FontAwesomeIconBaseProps {}

export const EyeIcon = ({ ...rest }: EyeIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faEye} {...rest} />
    </span>
  );
};
