import {
  Dialog as MaterialTailwindDialog,
  DialogProps as MaterialTailwindDialogProps,
  DialogBody as MaterialTailwindDialogBody,
  DialogBodyProps as MaterialTailwindDialogBodyProps,
  DialogFooter as MaterialTailwindDialogFooter,
  DialogFooterProps as MaterialTailwindDialogFooterProps,
  DialogHeader as MaterialTailwindDialogHeader,
  DialogHeaderProps as MaterialTailwindDialogHeaderProps
} from '@material-tailwind/react';

type DialogBodyBaseProps = Pick<
  MaterialTailwindDialogBodyProps,
  'divider' | 'className' | 'children'
>;

export interface DialogBodyProps extends DialogBodyBaseProps {}

export const DialogBody = ({ ...rest }: DialogBodyBaseProps) => {
  return <MaterialTailwindDialogBody {...rest} />;
};

type DialogFooterBaseProps = Pick<
  MaterialTailwindDialogFooterProps,
  'className' | 'children'
>;

export interface DialogFooterProps extends DialogFooterBaseProps {}

export const DialogFooter = ({ ...rest }: DialogFooterProps) => {
  return <MaterialTailwindDialogFooter {...rest} />;
};

type DialogHeaderBaseProps = Pick<
  MaterialTailwindDialogHeaderProps,
  'className' | 'children'
>;

export interface DialogHeaderProps extends DialogHeaderBaseProps {}

export const DialogHeader = ({ ...rest }: DialogHeaderProps) => {
  return <MaterialTailwindDialogHeader {...rest} />;
};

type DialogBaseProps = Pick<
  MaterialTailwindDialogProps,
  | 'open'
  | 'handler'
  | 'size'
  | 'dismiss'
  | 'animate'
  | 'className'
  | 'children'
  | 'style'
>;

export interface DialogProps extends DialogBaseProps {}

export const Dialog = ({ ...rest }: DialogProps) => {
  return <MaterialTailwindDialog {...rest} />;
};
