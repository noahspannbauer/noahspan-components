import type { Meta, StoryObj } from '@storybook/react';
import {
  Navbar
  // NavbarBrand,
  // NavbarItemProps,
  // NavbarLinks,
  // NavbarMenu
} from './Navbar';
// import { Button } from '../button/Button';
// import { IconButton } from '../iconButton/IconButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Nav: Story = {};

// export const New: Story = {
//   args: {
//     size: '100%'
//   },
//   parameters: {
//     backgrounds: {
//       default: 'light'
//     },
//     layout: 'padded'
//   },
//   render: function Render() {
//     const [openNav, setOpenNav] = useState(false);

//     const items: NavbarItemProps[] = [
//       {
//         name: 'Link 1',
//         url: '#'
//       },
//       {
//         name: 'Link 2',
//         url: '#'
//       }
//     ];

//     return (
//       <Navbar>
//         <NavbarBrand>
//           <img height={40} width={40} src='noahspan-logo.png' />
//         </NavbarBrand>
//         <NavbarLinks items={items} />
//         <NavbarMenu>
//           <div className='flex items-center gap-2 hidden lg:inline-block'>
//             <Button variant='text' size='sm'>
//               <span>Sign In</span>
//             </Button>
//           </div>
//           <IconButton
//             variant='text'
//             className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
//             ripple={false}
//             onClick={() => setOpenNav(!openNav)}
//           >
//             <FontAwesomeIcon icon={faBars} size='2x' />
//           </IconButton>
//         </NavbarMenu>
//         {/* <MobileNav open={openNav}>
//                 <div className='container mx-auto'>
//                     <NavbarLinks isMobile={true} items={items} />
//                     <div className='flex items-center gap-x-1'>
//                         <Button fullWidth variant='text' size='sm' className=''>
//                             <span>Sign In</span>
//                         </Button>
//                     </div>
//                 </div>
//             </MobileNav> */}
//       </Navbar>
//     );
//   }
// };
