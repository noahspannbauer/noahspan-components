import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'color' | 'size'>;

export interface TriangleExclamationIconProps
  extends FontAwesomeIconBaseProps {}

export const TriangleExclamationIcon = ({
  ...rest
}: TriangleExclamationIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faTriangleExclamation} {...rest} />
    </span>
  );
};
