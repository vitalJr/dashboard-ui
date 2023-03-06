import React, { ReactElement } from 'react';
import ProgressBar from '../ProgressBar';
import ProgressCircle from '../ProgressCircle';
import { bool, element, number, oneOfType, string } from 'prop-types';
import './Progress.scss';

export interface ProgressProps {
  current: number,
  total: number,
  size?: number,
  strokeWidth?: number,
  color?: string,
  linear?: boolean,
  children?: string | ReactElement
  fill?: number,
}

/**
 * @param {boolean} circular - If the progress is circular or linear.
 * @param {JSX.Element | string} children - The inner content.
 * @returns The progress element.
 */
function Progress({
  size,
  strokeWidth,
  color,
  linear,
  current,
  total,
  children,
  fill,
}: ProgressProps) {
  const percentage = fill || (current / total) * 100;

  if (linear) {
    return (
      <ProgressBar percentage={percentage} color={color}>
        {children}
      </ProgressBar>
    );
  }

  return (
    <ProgressCircle
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      percentage={percentage}
    >
      {children}
    </ProgressCircle>
  );
}

Progress.defaultProps = {
  size: 64,
  strokeWidth: 6,
  color: '#1ED4A5',
  linear: false,
  children: undefined,
  fill: 0,
};
Progress.propTypes = {
  size: number,
  strokeWidth: number,
  current: number.isRequired,
  total: number.isRequired,
  color: string,
  linear: bool,
  children: oneOfType([string, element]),
  fill: number,
};

export default Progress;
