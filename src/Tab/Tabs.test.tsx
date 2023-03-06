import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tabs from './Tabs';

const tabs = [
  { title: 'Test 2', content: 'Content Test 2' },
  {
    title: 'Test 1',
    content: (
      <button type="submit" data-testid={`button-test`}>
        Component Test
      </button>
    ),
  },
];

describe('Tab component', () => {
  it('should render a default Tabs', () => {
    render(<Tabs tabs={tabs} />);
    const tab = screen.findByTestId('div.tabs');
    expect(tab).toBeTruthy();
  });

  it('should render component in tab component', () => {
    render(<Tabs tabs={tabs} />);

    fireEvent.click(screen.getByTestId('tab1'));

    const button = screen.findByTestId('button-test');
    expect(button).toBeTruthy();
  });
});
