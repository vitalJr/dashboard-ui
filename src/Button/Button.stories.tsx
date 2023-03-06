import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: 'medium',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  buttonType: 'primary',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  buttonType: 'primary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  buttonType: 'primary',
};

export const Full = Template.bind({});
Full.args = {
  size: 'full',
  buttonType: 'primary',
};
