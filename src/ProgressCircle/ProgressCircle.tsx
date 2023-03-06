import React from 'react'
import PropTypes from 'prop-types';

import './ProgressCircle.scss';

export interface ProgressCircleProps {
  /* a number */
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  children?: JSX.Element | string;
}
/**
 * 
 * @type {ProgressCircleProps}
 * @returns The circular progress bar component.
 */
function ProgressCircle({ size, color, strokeWidth, percentage, children }: ProgressCircleProps) {
  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (percentage * circumference) / 100;

  return (
    <svg width={size} height={size} viewBox={viewBox}>
      <circle
        fill="white"
        stroke="#D9D9D9"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        data-testid="progress-circle"
        fill="none"
        stroke={color}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={`${dash} ${circumference - dash}`}
        strokeLinecap="round"
        style={{ transition: 'all 0.5s' }}
      />
      <text
        fill="black"
        fontSize="14px"
        fontWeight={700}
        x="50%"
        y="25%"
        dy="20px"
        textAnchor="middle"
      >
        {children}
      </text>
    </svg>
  );
}
ProgressCircle.defaultProps = {
  size: 64,
  strokeWidth: 6,
  color: '#1ED4A5',
};
ProgressCircle.propTypes = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default ProgressCircle;
