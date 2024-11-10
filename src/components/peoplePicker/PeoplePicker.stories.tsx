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
    options: [],
    loading: false,
    value: { userPrincipalName: '', displayName: '' }
  },
  parameters: {
    backgrounds: {
      default: 'light'
    },
    layout: 'padded'
  },
  render: () => {
    const [{ options, value }, updateArgs] = useArgs();

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

      updateArgs({ options: results });
    };

    const handleSelectionChanged = (
      _event: React.SyntheticEvent,
      value: Person,
      _reason: string
    ) => {
      updateArgs({ value: value });
    };

    return (
      <PeoplePicker
        onInputChanged={handleOnChange}
        onSelectionChanged={handleSelectionChanged}
        options={options}
        value={value}
      />
    );
  }
};
