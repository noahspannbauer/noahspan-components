import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'color' | 'size'>;

export interface UserTieIconProps extends FontAwesomeIconBaseProps {}

export const UserTieIcon = ({ ...rest }: UserTieIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faUserTie} {...rest} />
    </span>
  );
};
