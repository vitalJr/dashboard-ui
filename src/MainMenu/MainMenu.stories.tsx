import React from 'react';
import { ComponentStory, ComponentMeta, DecoratorFn } from '@storybook/react';

import MainMenu, { MainMenuProps } from './MainMenu';
import { action } from '@storybook/addon-actions';
import { Route, Routes, MemoryRouter } from 'react-router-dom';

const reactRouterDecorator: DecoratorFn = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};

const icon = (
  <svg
    className="icon"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.952 10.752L1.2 6L5.952 1.248L6.798 2.1L3.498 5.4H12V6.6H3.498L6.804 9.9L5.952 10.752ZM1.2 6V0H0V12H1.2V6Z"
      fill="black"
    />
  </svg>
);

export default {
  title: 'Components/MainMenu',
  component: MainMenu,
  decorators: [reactRouterDecorator],
  args: {
    items: [
      {
        icon,
        label: 'Opção 1',
        children: [
          {
            label: 'Sub-Opção 1',
            onClick: action('s1'),
            path: '/abc',
          },
          {
            label: 'Sub-Opção 2',
            onClick: action('s2'),
          },
          {
            label: 'Sub-Opção 3',
            onClick: action('s3'),
          },
        ],
      },
      {
        icon,
        label: 'Opção 2',
        onClick: action('2'),
      },
      {
        icon,
        label: 'Opção 3',
        onClick: action('3'),
      },
    ],
  },
} as ComponentMeta<typeof MainMenu>;

const Template: ComponentStory<typeof MainMenu> = (args: MainMenuProps) => (
  <MainMenu {...args} />
);

export const Default = Template.bind({});

export const Floating = Template.bind({});
Floating.args = {
  mode: 'floating',
};

export const Fixed = Template.bind({});
Fixed.args = {
  mode: 'fixed',
};
