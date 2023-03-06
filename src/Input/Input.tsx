import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

export interface InputProps {
  /* Is the input disabled? */
  disabled?: boolean;
  id: string;
  size?: 'small' | 'medium' | 'large' | 'full';
  type:
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'radio'
    | 'date'
    | 'checkbox';
  /* Is the input required? */
  required?: boolean;
  label?: string;
  legend?: string;
  placeholder?: string;
  autoFocus?: boolean;
  name?: string;
  onChange?: () => void;
  value: string;
  [x: string]: any;
}

/**
 * A customized clickable element for representing a input.
 * @type {InputProps}
 */
const Input = ({
  disabled,
  size,
  id,
  label,
  legend,
  autoFocus,
  placeholder,
  required,
  type,
  value,
  name,
  onChange,
  ...props
}: InputProps) => {
  return (
    <React.Fragment>
      {legend && <legend>{legend}</legend>}
      <input
        data-testid="input"
        id={id}
        disabled={disabled}
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={`input input-${size} input-${
          disabled ? 'disabled' : 'abled'
        } input-${type}`}
        {...props}
      />
    </React.Fragment>
  );
};

Input.defaultProps = {
  disabled: false,
  size: 'medium',
  id: 'teste',
  autoFocus: false,
  placeholder: '',
  label: '',
  legend: '',
  required: false,
  type: 'text',
  value: '',
  name: '',
  onChange: Function(),
};
Input.propTypes = {
  /* Is the input disabled? */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  /* The input predefined size. */
  disabled: PropTypes.bool,
  /* Is the input type */
  type: PropTypes.oneOf([
    'text',
    'email',
    'number',
    'password',
    'radio',
    'date',
    'checkbox',
  ]),
  /* Is the input required? */
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  legend: PropTypes.string,
  name: PropTypes.string,
  /* Is a primary button? */
  /* The button on click callback function. */
  onChange: PropTypes.func,
};

export default Input;
