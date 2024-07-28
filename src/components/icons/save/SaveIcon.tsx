import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export interface SaveIconProps extends FontAwesomeIconBaseProps {}

export const SaveIcon = ({ ...rest }: SaveIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faSave} {...rest} />
    </span>
  );
};
