import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeaderMenu, { HeaderMenuProps } from './HeaderMenu';

export default {
  title: 'Components/HeaderMenu',
  component: HeaderMenu,
} as ComponentMeta<typeof HeaderMenu>;

const Template: ComponentStory<typeof HeaderMenu> = (args: HeaderMenuProps) => (
  <HeaderMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  logo: 'My logo',
  searchBar: false,
};
