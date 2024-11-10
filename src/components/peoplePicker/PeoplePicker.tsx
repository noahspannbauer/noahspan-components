import { Autocomplete } from '@mui/material';
import { Person } from '@microsoft/microsoft-graph-types';
import { TextField } from '../textField/TextField';

export interface PeoplePickerProps {
  disabled?: boolean;
  loading?: boolean;
  onInputChanged: (event: React.SyntheticEvent, value: string) => void;
  onSelectionChanged: (
    event: React.SyntheticEvent,
    value: Person,
    reason: string
  ) => void;
  options: Person[];
  value: Person;
}

export const PeoplePicker = ({
  disabled,
  loading,
  onInputChanged,
  onSelectionChanged,
  options,
  value
}: PeoplePickerProps) => {
  return (
    <Autocomplete
      disabled={disabled}
      disableClearable
      filterOptions={(x) => x}
      freeSolo
      getOptionLabel={(option) => {
        const person: Person = option as Person;

        return person.displayName!;
      }}
      isOptionEqualToValue={(option, value) =>
        option.userPrincipalName === value.userPrincipalName
      }
      loading={loading}
      onChange={(event, value, reason) =>
        onSelectionChanged(event, value as Person, reason as string)
      }
      onInputChange={onInputChanged}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          slotProps={{
            input: {
              ...params.InputProps,
              type: 'search'
            }
          }}
        />
      )}
      value={value}
    />
  );
};
