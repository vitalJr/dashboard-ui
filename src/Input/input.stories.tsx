import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input, { InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Full = Template.bind({});
Full.args = {
  size: 'full',
};
