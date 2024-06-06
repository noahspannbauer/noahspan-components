import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps
} from '@nextui-org/react';
import './styles.css';

type ModalBaseProps = Omit<
  ModalProps,
  'className' | 'fullScreen' | 'closeButton' | 'animated' | 'blur'
>;

export const DrawerContent = ModalContent;
export const DrawerHeader = ModalHeader;
export const DrawerBody = ModalBody;
export const DrawerFooter = ModalFooter;

export const Drawer = ({ children, ...rest }: ModalBaseProps) => {
  const { isOpen } = rest;

  return (
    <Modal
      classNames={{
        wrapper: 'w-full'
      }}
      className={`drawer drawer-animated ${isOpen ? 'drawer-animated-slide-in' : 'drawer-animated-slide-out'}`}
      animated={false}
      placement='top'
      size='full'
      {...rest}
    >
      {children}
    </Modal>
  );
};
