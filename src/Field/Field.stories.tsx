import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Field, { FieldProps } from './Field';

export default {
  title: 'Components/Field',
  component: Field,
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args: FieldProps) => <Field {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <input type="text" placeholder="Testing field" />,
  title: 'Example title'
}