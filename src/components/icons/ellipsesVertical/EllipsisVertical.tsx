import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'color' | 'size'>;

export interface EllipsisVerticalIconProps extends FontAwesomeIconBaseProps {}

export const EllipsisVerticalIcon = ({
  ...rest
}: EllipsisVerticalIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faEllipsisVertical} {...rest} />
    </span>
  );
};
