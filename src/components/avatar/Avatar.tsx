import {
  Avatar as MaterialTailwindAvatar,
  AvatarProps as MaterialTailwindAvatarProps
} from '@material-tailwind/react';

type AvatarBaseProps = Pick<
  MaterialTailwindAvatarProps,
  'alt' | 'className' | 'color' | 'size' | 'src' | 'variant' | 'withBorder'
>;

export interface AvatarProps extends AvatarBaseProps {}

export const Avatar = ({ ...rest }: AvatarProps) => {
  return <MaterialTailwindAvatar {...rest} />;
};
