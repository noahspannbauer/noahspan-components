import {
  List as MaterialTailwindList,
  ListProps as MaterialTailwindListProps,
  ListItem as MaterialTailwindListItem,
  ListItemProps as MaterialTailwindListItemProps,
  ListItemPrefix as MaterialTailwindListItemPrefix,
  ListItemPrefixProps as MaterialTailwindListItemPrefixProps,
  ListItemSuffix as MaterialTailwindListItemSuffix,
  ListItemSuffixProps as MaterialTailwindListItemSuffixProps
} from '@material-tailwind/react';

type ListItemBaseProps = Pick<
  MaterialTailwindListItemProps,
  'ripple' | 'selected' | 'disabled' | 'className' | 'children'
>;

export interface ListItemProps extends ListItemBaseProps {
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const ListItem = ({ onClick, ...rest }: ListItemProps) => {
  return <MaterialTailwindListItem onClick={onClick} {...rest} />;
};

type ListItemPrefixBaseProps = Pick<
  MaterialTailwindListItemPrefixProps,
  'className' | 'children'
>;

export interface ListItemPrefixProps extends ListItemPrefixBaseProps {}

export const ListItemPrefix = ({ ...rest }: ListItemPrefixProps) => {
  return <MaterialTailwindListItemPrefix {...rest} />;
};

type ListItemSuffixBaseProps = Pick<
  MaterialTailwindListItemSuffixProps,
  'className' | 'children'
>;

export interface ListItemSuffixProps extends ListItemSuffixBaseProps {}

export const ListItemSuffix = ({ ...rest }: ListItemSuffixProps) => {
  return <MaterialTailwindListItemSuffix {...rest} />;
};

type ListBaseProps = Pick<MaterialTailwindListProps, 'className' | 'children'>;

export interface ListProps extends ListBaseProps {}

export const List = ({ ...rest }: ListProps) => {
  return <MaterialTailwindList {...rest} />;
};
