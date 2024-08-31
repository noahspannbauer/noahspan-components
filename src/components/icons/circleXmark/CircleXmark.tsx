import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'color' | 'size'>;

export interface CircleXmarkIconProps extends FontAwesomeIconBaseProps {}

export const CircleXmarkIcon = ({ ...rest }: CircleXmarkIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faCircleXmark} {...rest} />
    </span>
  );
};
