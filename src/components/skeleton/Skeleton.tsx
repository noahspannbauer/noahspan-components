import {
  Skeleton as HeroUISkeleton,
  SkeletonProps as HeroUISkeletonProps,
  HeroUIProvider
} from '@heroui/react';

type SkeletonBaseProps = HeroUISkeletonProps;

export interface SkeletonProps extends SkeletonBaseProps {}

export const Skeleton = ({ ...rest }: SkeletonProps) => {
  return (
    <HeroUIProvider>
      <HeroUISkeleton {...rest} />
    </HeroUIProvider>
  );
};
