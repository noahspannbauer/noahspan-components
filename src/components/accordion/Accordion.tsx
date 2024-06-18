import {
  Accordion as MaterialTailwindAccordion,
  AccordionProps as MaterialTailwindAccordionProps,
  AccordionHeader as MaterialTailwindAccordionHeader,
  AccordionHeaderProps as MaterialTailwindAccordionHeaderProps,
  AccordionBody as MaterialTailwindAccordionBody,
  AccordionBodyProps as MaterialTailwindAccordionBodyProps
} from '@material-tailwind/react';

type AccordionHeaderBaseProps = Pick<
  MaterialTailwindAccordionHeaderProps,
  'className' | 'children' | 'onClick'
>;

export interface AccordionHeaderProps extends AccordionHeaderBaseProps {}

export const AccordionHeader = ({ ...rest }: AccordionHeaderProps) => {
  return <MaterialTailwindAccordionHeader {...rest} />;
};

type AccordionBodyBaseProps = Pick<
  MaterialTailwindAccordionBodyProps,
  'className' | 'children'
>;

export interface AccordionBodyProps extends AccordionBodyBaseProps {}

export const AccordionBody = ({ ...rest }: AccordionBodyProps) => {
  return <MaterialTailwindAccordionBody {...rest} />;
};

type AccordionBaseProps = Pick<
  MaterialTailwindAccordionProps,
  'open' | 'icon' | 'animate' | 'disabled' | 'className' | 'children'
>;

export interface AccordionProps extends AccordionBaseProps {}

export const Accordion = ({ ...rest }: AccordionProps) => {
  return <MaterialTailwindAccordion {...rest} />;
};
