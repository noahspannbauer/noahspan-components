// import {
//   Avatar as MaterialTailwindAvatar,
//   AvatarProps as MaterialTailwindAvatarProps
// } from '@material-tailwind/react';

// type AvatarBaseProps = Pick<
//   MaterialTailwindAvatarProps,
//   'alt' | 'className' | 'color' | 'size' | 'src' | 'variant' | 'withBorder'
// >;

// export interface AvatarProps extends AvatarBaseProps {}

// export const Avatar = ({ ...rest }: AvatarProps) => {
//   return <MaterialTailwindAvatar {...rest} />;
// };

import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps
} from '@mui/material';
import { SxProps, Theme, ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

type AvatarBaseProps = Omit<MuiAvatarProps, 'imgProps'>;

export interface AvatarProps extends AvatarBaseProps {
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement> & {
    sx?: SxProps<Theme>;
  };
}

export const Avatar = ({ imgProps, ...rest }: AvatarProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiAvatar imgProps={imgProps} {...rest} />
    </ThemeProvider>
  );
};
