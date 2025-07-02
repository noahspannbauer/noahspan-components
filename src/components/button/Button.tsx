import {
  Button as HeroUIButton,
  ButtonProps as HeroUIButtonProps,
  HeroUIProvider
} from '@heroui/react';

type ButtonBaseProps = HeroUIButtonProps;

export interface ButtonProps extends ButtonBaseProps {}

export const Button = ({ ...rest }: ButtonProps) => {
  return (
    <HeroUIProvider>
      <HeroUIButton {...rest} />
    </HeroUIProvider>
  );
};
