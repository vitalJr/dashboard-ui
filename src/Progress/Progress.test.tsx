import { render, screen } from '@testing-library/react';
import React from 'react';
import Progress from './Progress';

describe('Progress', () => {
  it('should render a circular progress bar by default', () => {
    render(<Progress current={1} total={4} />);
    expect(screen.queryByTestId('progress-circle')).toBeTruthy();
  });
  it('should render a linear progress bar', () => {
    render(<Progress current={1} total={4} linear />);
    expect(screen.queryByTestId('progress-bar')).toBeTruthy();
  });
});
