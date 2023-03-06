import React, { ReactElement } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import HeaderMenu from './HeaderMenu';
import { MemoryRouter } from 'react-router-dom';
import DefaultUserImage from './user.png';

jest.useFakeTimers();

const _render = (Component: ReactElement) => {
  render(<MemoryRouter>{Component}</MemoryRouter>);
};

describe('MainMenu component', () => {
  it('should render a default HeaderMenu', () => {
    _render(<HeaderMenu />);
  });

  it('should render a search bar', () => {
    const callback = jest.fn();
    _render(<HeaderMenu searchBar={{ onSearch: callback }} />);
    expect(screen.getByTestId('header-search-bar')).toBeTruthy();

    const input = screen.getByTestId('header-search-bar');
    const value = '123';
    fireEvent.change(input, { target: { value } });
    expect(screen.getByDisplayValue(value)).toBeTruthy();

    jest.advanceTimersByTime(3001);

    expect(callback).toHaveBeenCalled();
  });

  it('should render user options', () => {
    _render(
      <HeaderMenu
        menuOptions={[
          {
            label: 'Option 1',
          },
        ]}
      />
    );
  });

  it('should toggle user options', () => {
    _render(<HeaderMenu userProfile={{ image: <></>, options: [] }} />);
    fireEvent.click(screen.getByTestId('header-user-profile-logo'));
    expect(screen.getByTestId('header-user-options')).toBeTruthy();
  });

  it('should toggle menu options', () => {
    _render(<HeaderMenu userProfile={{ image: <></>, options: [] }} />);
    fireEvent.click(screen.getByTestId('header-menu-button'));
    expect(screen.getByTestId('header-menu-options')).toBeTruthy();
  });

  it('should render user options', () => {
    _render(
      <HeaderMenu
        userProfile={{
          image: <></>,
          options: [
            { id: 'abc', path: '/abc', label: 'Option 1' },
            { path: '', label: 'Option 2' },
          ],
        }}
      />
    );
    fireEvent.click(screen.getByTestId('header-user-profile-logo'));
    expect(screen.getByTestId('header-user-options')).toBeTruthy();
    expect(screen.getByTestId('abc-button')).toBeTruthy();
    expect(screen.getByTestId('option-2-button')).toBeTruthy();
  });
});
