import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export interface ButtonProps {
  /* Is the button disabled? */
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large' | 'full';
  primary?: boolean;
  children?: JSX.Element | string;
  onClick?: () => void;
  style?: any;
  [x: string]: any;
}

/**
 * A customized clickable element for representing a button.
 * @type {ButtonProps}
 */
function Button({
  disabled,
  size,
  primary,
  children,
  onClick,
  style,
  ...props
}: ButtonProps) {
  const type = primary ? 'primary' : 'outlined';
  return (
    <button
      data-testid="button"
      disabled={disabled}
      onClick={onClick}
      type="button"
      style={style}
      className={`button button-${size} button-${type} button-${
        disabled ? 'disabled' : 'abled'
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  disabled: false,
  primary: true,
  onClick: Function(),
  style: {},
};
Button.propTypes = {
  /* Is the button disabled? */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  /* The button predefined size. */
  disabled: PropTypes.bool,
  /* Is a primary button? */
  primary: PropTypes.bool,
  /* The button content. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  /* The button on click callback function. */
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default Button;
