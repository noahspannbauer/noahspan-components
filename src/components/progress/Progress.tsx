import {
  Progress as HeroUIProgress,
  ProgressProps as HeroUIProgressProps,
  HeroUIProvider
} from '@heroui/react';

type ProgressBaseProps = HeroUIProgressProps;

export interface ProgressProps extends ProgressBaseProps {}

export const Progress = ({ ...rest }: ProgressProps) => {
  return (
    <HeroUIProvider>
      <HeroUIProgress {...rest} />
    </HeroUIProvider>
  );
};
