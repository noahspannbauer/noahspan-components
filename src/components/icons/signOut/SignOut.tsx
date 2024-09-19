import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'color' | 'size'>;

export interface SignOutIconProps extends FontAwesomeIconBaseProps {}

export const SignOutIcon = ({ ...rest }: SignOutIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faRightFromBracket} {...rest} />
    </span>
  );
};
