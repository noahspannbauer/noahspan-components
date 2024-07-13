import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { PeoplePicker, Person } from './PeoplePicker';

const meta: Meta<typeof PeoplePicker> = {
  title: 'Components/PeoplePicker',
  component: PeoplePicker
} satisfies Meta<typeof PeoplePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    results: []
  },
  render: function Render(args) {
    const [{ _results }, updateArgs] = useArgs();
    const people: Person[] = [
      {
        displayName: 'Noah Spannbauer'
      }
    ];

    const handleOnChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ): void => {
      const searchString: string = event.target.value;
      const results: Person[] = people.filter((person: Person) => {
        if (person.displayName.startsWith(searchString)) {
          return person;
        }
      });

      updateArgs({ results: results });
    };

    return (
      <PeoplePicker
        inputProps={{
          onChange: handleOnChange
        }}
        {...args}
      />
    );
  }
};
