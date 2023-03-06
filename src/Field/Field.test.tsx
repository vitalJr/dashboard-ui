import React from 'react';
import { render } from '@testing-library/react';
import Field from './Field';

describe('Field component', () => {
  it('should render a default Field', () => {
    render(<Field title='Example field'>Its content</Field>)
  })
});
