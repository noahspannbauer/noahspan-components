import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'color' | 'size'>;

export interface PenIconProps extends FontAwesomeIconBaseProps {}

export const PenIcon = ({ ...rest }: PenIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faPen} {...rest} />
    </span>
  );
};
