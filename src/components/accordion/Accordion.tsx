// import {
//   Accordion as MuiAccordion,
//   AccordionProps as MuiAccordionProps,
//   AccordionActions as MuiAccordionActions,
//   AccordionActionsProps as MuiAccordionActionsProps,
//   AccordionDetails as MuiAccordionDetails,
//   AccordionDetailsProps as MuiAccordionDetailsProps,
//   AccordionSummary as MuiAccordionSummary,
//   AccordionSummaryProps as MuiAccordionSummaryProps
// } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from '../../theme';

// type AccordionActionsBaseProps = MuiAccordionActionsProps;

// export interface AccordionActionsProps extends AccordionActionsBaseProps {}

// export const AccordionActions = ({ ...rest }: AccordionActionsProps) => {
//   return <MuiAccordionActions {...rest} />;
// };

// type AccordionDetailsBaseProps = MuiAccordionDetailsProps;

// export interface AccordionDetailsProps extends AccordionDetailsBaseProps {}

// export const AccordionDetails = ({ ...rest }: AccordionDetailsProps) => {
//   return <MuiAccordionDetails {...rest} />;
// };

// type AccordionSummaryBaseProps = MuiAccordionSummaryProps;

// export interface AccordionSummaryProps extends AccordionSummaryBaseProps {}

// export const AccordionSummary = ({ ...rest }: AccordionSummaryProps) => {
//   return <MuiAccordionSummary {...rest} />;
// };

// type AccordionBaseProps = MuiAccordionProps;

// export interface AccordionProps extends AccordionBaseProps {}

// export const Accordion = ({ ...rest }: AccordionProps) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <MuiAccordion {...rest} />
//     </ThemeProvider>
//   );
// };

import {
  Accordion as HeroUIAccordion,
  AccordionProps as HeroUIAccordionProps,
  AccordionItem as HeroUIAccordionItem,
  AccordionItemProps as HeroUIAccordionItemProps,
  HeroUIProvider
} from '@heroui/react';

type AccordionItemBaseProps = HeroUIAccordionItemProps;

export interface AccordionItemProps extends AccordionItemBaseProps {}

export const AccordionItem = ({ ...rest }: AccordionItemProps) => {
  return (
    <HeroUIProvider>
      <HeroUIAccordionItem {...rest} />
    </HeroUIProvider>
  );
};

type AccordionBaseProps = HeroUIAccordionProps;

export interface AccordionProps extends AccordionBaseProps {}

export const Accordion = ({ ...rest }: AccordionProps) => {
  return (
    <HeroUIProvider>
      <HeroUIAccordion {...rest} />
    </HeroUIProvider>
  );
};
