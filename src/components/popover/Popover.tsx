import {
  Popover as MaterialTailwindPopover,
  PopoverProps as MaterialTailwindPopoverProps,
  PopoverHandler as MaterialTailwindPopoverHandler,
  PopoverHandlerProps as MaterialTailwindPopoverHandlerProps,
  PopoverContent as MaterialTailwindPopoverContent,
  PopoverContentProps as MaterialTailwindPopoverContentProps
} from '@material-tailwind/react';

type PopoverHandlerBaseProps = Pick<
  MaterialTailwindPopoverHandlerProps,
  'children'
>;

export interface PopoverHandlerProps extends PopoverHandlerBaseProps {}

export const PopoverHandler = ({ ...rest }: PopoverHandlerProps) => {
  return <MaterialTailwindPopoverHandler {...rest} />;
};

type PopoverContentBaseProps = Pick<
  MaterialTailwindPopoverContentProps,
  'className' | 'children'
>;

export interface PopoverContentProps extends PopoverContentBaseProps {}

export const PopoverContent = ({ ...rest }: PopoverContentProps) => {
  return <MaterialTailwindPopoverContent {...rest} />;
};

type PopoverBaseProps = Pick<
  MaterialTailwindPopoverProps,
  | 'open'
  | 'handler'
  | 'placement'
  | 'offset'
  | 'dismiss'
  | 'animate'
  | 'children'
>;

export interface PopoverProps extends PopoverBaseProps {}

export const Popover = ({ ...rest }: PopoverProps) => {
  return <MaterialTailwindPopover {...rest} />;
};
