import {
  Input as HeroUIInput,
  InputProps as HeroUIInputProps,
  HeroUIProvider
} from '@heroui/react';

type InputBaseProps = HeroUIInputProps;

export interface InputProps extends InputBaseProps {}

export const Input = ({ ...rest }: InputProps) => {
  return (
    <HeroUIProvider>
      <HeroUIInput {...rest} />
    </HeroUIProvider>
  );
};
