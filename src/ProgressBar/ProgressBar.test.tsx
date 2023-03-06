import React from 'react';
/* eslint-disable react/prop-types */
import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('ProgressBar works', () => {
  it('should render correct style', () => {
    render(<ProgressBar percentage={25} color="green" />);
    const el = screen.getByTestId('progress-bar')
    expect(el.style.width).toBe('25%');
    expect(el.style.backgroundColor).toBe('green');
  });
  it('should update when percentage changes', () => {
    function Wrapper({ percentage }) {
      return <ProgressBar percentage={percentage} color="green" />;
    }
    const { rerender } = render(<Wrapper percentage={25} />);
    expect(screen.getByTestId('progress-bar').style.width).toBe('25%');

    rerender(<Wrapper percentage={50} />);
    expect(screen.getByTestId('progress-bar').style.width).toBe('50%');
  });
  it('should render with a label', () => {
    const label = "My label"
    render(<ProgressBar percentage={25} color="green">{label}</ProgressBar>);
    expect(screen.getByTestId('progress-bar--text')).toBeTruthy()
    expect(screen.getByTestId('progress-bar--text').textContent).toBe(label)
  });
  it('should render without a label', () => {
    render(<ProgressBar percentage={25} color="green"></ProgressBar>);
    expect(screen.queryByTestId('progress-bar--text')).toBeFalsy()
  });
});
