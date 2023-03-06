/* eslint-disable react/prop-types */
import React from 'react';

import { render, screen } from '@testing-library/react';
import ProgressCircle from './ProgressCircle';

describe('ProgressCircle works', () => {
  const size = 64;
  const strokeWidth = 6;
  const initialPercentage = 25;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const initialDash = (initialPercentage * circumference) / 100;

  it('renders correct style', () => {
    render(
      <ProgressCircle percentage={25} color="green">
        {' '}
      </ProgressCircle>
    );
    expect(
      screen.getByTestId('progress-circle').getAttribute('stroke-dasharray')
    ).toBe([initialDash, circumference - initialDash].join(' '));
    expect(screen.getByTestId('progress-circle').getAttribute('stroke')).toBe(
      'green'
    );
  });
  it('updates when percentage changes', () => {
    function Wrapper({ percentage }) {
      return (
        <ProgressCircle percentage={percentage} color="green">
          {' '}
        </ProgressCircle>
      );
    }
    const { rerender } = render(<Wrapper percentage={25} />);
    expect(
      screen.getByTestId('progress-circle').getAttribute('stroke-dasharray')
    ).toBe([initialDash, circumference - initialDash].join(' '));

    const updatedPercentage = 50;
    const updatedDash = (updatedPercentage * circumference) / 100;

    rerender(<Wrapper percentage={50} />);
    expect(
      screen.getByTestId('progress-circle').getAttribute('stroke-dasharray')
    ).toBe([updatedDash, circumference - updatedDash].join(' '));
  });
});
