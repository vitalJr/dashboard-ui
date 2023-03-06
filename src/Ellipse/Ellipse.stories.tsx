import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Ellipse, { EllipseProps } from './Ellipse';

export default {
  title: 'Components/Ellipse',
  component: Ellipse,
} as ComponentMeta<typeof Ellipse>;

const Template: ComponentStory<typeof Ellipse> = (args: EllipseProps) => <Ellipse {...args} />;

export const Mini = Template.bind({});
Mini.args = {
  size: 'mini'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};
