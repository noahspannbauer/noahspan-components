import { Autocomplete } from '@mui/material';
import { Person } from '@microsoft/microsoft-graph-types';
import { TextField } from '../textField/TextField';

export interface PeoplePickerProps {
  loading: boolean;
  onChange: (event: React.SyntheticEvent, value: string) => void;
  results: Person[];
}

export const PeoplePicker = ({
  loading,
  onChange,
  results
}: PeoplePickerProps) => {
  return (
    <Autocomplete
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
      onInputChange={onChange}
      options={results}
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
    />
  );
};
