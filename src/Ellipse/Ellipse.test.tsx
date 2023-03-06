import React from 'react';
import { render, screen } from '@testing-library/react';
import Ellipse from './Ellipse';

describe('Ellipse component', () => {
  it('should render a mini one', () => {
    render(<Ellipse size={'mini'} />)
    const ellipse = screen.getByTestId('ellipse');
    expect(ellipse).toHaveClass('ellipse-mini');
  }),
  it('should render a small one', () => {
    render(<Ellipse size={'small'} />)
    const ellipse = screen.getByTestId('ellipse');
    expect(ellipse).toHaveClass('ellipse-small');
  }),
   it('should render a medium one', () => {
    render(<Ellipse size={'medium'} />)
    const ellipse = screen.getByTestId('ellipse');
    expect(ellipse).toHaveClass('ellipse-medium');
  }),
  it('should render a large one', () => {
    render(<Ellipse size={'large'} />)
    const ellipse = screen.getByTestId('ellipse');
    expect(ellipse).toHaveClass('ellipse-large');
  })
});
