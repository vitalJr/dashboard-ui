import React, { ReactElement } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MainMenu from '.';
import { MemoryRouter } from 'react-router-dom';
import { MainMenuItem } from './MainMenu';

const icon = <>fake icon</>;
const DEFAULT_ITEMS = [
  {
    id: 'my-opt',
    label: 'Option 1',
    path: '/abc',
    icon,
  },
];

const getItemsWithChildren = (onClick, path: string): MainMenuItem[] => [
  {
    label: 'Option 1',
    onClick,
    icon,
    path: '/',
    children: [
      {
        onClick,
        label: 'Sub-Option 1',
        path,
      },
    ],
  },
];

const _render = (Component: ReactElement) => {
  render(<MemoryRouter>{Component}</MemoryRouter>);
};

describe('MainMenu component', () => {
  const clickOnByTestId = (testId: string) => {
    const el = screen.getByTestId(testId);
    fireEvent.click(el);
  };
  it('should render a default vertical MainMenu', () => {
    _render(<MainMenu items={[]} />);
  });

  it('should render an expansive menu', () => {
    _render(<MainMenu items={[]} mode="fixed" />);
    expect(screen.queryByTestId('main-menu-parent')).toHaveClass(
      'main-menu-mode-fixed'
    );
  });

  it('should render a floating menu', () => {
    _render(<MainMenu items={[]} mode="floating" />);
    clickOnByTestId('main-menu-toggle-btn');
    expect(screen.getByTestId('blackwindow')).toBeTruthy();
  });

  it('should toggle aside menu on click', () => {
    _render(<MainMenu items={[]} mode="fixed" />);
    const mainMenuEl = screen.getByTestId('main-menu');

    expect(mainMenuEl).toHaveClass('main-menu-size-collapsed');
    clickOnByTestId('main-menu-toggle-btn');
    expect(mainMenuEl).toHaveClass('main-menu-size-expanded');
  });

  describe('MainMenu option', () => {
    it('should render an option with an icon', () => {
      _render(<MainMenu items={DEFAULT_ITEMS} />);
      expect(screen.queryByTestId('my-opt')).toBeTruthy();
    });
    it('should render a default option', () => {
      const label = 'Option 1';
      _render(
        <MainMenu items={[{ label, icon, path: '', onClick: jest.fn() }]} />
      );
      expect(screen.queryByText(label)).toBeFalsy();
      clickOnByTestId('main-menu-toggle-btn');
      expect(screen.queryByText(label)).toBeTruthy();
    });

    it('should expand only children sub-options', () => {
      _render(<MainMenu items={DEFAULT_ITEMS} />);
      clickOnByTestId('main-menu-toggle-btn');
      expect(screen.queryByTestId('option-1-child-0')).toBeFalsy();
    });

    it('should render sub-options on mouseEnter event', () => {
      const callback = jest.fn();
      const items = getItemsWithChildren(callback, '/abc');
      _render(<MainMenu items={items} />);
      const el = screen.getByTestId('option-1');
      fireEvent.mouseEnter(el);
      expect(screen.getByTestId('option-1-sub-option-1-button')).toBeTruthy();
    });

    it('should continue rendering sub-options on mouseEnter at one of its children options', () => {
      const callback = jest.fn();
      const items = getItemsWithChildren(callback, '/abc');
      _render(<MainMenu items={items} />);
      const el = screen.getByTestId('option-1');
      fireEvent.mouseEnter(el);
      expect(screen.getByTestId('option-1-sub-option-1-button')).toBeTruthy();
      const elLabel = screen.getByTestId('option-1-children-label');
      fireEvent.mouseEnter(elLabel);
      expect(screen.getByTestId('option-1-sub-option-1-button')).toBeTruthy();
      const elChild = screen.getByTestId('option-1-sub-option-1');
      fireEvent.mouseEnter(elChild);
      expect(screen.getByTestId('option-1-sub-option-1-button')).toBeTruthy();
    });

    it('should stop rendering sub-options on mouseLeave event', () => {
      const callback = jest.fn();
      const items = getItemsWithChildren(callback, '/abc');
      _render(<MainMenu items={items} />);
      const el = screen.getByTestId('option-1');
      fireEvent.mouseEnter(el);
      expect(screen.getByTestId('option-1-sub-option-1-button')).toBeTruthy();
      const elParent = screen.getByTestId('main-menu-parent');
      fireEvent.mouseLeave(elParent);
      expect(screen.queryByTestId('option-1-child-button')).toBeFalsy();
    });

    it('should click on an option', () => {
      const callback = jest.fn();
      const items = getItemsWithChildren(callback, '/abc');
      _render(<MainMenu items={items} />);
      clickOnByTestId('option-1-button');
      expect(callback).toHaveBeenCalled();
    });

    it('should click on an sub-option', () => {
      const callback = jest.fn();
      const items = getItemsWithChildren(callback, '/abc');
      _render(<MainMenu items={items} />);

      const el = screen.getByTestId('option-1-button');
      fireEvent.mouseEnter(el);
      clickOnByTestId('option-1-sub-option-1-button');
      expect(callback).toHaveBeenCalled();
    });

    it('should not collapse if menu is not open', () => {
      _render(<MainMenu items={[]} />);
      const elParent = screen.getByTestId('main-menu-parent');
      fireEvent.mouseLeave(elParent);
      expect(screen.queryByTestId('option-1-child-button')).toBeFalsy();
    });
  });
});
