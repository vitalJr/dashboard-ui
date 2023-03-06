import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  it('should render a default button', () => {
    render(<Input id="input" value="test" type="text" />);
    const input = screen.findByTestId('input');
    expect(input).toBeTruthy();
  });

  it('should render a abled input', () => {
    render(<Input id="input" value="test" type="text" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('input-abled');
  });

  it('should render a disabled input', () => {
    render(<Input id="input" value="test" disabled={true} type="text" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('input-disabled');
  });

  it('should call onChange event', () => {
    const mockFn = jest.fn();
    render(<Input id="input" value="test" onChange={mockFn} type="text" />);
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'good Day' } });
    expect(mockFn).toHaveBeenCalled();
  });
  it('should render a legend', () => {
    const mockFn = jest.fn();
    const legend = 'My legend';
    render(
      <Input
        id="input"
        value="test"
        legend={legend}
        onChange={mockFn}
        type="text"
      />
    );
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'good Day' } });
    expect(mockFn).toHaveBeenCalled();
    expect(screen.findByText(legend)).toBeTruthy();
  });
});
