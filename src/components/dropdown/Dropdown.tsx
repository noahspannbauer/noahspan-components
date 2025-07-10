import {
  Dropdown as HeroUIDropdown,
  DropdownProps as HeroIUDropdownProps,
  DropdownItem as HeroUIDropdownItem,
  DropdownItemProps as HeroUIDropdownItemProps,
  DropdownMenu as HeroUIDropdownMenu,
  DropdownMenuProps as HeroUIDropdownMenuProps,
  DropdownSection as HeroUIDropdownSection,
  DropdownSectionProps as HeroUIDropdownSectionProps,
  DropdownTrigger as HeroUIDropdownTrigger,
  DropdownTriggerProps as HeroUIDropdownTriggerProps,
  HeroUIProvider
} from '@heroui/react';

type DropdownItemBaseProps = HeroUIDropdownItemProps;

export interface DropdownItemProps extends DropdownItemBaseProps {}

export const DropdownItem = ({ ...rest }: DropdownItemProps) => {
  return (
    <HeroUIProvider>
      <HeroUIDropdownItem {...rest} />
    </HeroUIProvider>
  );
};

type DropdownMenuBaseProps = HeroUIDropdownMenuProps;

export interface DropdownMenuProps extends DropdownMenuBaseProps {}

export const DropdownMenu = ({ ...rest }: DropdownMenuProps) => {
  return (
    <HeroUIProvider>
      <HeroUIDropdownMenu {...rest} />
    </HeroUIProvider>
  );
};

type DropdownSectionBaseProps = HeroUIDropdownSectionProps;

export interface DropdownSectionProps extends DropdownSectionBaseProps {}

export const DropdownSection = ({ ...rest }: DropdownSectionProps) => {
  return (
    <HeroUIProvider>
      <HeroUIDropdownSection {...rest} />
    </HeroUIProvider>
  );
};

type DropdownTriggerBaseProps = HeroUIDropdownTriggerProps;

export interface DropdownTriggerProps extends DropdownTriggerBaseProps {}

export const DropdownTrigger = ({ ...rest }: DropdownTriggerProps) => {
  return (
    <HeroUIProvider>
      <HeroUIDropdownTrigger {...rest} />
    </HeroUIProvider>
  );
};

type DropdownBaseProps = HeroIUDropdownProps;

export interface DropdownProps extends DropdownBaseProps {}

export const Dropdown = ({ ...rest }: DropdownProps) => {
  return (
    <HeroUIProvider>
      <HeroUIDropdown {...rest} />
    </HeroUIProvider>
  );
};
