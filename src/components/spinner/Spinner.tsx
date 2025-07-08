import {
  Spinner as HeroUISpinner,
  SpinnerProps as HeroUISpinnerProps,
  HeroUIProvider
} from '@heroui/react';

type SpinnerBaseProps = HeroUISpinnerProps;

export interface SpinnerProps extends SpinnerBaseProps {}

export const Spinner = ({ ...rest }: SpinnerProps) => {
  return (
    <HeroUIProvider>
      <HeroUISpinner {...rest} />
    </HeroUIProvider>
  );
};
