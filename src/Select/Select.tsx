import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import './Select.scss';

export interface SelectProps {
  value: string;
  children?: JSX.Element | string;
  options: string[];
  name?: string;
  onChange?: (value) => void;
  style?: any;
}

/**
 * @type {SelectProps}
 * @returns The button element.
 */
function Select({
  value,
  children,
  options,
  name,
  onChange,
  style,
}: SelectProps) {
  return (
    <div className="select-wrapper">
      {children && <h4>{children}</h4>}
      <div className="select-container">
        <select
          data-testid="select"
          value={value}
          style={style}
          name={name}
          onChange={onChange}
        >
          {options.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
Select.defaultProps = {
  value: '',
  options: [],
  children: '',
  name: '',
  style: {},
  onChange: Function(),
};
Select.propTypes = {
  /* The select initial value. */
  value: PropTypes.string,
  /* The select on change callback function. */
  onChange: PropTypes.func,
  /* The select options. */
  options: PropTypes.arrayOf(PropTypes.string),
  /* The select content. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  name: PropTypes.string,
  /* The select style. */
  style: PropTypes.object,
};
export default Select;
