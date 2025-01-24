import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'color' | 'size'>;

export interface GearIconProps extends FontAwesomeIconBaseProps {}

export const GearIcon = ({ ...rest }: GearIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faGear} {...rest} />
    </span>
  );
};
