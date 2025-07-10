import {
  Divider as HeroUIDivider,
  DividerProps as HeroUIDividerProps,
  HeroUIProvider
} from '@heroui/react';

type DividerBaseProps = HeroUIDividerProps;

export interface DividerProps extends DividerBaseProps {}

export const Divider = ({ ...rest }: DividerProps) => {
  return (
    <HeroUIProvider>
      <HeroUIDivider {...rest} />
    </HeroUIProvider>
  );
};
