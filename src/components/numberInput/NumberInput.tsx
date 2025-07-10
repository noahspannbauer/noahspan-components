import {
  NumberInput as HeroUINumberInput,
  NumberInputProps as HeroUINumberInputProps,
  HeroUIProvider
} from '@heroui/react';

type NumberInputBaseProps = HeroUINumberInputProps;

export interface NumberInputProps extends NumberInputBaseProps {}

export const NumberInput = ({ ...rest }: NumberInputProps) => {
  return (
    <HeroUIProvider>
      <HeroUINumberInput {...rest} />
    </HeroUIProvider>
  );
};
