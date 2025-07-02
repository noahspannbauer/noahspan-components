import {
  Alert as HeroUIAlert,
  AlertProps as HeroUIAlertProps,
  HeroUIProvider
} from '@heroui/react';

type BaseAlertProps = HeroUIAlertProps;

export interface AlertProps extends BaseAlertProps {}

export const Alert = ({ ...rest }: AlertProps) => {
  return (
    <HeroUIProvider>
      <HeroUIAlert {...rest} />
    </HeroUIProvider>
  );
};
