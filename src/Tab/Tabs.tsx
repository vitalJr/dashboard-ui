import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

export interface TabProps {
  tabs: Array<{
    title: string;
    content: JSX.Element | string;
  }>;
}

/**
 * A customized element for representing a table.
 * @type {TabProps}
 */
const Tabs = ({ tabs }: TabProps) => {
  const [tabChecked, setTabChecked] = useState(0);

  const handleClickTab = (tap: number) => {
    setTabChecked(tap);
  };

  return (
    <div className="tabs">
      {(tabs && tabs.length) > 0 &&
        tabs.map((item, index) => (
          <input
            type="radio"
            key={index}
            value={index}
            name="tab-control"
            readOnly
            checked={tabChecked === index}
          />
        ))}

      <ul>
        {(tabs && tabs.length) > 0 &&
          tabs.map((item, index) => (
            <li
              title="Features"
              key={`tab-${index}`}
              data-testid={`tab${index}`}
              onClick={() => handleClickTab(index)}
            >
              <label htmlFor={`tab${index}`} role="button">
                <span>{item.title}</span>
              </label>
            </li>
          ))}
      </ul>

      <div className="line-2"></div>

      <div className="content">
        {typeof tabs[tabChecked].content === 'string' ? (
          <p>{tabs[tabChecked].content}</p>
        ) : (
          tabs[tabChecked].content
        )}
      </div>
    </div>
  );
};

Tabs.defaultProps = {
  tabs: [],
};
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ),
};

export default Tabs;
