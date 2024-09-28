import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Storybook',
    brandUrl: 'https://components.noahspannbauer.com',
    brandImage: '/noahspan-logo.png',
    brandTarget: '_self',
    colorSecondary: '#212121',
    appBg: '#eceff1',
    appBorderRadius: 0,
    textColor: '#000000'
  })
});
