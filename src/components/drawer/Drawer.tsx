import { ReactElement } from 'react';
import { Button, NextUIProvider } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export interface DrawerProps {
  isOpen: boolean;
  headerText: string;
  onClose?: () => void;
  size:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full';
  children?: ReactElement;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  headerText,
  onClose,
  size,
  children
}) => {
  return (
    <NextUIProvider>
      <div
        className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ${isOpen ? `transition-opacity opacity-100 duration-500 translate-x-0` : `transition-all delay-500 opacity-0 translate-x-full`}`}
      >
        <div
          className={`p-10 w-screen max-w-${size} right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform ${isOpen ? `translate-x-0` : `translate-x-full`}`}
        >
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <h2 className='text-2xl font-bold leading-7 text-gray-900'>
                {headerText}
              </h2>
            </div>
            <div className='justify-self-end self-center'>
              <Button
                isIconOnly
                color='default'
                variant='light'
                onClick={onClose}
              >
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </div>
          </div>
          <div>{children}</div>
        </div>
        <div className='w-screen h-full' onClick={onClose} />
      </div>
    </NextUIProvider>
  );
};
