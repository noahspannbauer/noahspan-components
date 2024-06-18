import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionBody, AccordionHeader } from './Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    layout: 'padded'
  },
  render: function Render() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value: number) => {
      setOpen(open === value ? 0 : value);
    };

    return (
      <>
        <Accordion
          open={open === 1}
          icon={
            open === 1 ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )
          }
        >
          <AccordionHeader onClick={() => handleOpen(1)}>
            Accordion 1 Header
          </AccordionHeader>
          <AccordionBody>Accordion 1 Body</AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            open === 2 ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )
          }
        >
          <AccordionHeader onClick={() => handleOpen(2)}>
            Accordion 2 Header
          </AccordionHeader>
          <AccordionBody>Accordion 2 Body</AccordionBody>
        </Accordion>
      </>
    );
  }
};
