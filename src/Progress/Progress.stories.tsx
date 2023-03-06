import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Progress, { ProgressProps } from './Progress';

export default {
  title: 'Components/Progress',
  component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args: ProgressProps) => <Progress {...args} />;

export const Default = Template.bind({});
Default.args = {
    current: 1,
    total: 4
}