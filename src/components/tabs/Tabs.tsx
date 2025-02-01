import {
  Tabs as MuiTabs,
  TabsProps as MuiTabsProps,
  Tab as MuiTab,
  TabProps as MuiTabProps
} from '@mui/material';

type TabBaseProps = MuiTabProps;

export interface TabProps extends TabBaseProps {}

export const Tab = ({ ...rest }: TabProps) => {
  return <MuiTab {...rest} />;
};

type TabsBaseProps = MuiTabsProps;

export interface TabsProps extends TabsBaseProps {}

export const Tabs = ({ ...rest }: TabsProps) => {
  return <MuiTabs {...rest} />;
};
