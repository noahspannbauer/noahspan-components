// import {
//   Skeleton as MuiSkeleton,
//   SkeletonProps as MuiSkeletonProps
// } from '@mui/material';

// type SkeletonBaseProps = MuiSkeletonProps;

// export interface SkeletonProps extends SkeletonBaseProps {}

// export const Skeleton = ({ ...rest }: SkeletonProps) => {
//   return <MuiSkeleton {...rest} />;
// };

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
