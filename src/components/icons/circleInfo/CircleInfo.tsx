import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'color' | 'size'>;

export interface CircleInfoIconProps extends FontAwesomeIconBaseProps {}

export const CircleInfoIcon = ({ ...rest }: CircleInfoIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faCircleInfo} {...rest} />
    </span>
  );
};
