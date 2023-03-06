import React from 'react'
import PropTypes from 'prop-types';

import './Ellipse.scss';

export interface EllipseProps {
  size: 'mini' | 'small' | 'medium' | 'large';
  [x: string]: any;
}
/**
 * 
 * @type {EllipseProps}
 * @returns An element that represents a circle. 
 */
function Ellipse({ size, ...props }: EllipseProps) {
  return <span data-testid="ellipse" className={`ellipse ellipse-${size}`} {...props} />;
}

Ellipse.propTypes = {
  /** The component size. */
  size: PropTypes.oneOf(['mini', 'small', 'medium', 'large']).isRequired,
};

export default Ellipse;
