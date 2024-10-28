import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  SelectChangeEvent as MuiSelectChangeEvent
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { MenuItem, MenuItemProps } from '../menu/Menu';

export type SelectChangeEvent = MuiSelectChangeEvent;

type SelectBaseProps = MuiSelectProps;

export type SelectProps = SelectBaseProps & {
  menuItemProps?: MenuItemProps;
  options: { label: string; value: string }[];
};

export const Select = ({ menuItemProps, options, ...rest }: SelectProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiSelect {...rest}>
        {options.map((option) => {
          return (
            <MenuItem {...menuItemProps} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </MuiSelect>
    </ThemeProvider>
  );
};
