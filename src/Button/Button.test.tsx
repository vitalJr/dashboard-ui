import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('should render a default button', () => {
    render(<Button>Hello World</Button>);
    const button = screen.findByTestId('button');
    expect(button).toBeTruthy();
  });

  it('should render a primary button', () => {
    render(<Button primary>Hello World</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button-primary');
  });
  it('should render a secondary button', () => {
    render(<Button primary={false}>Hello World</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button-outlined');
  });
  it('should render a disabled button', () => {
    render(
      <Button primary disabled>
        Hello World
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button-disabled');
    expect(button).not.toHaveClass('button-abled');
  });

  it('should call onClick when clicked', () => {
    const mockFn = jest.fn();
    render(
      <Button primary onClick={mockFn}>
        Hello World
      </Button>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(mockFn).toHaveBeenCalled();
  });
});
