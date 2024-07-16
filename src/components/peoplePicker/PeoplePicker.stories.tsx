import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { PeoplePicker } from './PeoplePicker';
import { Person } from '@microsoft/microsoft-graph-types';

const meta: Meta<typeof PeoplePicker> = {
  title: 'Components/PeoplePicker',
  component: PeoplePicker
} satisfies Meta<typeof PeoplePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    results: [],
    loading: false
  },
  render: function Render(args) {
    const [{ _results }, updateArgs] = useArgs();
    const people: Person[] = [
      {
        displayName: 'Adam'
      },
      {
        displayName: 'Catherine'
      },
      {
        displayName: 'Nathan'
      },
      {
        displayName: 'Noah'
      },
      {
        displayName: 'Zoey'
      }
    ];

    const handleOnChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ): void => {
      const searchString: string = event.target.value;
      let results: Person[];

      if (event.target.value !== '') {
        results = people.filter((person: Person) => {
          if (person.displayName?.startsWith(searchString)) {
            return person;
          }
        });
      } else {
        results = [];
      }

      updateArgs({ results: results });
    };

    return (
      <PeoplePicker
        inputProps={{
          label: 'Name',
          onChange: handleOnChange
        }}
        {...args}
      />
    );
  }
};
