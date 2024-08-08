import { Card } from '../card/Card';
import { Input, InputProps } from '../input/Input';
import { List, ListProps, ListItem, ListItemProps } from '../list/List';
import { Spinner } from '../spinner/Spinner';
import { Person } from '@microsoft/microsoft-graph-types';

export interface PeoplePickerProps {
  results: Person[];
  inputProps?: InputProps;
  listProps?: ListProps;
  listItemProps?: ListItemProps;
  loading: boolean;
}

export const PeoplePicker = ({
  results,
  inputProps,
  listProps,
  listItemProps,
  loading,
  ...rest
}: PeoplePickerProps) => {
  return (
    <div {...rest}>
      <Input {...inputProps} />
      {results.length > 0 && (
        <Card>
          <List {...listProps}>
            {!loading &&
              results.map((person: Person) => {
                return (
                  <ListItem
                    id={person.userPrincipalName!}
                    key={person.userPrincipalName}
                    {...listItemProps}
                  >
                    {person.displayName}
                  </ListItem>
                );
              })}
            {loading && (
              <ListItem {...listItemProps}>
                <div className='grid justify-items-center'>
                  <Spinner size='sm' />
                </div>
              </ListItem>
            )}
          </List>
        </Card>
      )}
    </div>
  );
};
