// import {
//   Accordion as MaterialTailwindAccordion,
//   AccordionProps as MaterialTailwindAccordionProps,
//   AccordionHeader as MaterialTailwindAccordionHeader,
//   AccordionHeaderProps as MaterialTailwindAccordionHeaderProps,
//   AccordionBody as MaterialTailwindAccordionBody,
//   AccordionBodyProps as MaterialTailwindAccordionBodyProps
// } from '@material-tailwind/react';

// type AccordionHeaderBaseProps = Pick<
//   MaterialTailwindAccordionHeaderProps,
//   'className' | 'children' | 'onClick'
// >;

// export interface AccordionHeaderProps extends AccordionHeaderBaseProps {}

// export const AccordionHeader = ({ ...rest }: AccordionHeaderProps) => {
//   return <MaterialTailwindAccordionHeader {...rest} />;
// };

// type AccordionBodyBaseProps = Pick<
//   MaterialTailwindAccordionBodyProps,
//   'className' | 'children'
// >;

// export interface AccordionBodyProps extends AccordionBodyBaseProps {}

// export const AccordionBody = ({ ...rest }: AccordionBodyProps) => {
//   return <MaterialTailwindAccordionBody {...rest} />;
// };

// type AccordionBaseProps = Pick<
//   MaterialTailwindAccordionProps,
//   'open' | 'icon' | 'animate' | 'disabled' | 'className' | 'children'
// >;

// export interface AccordionProps extends AccordionBaseProps {}

// export const Accordion = ({ ...rest }: AccordionProps) => {
//   return <MaterialTailwindAccordion {...rest} />;
// };

import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
  AccordionActions as MuiAccordionActions,
  AccordionActionsProps as MuiAccordionActionsProps,
  AccordionDetails as MuiAccordionDetails,
  AccordionDetailsProps as MuiAccordionDetailsProps,
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps as MuiAccordionSummaryProps
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

type AccordionActionsBaseProps = MuiAccordionActionsProps;

export interface AccordionActionsProps extends AccordionActionsBaseProps {}

export const AccordionActions = ({ ...rest }: AccordionActionsProps) => {
  return <MuiAccordionActions {...rest} />;
};

type AccordionDetailsBaseProps = MuiAccordionDetailsProps;

export interface AccordionDetailsProps extends AccordionDetailsBaseProps {}

export const AccordionDetails = ({ ...rest }: AccordionDetailsProps) => {
  return <MuiAccordionDetails {...rest} />;
};

type AccordionSummaryBaseProps = MuiAccordionSummaryProps;

export interface AccordionSummaryProps extends AccordionSummaryBaseProps {}

export const AccordionSummary = ({ ...rest }: AccordionSummaryProps) => {
  return <MuiAccordionSummary {...rest} />;
};

type AccordionBaseProps = MuiAccordionProps;

export interface AccordionProps extends AccordionBaseProps {}

export const Accordion = ({ ...rest }: AccordionProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiAccordion {...rest} />
    </ThemeProvider>
  );
};
