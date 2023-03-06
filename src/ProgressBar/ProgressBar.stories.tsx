import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgressBar, { ProgressBarProps } from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args: ProgressBarProps) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    percentage: 75
}