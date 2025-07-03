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
