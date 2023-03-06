import React from 'react';
import { screen, render } from '@testing-library/react';
import ImageUpload, { ImageUploadProps } from './ImageUpload';
import userEvent from '@testing-library/user-event';

describe('ImageUpload', () => {
  const defaultProps: ImageUploadProps = {
    id: 'test',
    name: 'test.png',
    onChange: jest.fn(),
    value: undefined,
    legend: 'Test Legend',
    text: 'Test Text',
    disabled: false,
  };

  it('displays the provided legend', () => {
    render(<ImageUpload {...{ ...defaultProps, text: '' }} />);
    expect(screen.getByText('Test Legend')).toBeInTheDocument();
  });

  it('calls the onChange function when a file is selected', () => {
    render(<ImageUpload {...defaultProps} />);
    const input = screen.getByTestId('imageUpload');
    userEvent.upload(input, new File([], 'test.png'));
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it('throw error when a file is not uploaded successfully', () => {
    render(<ImageUpload {...defaultProps} />);
    const input = screen.getByTestId('imageUpload');
    userEvent.upload(input, []);
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it('displays the name of the selected file', () => {
    const file = new File([], 'test.png');
    render(<ImageUpload {...defaultProps} value={file} />);
    expect(screen.getByText(`File uploaded: ${file.name}`)).toBeInTheDocument();
  });
});
