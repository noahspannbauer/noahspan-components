import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export interface XmarkIconProps extends FontAwesomeIconBaseProps {}

export const XmarkIcon = ({ ...rest }: XmarkIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faXmark} {...rest} />
    </span>
  );
};
