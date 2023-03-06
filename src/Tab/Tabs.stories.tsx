import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs, { TabProps } from './Tabs';

export default {
  title: 'Components/Tab',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args: TabProps) => (
  <Tabs {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      title: 'Test',
      content:
        'Lorem ipsum dolor sit amet. Et tenetur voluptatem id quos delectus et odio blanditiis hic similique deserunt vel eaque saepe? Aut error quos ut minus deserunt aut tenetur itaque qui quidem cupiditate. Est autem facilis in nulla unde qui temporibus nobis?',
    },
    { title: 'Test 1', content: <button type="submit">Component Test</button> },
    { title: 'Test 2', content: 'Content Test 2' },
    { title: 'Test 3', content: 'Content Test 3' },
    { title: 'Test 4', content: 'Content Test 4' },
  ],
};
