import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export const PuzzlePiece: React.FC<FontAwesomeIconBaseProps> = ({
  ...rest
}) => {
  return (
    <span>
      <FontAwesomeIcon icon={faPuzzlePiece} {...rest} />
    </span>
  );
};
