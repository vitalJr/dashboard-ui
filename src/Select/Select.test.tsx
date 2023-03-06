import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select';

describe('Select component', () => {
  it('should render a default select', () => {
    render(<Select>Example select</Select>);
    expect(screen.getByTestId('select')).toBeTruthy();
  });

  it('should render its options', () => {
    const options = ['optionA', 'optionB', 'optionC'];
    render(<Select options={options}>Example select</Select>);

    expect(screen.getByText(options[0])).toBeTruthy();
    expect(screen.getByText(options[1])).toBeTruthy();
    expect(screen.getByText(options[2])).toBeTruthy();
  });

  it('should change correctly', () => {
    const options = ['optionA', 'optionB', 'optionC'];
    const onChangeFn = jest.fn();

    render(
      <Select options={options} onChange={onChangeFn}>
        Example select
      </Select>
    );

    const select = screen.getByTestId('select');
    fireEvent.change(select, { target: { value: options[0] } });

    expect(select).toHaveValue(options[0]);
    expect(onChangeFn).toHaveBeenCalled();
  });
});
