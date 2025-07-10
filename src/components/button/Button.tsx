// import {
//   Button as MuiButton,
//   ButtonProps as MuiButtonProps
// } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from '../../theme';

// type ButtonBaseProps = MuiButtonProps;

// export interface ButtonProps extends ButtonBaseProps {
//   loading?: boolean;
// }

// export const Button = ({ loading, ...rest }: ButtonProps) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <MuiButton {...rest} />
//     </ThemeProvider>
//   );
// };

export interface ButtonProps {};

export const Button = () => {
  return (
    <button className='bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
      Get Started
    </button>
  )
}
