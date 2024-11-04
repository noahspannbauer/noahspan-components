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

export const Outlined: Story = {
  args: {
    results: [],
    loading: false
    // listItemProps: {
    //   children: null,
    //   onClick: (event: React.MouseEvent<HTMLDivElement>) => {
    //     const divElement: HTMLDivElement = event.target as HTMLDivElement;

    //     console.log(divElement.id);
    //   }
    // }
  },
  parameters: {
    backgrounds: {
      default: 'light'
    },
    layout: 'padded'
  },
  render: function Render(args) {
    const [{ _results }, updateArgs] = useArgs();

    const handleOnChange = (
      _event: React.SyntheticEvent,
      value: string
    ): void => {
      const searchString: string = value.toLowerCase();
      let results: Person[];

      if (value !== '') {
        results = people.filter((person: Person) => {
          if (person.displayName?.toLowerCase().startsWith(searchString)) {
            return person;
          }
        });
      } else {
        results = [];
      }

      updateArgs({ results: results });
    };

    return <PeoplePicker {...args} onChange={handleOnChange} />;
  }
};
