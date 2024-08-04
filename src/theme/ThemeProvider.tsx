import { ThemeProvider as MaterialTailewindThemeProvider } from '@material-tailwind/react';

/* eslint-disable */
export const ThemeProvider = ({
  value,
  children
}: {
  value?: any;
  children: any;
}) => {
  return (
    <MaterialTailewindThemeProvider value={value}>
      {children}
    </MaterialTailewindThemeProvider>
  );
};
/* eslint-enable */
