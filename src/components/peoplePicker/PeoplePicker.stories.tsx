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
    loading: false,
    listItemProps: {
      children: null,
      onClick: (event: React.MouseEvent<HTMLDivElement>) => {
        const divElement: HTMLDivElement = event.target as HTMLDivElement;

        console.log(divElement.id);
      }
    }
  },
  render: function Render(args) {
    const [{ _results }, updateArgs] = useArgs();
    const people: Person[] = [
      {
        userPrincipalName: 'adam@someplace.com',
        displayName: 'Adam'
      },
      {
        userPrincipalName: 'catherine@someplace.com',
        displayName: 'Catherine'
      },
      {
        userPrincipalName: 'nathan@someplace.com',
        displayName: 'Nathan'
      },
      {
        userPrincipalName: 'noah@someplace.com',
        displayName: 'Noah'
      },
      {
        userPrincipalName: 'zoey@someplace.com',
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
