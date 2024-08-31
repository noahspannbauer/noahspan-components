import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'color' | 'size'>;

export interface CircleCheckIconProps extends FontAwesomeIconBaseProps {}

export const CircleCheckIcon = ({ ...rest }: CircleCheckIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faCircleCheck} {...rest} />
    </span>
  );
};
