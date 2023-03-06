import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ImageUpload.scss';

export interface ImageUploadProps {
  disabled?: boolean;
  value?: File;
  onChange?: (file?: File) => void;
  name?: string;
  legend?: string;
  id?: string;
  text?: string;
}

/**
 * A customized clickable element for representing a input.
 * @type {ImageUploadProps}
 */
const ImageUpload = ({
  id,
  name,
  onChange,
  value,
  legend,
  text,
  disabled,
  ...props
}: ImageUploadProps) => {
  const [file, setFile] = useState<File>(value);

  const handleOnFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  useEffect(() => {
    onChange(file);
  }, [file]);

  return (
    <React.Fragment>
      {legend && <legend>{legend}</legend>}
      <div className={`imageUpload`} id="container-imageUpload">
        <span>
          {text ? text : 'Drag and drop your image or click in the area'}
        </span>
        <input
          type="file"
          data-testid="imageUpload"
          id={id}
          name={name}
          value={undefined}
          onChange={handleOnFileChange}
          accept="image/*"
          className={`fileUpload`}
          disabled={disabled}
          {...props}
        />
        <span>File uploaded: {file?.name}</span>
      </div>
    </React.Fragment>
  );
};

ImageUpload.defaultProps = {
  disabled: false,
  value: '',
  name: 'image',
  legend: '',
  text: '',
  id: '',
};

ImageUpload.propTypes = {
  value: PropTypes.object,
  text: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  legend: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default ImageUpload;
