import {
  Skeleton as MuiSkeleton,
  SkeletonProps as MuiSkeletonProps
} from '@mui/material';

type SkeletonBaseProps = MuiSkeletonProps;

export interface SkeletonProps extends SkeletonBaseProps {}

export const Skeleton = ({ ...rest }: SkeletonProps) => {
  return <MuiSkeleton {...rest} />;
};
