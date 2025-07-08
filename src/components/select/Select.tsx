// import {
//   Select as MuiSelect,
//   SelectProps as MuiSelectProps,
//   SelectChangeEvent as MuiSelectChangeEvent
// } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from '../../theme';
// import { MenuItem, MenuItemProps } from '../menu/Menu';

// export type SelectChangeEvent = MuiSelectChangeEvent;

// type SelectBaseProps = MuiSelectProps;

// export type SelectProps = SelectBaseProps & {
//   menuItemProps?: MenuItemProps;
//   options: { label: string; value: string }[];
// };

// export const Select = ({ menuItemProps, options, ...rest }: SelectProps) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <MuiSelect {...rest}>
//         {options.map((option) => {
//           return (
//             <MenuItem {...menuItemProps} value={option.value}>
//               {option.label}
//             </MenuItem>
//           );
//         })}
//       </MuiSelect>
//     </ThemeProvider>
//   );
// };

import {
  Select as HeroUISelect,
  SelectProps as HeroUISelectProps,
  SelectItem as HeroUISelectItem,
  SelectItemProps as HeroUISelectItemProps,
  HeroUIProvider
} from '@heroui/react';

type SelectItemBaseProps = HeroUISelectItemProps;

export interface SelectItemProps extends SelectItemBaseProps {}

export const SelectItem = ({ ...rest }: SelectItemProps) => {
  return (
    <HeroUIProvider>
      <HeroUISelectItem {...rest} />
    </HeroUIProvider>
  );
};

type SelectBaseProps = HeroUISelectProps;

export interface SelectProps extends SelectBaseProps {
  options: { key: string; label: string }[];
}

export const Select = ({ options, ...rest }: SelectProps) => {
  return (
    <HeroUIProvider>
      <HeroUISelect {...rest}>
        {options.map((option) => (
          <HeroUISelectItem key={option.key}>{option.label}</HeroUISelectItem>
        ))}
      </HeroUISelect>
    </HeroUIProvider>
  );
};
