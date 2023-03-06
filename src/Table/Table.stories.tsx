import React, { ReactElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Table from './Table';
import { action } from '@storybook/addon-actions';
import { CAT_COLUMNS, CAT_DATA } from './Table.test';

export interface Person {
  name: string;
  age: number;
  actions: ReactElement;
}

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: CAT_COLUMNS,
  data: CAT_DATA,
};

export const ClickableCells = Template.bind({});
ClickableCells.args = {
  columns: [
    { key: 'name', header: 'Name', align: 'left' },
    { key: 'age', header: 'Age', align: 'center' },
    { key: 'actions', header: 'Actions', align: 'center' },
  ],
  data: [
    {
      name: 'John',
      age: 25,
      actions: <button onClick={action('clicked on John')}>Click</button>,
    },
    {
      name: 'Kate',
      age: 42,
      actions: <button onClick={action('clicked on Kate')}>Click</button>,
    },
  ],
};
