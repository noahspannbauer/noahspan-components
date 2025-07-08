import {
  Select as HeroUISelect,
  SelectProps as HeroUISelectProps,
  SelectItem as HeroUISelectItem,
  SelectItemProps as HeroUISelectItemProps,
  HeroUIProvider
} from '@heroui/react';

type SelectItemBaseProps = HeroUISelectItemProps;

export interface SelectItemProps extends SelectItemBaseProps {}

export const SelectItem = ({ ...rest }: SelectItemProps) => {
  return (
    <HeroUIProvider>
      <HeroUISelectItem {...rest} />
    </HeroUIProvider>
  );
};

type SelectBaseProps = HeroUISelectProps;

export interface SelectProps extends SelectBaseProps {
  options: { key: string; label: string }[];
}

export const Select = ({ options, ...rest }: SelectProps) => {
  return (
    <HeroUIProvider>
      <HeroUISelect {...rest}>
        {options.map((option) => (
          <HeroUISelectItem key={option.key}>{option.label}</HeroUISelectItem>
        ))}
      </HeroUISelect>
    </HeroUIProvider>
  );
};
