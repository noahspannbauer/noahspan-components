// import {
//   Avatar as MuiAvatar,
//   AvatarProps as MuiAvatarProps
// } from '@mui/material';
// import { SxProps, Theme, ThemeProvider } from '@mui/material/styles';
// import theme from '../../theme';

// type AvatarBaseProps = Omit<MuiAvatarProps, 'imgProps'>;

// export interface AvatarProps extends AvatarBaseProps {
//   imgProps?: React.ImgHTMLAttributes<HTMLImageElement> & {
//     sx?: SxProps<Theme>;
//   };
// }

// export const Avatar = ({ imgProps, ...rest }: AvatarProps) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <MuiAvatar imgProps={imgProps} {...rest} />
//     </ThemeProvider>
//   );
// };

import {
  Avatar as HeroUIAvatar,
  AvatarProps as HeroUIAvatarProps,
  HeroUIProvider
} from '@heroui/react';

type AvatarBaseProps = HeroUIAvatarProps;

export interface AvatarProps extends AvatarBaseProps {}

export const Avatar = ({ ...rest }: AvatarProps) => {
  return (
    <HeroUIProvider>
      <HeroUIAvatar {...rest} />
    </HeroUIProvider>
  );
};
