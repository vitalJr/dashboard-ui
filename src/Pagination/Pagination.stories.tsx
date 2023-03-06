import React from 'react';
import { Story, Meta } from '@storybook/react';
import Pagination, { PaginationProps } from './Pagination';
import { actions } from '@storybook/addon-actions';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageSize: 10,
  currentPage: 2,
  totalItems: 100,
  onPageChange: () => {},
};

export const FirstPage = Template.bind({});
FirstPage.args = {
  pageSize: 10,
  currentPage: 1,
  totalItems: 100,
  onPageChange: () => {},
};

export const LastPage = Template.bind({});
LastPage.args = {
  pageSize: 10,
  currentPage: 10,
  totalItems: 100,
  onPageChange: () => {},
};

export const Callback = Template.bind({});
Callback.args = {
  pageSize: 10,
  currentPage: 2,
  totalItems: 100,
  onPageChange: (page: number) => actions(`Page changed to ${page}`),
};
