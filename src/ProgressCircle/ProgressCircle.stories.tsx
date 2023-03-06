import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgressCircle, { ProgressCircleProps } from './ProgressCircle';

export default {
  title: 'Components/ProgressCircle',
  component: ProgressCircle,
} as ComponentMeta<typeof ProgressCircle>;

const Template: ComponentStory<typeof ProgressCircle> = (args: ProgressCircleProps) => <ProgressCircle {...args} />;

export const Default = Template.bind({});
Default.args = {
    percentage: 40,
}