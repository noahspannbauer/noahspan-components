import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

type FontAwesomeIconBaseProps = Pick<FontAwesomeIconProps, 'size'>;

export interface PuzzlePieceIconProps extends FontAwesomeIconBaseProps {}

export const PuzzlePieceIcon = ({ ...rest }: PuzzlePieceIconProps) => {
  return (
    <span>
      <FontAwesomeIcon icon={faPuzzlePiece} {...rest} />
    </span>
  );
};
