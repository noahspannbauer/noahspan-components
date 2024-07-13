import { Card } from '../card/Card';
import { Input, InputProps } from '../input/Input';
import { List, ListProps, ListItem, ListItemProps } from '../list/List';

export type Person = {
  displayName: string;
};

export interface PeoplePickerProps {
  results: Person[];
  inputProps?: InputProps;
  listProps?: ListProps;
  listItemProps?: ListItemProps;
}

export const PeoplePicker = ({
  results,
  inputProps,
  listProps,
  listItemProps,
  ...rest
}: PeoplePickerProps) => {
  return (
    <div {...rest}>
      <Input {...inputProps} />
      {results.length > 0 && (
        <Card>
          <List {...listProps}>
            {results.map((person: Person) => {
              return (
                <ListItem {...listItemProps}>{person.displayName}</ListItem>
              );
            })}
          </List>
        </Card>
      )}
    </div>
  );
};
