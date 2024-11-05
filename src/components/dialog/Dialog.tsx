import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogActions as MuiDialogActions,
  DialogActionsProps as MuiDialogActionsProps,
  DialogContent as MuiDialogContent,
  DialogContentProps as MuiDialogContentProps,
  DialogContentText as MuiDialogContentText,
  DialogContentTextProps as MuiDialogContentTextProps,
  DialogTitle as MuiDialogTitle,
  DialogTitleProps as MuiDialogTitleProps
} from '@mui/material';

type DialogActionsBaseProps = MuiDialogActionsProps;

export interface DialogActionsProps extends DialogActionsBaseProps {}

export const DialogActions = ({ ...rest }: DialogActionsProps) => {
  return <MuiDialogActions {...rest} />;
};

type DialogContentBaseProps = MuiDialogContentProps;

export interface DialogContentProps extends DialogContentBaseProps {}

export const DialogContent = ({ ...rest }: DialogContentProps) => {
  return <MuiDialogContent {...rest} />;
};

type DialogContentTextBaseProps = MuiDialogContentTextProps;

export interface DialogContentTextProps extends DialogContentTextBaseProps {}

export const DialogContentText = ({ ...rest }: DialogContentTextProps) => {
  return <MuiDialogContentText {...rest} />;
};

type DialogTitleBaseProps = MuiDialogTitleProps;

export interface DialogTitleProps extends DialogTitleBaseProps {}

export const DialogTitle = ({ ...rest }: DialogTitleProps) => {
  return <MuiDialogTitle {...rest} />;
};

type DialogBaseProps = MuiDialogProps;

export interface DialogProps extends DialogBaseProps {}

export const Dialog = ({ ...rest }: DialogProps) => {
  return <MuiDialog {...rest} />;
};
