import {
  Image as NextUIImage,
  ImageProps as NextUIImageProps,
  NextUIProvider
} from '@nextui-org/react';

export type ImageBaseProps = Pick<NextUIImageProps, 'width' | 'height'>;

export const Logo = ({ ...rest }: ImageBaseProps) => {
  return (
    <NextUIProvider>
      <NextUIImage src='noahspan-logo.png' {...rest} />
    </NextUIProvider>
  );
};
