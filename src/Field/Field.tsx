import React from 'react'
import PropTypes from 'prop-types';

import './Field.scss';

export interface FieldProps {
  title: string;
  children?: JSX.Element | string;
}

/**
 * @type {FieldProps}
 * @returns A customized clickable element for representing a button.
 */
function Field({ title, children }: FieldProps) {
  return (
    <fieldset data-testid="field">
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
}
Field.defaultProps = {
  children: '',
}
Field.propTypes = {
  /* The field content. */
  title: PropTypes.string.isRequired,
  /* The field content. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Field;
