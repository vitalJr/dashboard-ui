import React from 'react'
import PropTypes from 'prop-types';
import './ProgressBar.scss';

export interface ProgressBarProps {
  percentage: number;
  color?: string;
  children?: JSX.Element | string;
}
/**
 * 
 * @type {ProgressBarProps}
 * @returns 
 */
function ProgressBar({ percentage, color, children }: ProgressBarProps) {
  return (
    <div className="bar-container">
      <div
        className="filler"
        data-testid="progress-bar"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      />
      {children ? <span data-testid="progress-bar--text">{children}</span> : ''}
    </div>
  );
}
ProgressBar.defaultProps = {
  color: '#1ED4A5',
  children: undefined,
};
ProgressBar.propTypes = {
  /* The progress bar background color. */
  color: PropTypes.string,
  /* The fill percentage. */
  percentage: PropTypes.number.isRequired,
  /* The progress bar content. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default ProgressBar;
