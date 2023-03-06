import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select, { SelectProps } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    onChange: {
      action: 'changed'
    }
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: SelectProps) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Example field',
  options: ['Option A', 'Option B', 'Option C'],
  value: 'Option B',
}