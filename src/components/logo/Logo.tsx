import {
  Image as NextUIImage,
  ImageProps as NextUIImageProps
} from '@nextui-org/react';
import logo from '../../../public/noahspan-logo.png';

export type ImageBaseProps = Pick<
  NextUIImageProps,
  'className' | 'width' | 'height'
>;

export const Logo = ({ ...rest }: ImageBaseProps) => {
  return <NextUIImage src={logo} {...rest} />;
};
