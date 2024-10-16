import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionDetails, AccordionSummary } from './Accordion';
import { useArgs } from '@storybook/preview-api';
import { ChevronDownIcon } from '../icons/chevronDown/ChevronDownIcon';
import { Typography } from '../typography/Typography';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    expanded: false
  },
  parameters: {
    layout: 'padded'
  },
  render: function Render() {
    const [{ expanded }, updateArgs] = useArgs();

    const handleChange = (
      _event: React.SyntheticEvent,
      expanded: boolean,
      panel: string
    ) => {
      updateArgs({ expanded: expanded ? panel : false });
    };

    return (
      <>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={(event, expanded) =>
            handleChange(event, expanded, 'panel1')
          }
        >
          <AccordionSummary expandIcon={<ChevronDownIcon />}>
            Accordion 1 Header
          </AccordionSummary>
          <AccordionDetails>Accordion 1 Body</AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={(event, expanded) =>
            handleChange(event, expanded, 'panel2')
          }
        >
          <AccordionSummary expandIcon={<ChevronDownIcon />}>
            <Typography>Accordion 2 Header</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Accordion 2 Body</Typography>
          </AccordionDetails>
        </Accordion>
      </>
    );
  }
};
