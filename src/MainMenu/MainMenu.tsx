/* eslint-disable no-use-before-define */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
import React, { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MainMenu.scss';

type MainMenuConfigMode = 'fixed' | 'floating';

const DEFAULT_CONFIG_MODE: MainMenuConfigMode = 'fixed';
export type MainMenuChildItem = Omit<MainMenuItem, 'children' | 'icon'>;

export type MainMenuItem = {
  label: string;
  icon: ReactElement;
  id?: string;
  path: string;
  children?: MainMenuChildItem[];
  onClick?: () => void;
};

export interface MainMenuProps {
  header?: ReactElement | string;
  footer?: ReactElement | string;
  mode?: MainMenuConfigMode;
  items: MainMenuItem[];
}

function MainMenu({ header, footer, mode, items }: MainMenuProps) {
  const [activeItemId, setActiveItemId] = useState<string | null>();
  const [_expanded, _setExpanded] = useState(false);
  const _mode = mode || DEFAULT_CONFIG_MODE;

  const handleOnSidebarToggleButtonClick = () => {
    _setExpanded(!_expanded);
  };

  const showMenu = (id: string | undefined) => {
    if (!id || id === activeItemId) return;

    setActiveItemId(id);
  };
  const hideMenu = () => {
    setActiveItemId(null);
  };

  const adaptLabelToTestId = (label) =>
    label.replace(' ', '-').toLowerCase().trim();

  function MenuItem({
    id,
    label,
    path,
    children,
    icon,
    onClick,
  }: MainMenuItem) {
    const finalId = !id ? adaptLabelToTestId(label) : id;

    const handleOnItemClick = (callback) => {
      _setExpanded(false);

      callback && callback();
    };

    function ChildMenuItem({
      id,
      path,
      label,
      onClick,
    }: MainMenuChildItem): ReactElement {
      const childfinalId = `${id}-${adaptLabelToTestId(label)}`;

      return (
        <li
          id={childfinalId}
          data-testid={childfinalId}
          key={childfinalId}
          className="menu-item"
          onMouseEnter={() => showMenu(id)}
        >
          <NavLink to={path}>
            <button
              type="button"
              data-testid={`${childfinalId}-button`}
              onClick={() => handleOnItemClick(onClick)}
              className="center"
            >
              {label}
            </button>
          </NavLink>
        </li>
      );
    }

    return (
      <li
        id={finalId}
        key={finalId}
        data-testid={finalId}
        className="menu-item"
        onMouseEnter={() => showMenu(finalId)}
      >
        <NavLink to={path}>
          <button
            type="button"
            data-testid={`${finalId}-button`}
            onClick={() => handleOnItemClick(onClick)}
            className="center"
          >
            {icon && <span className="icon">{icon}</span>}
            {_expanded ? label : ''}
          </button>
        </NavLink>
        {children && finalId === activeItemId && (
          <ul className="sub-menu-list">
            <li
              id={`${finalId}-children-label`}
              data-testid={`${finalId}-children-label`}
              key={`${finalId}-children-label`}
              className="menu-item"
              onMouseEnter={() => showMenu(finalId)}
            >
              {label}
            </li>
            {children.map((child) => (
              <ChildMenuItem
                id={finalId}
                label={child.label}
                onClick={child.onClick}
                path={child.path}
                key={`${finalId}-child-${child.label}`}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <>
      <div
        data-testid="main-menu-parent"
        className={`aside-wrapper main-menu-mode-${_mode}`}
        onMouseLeave={() => {
          if (!activeItemId) {
            return;
          }

          hideMenu();
        }}
      >
        <aside
          id="main-menu"
          data-testid="main-menu"
          className={`main-menu-orientation-vertical main-menu-size-${
            _expanded ? 'expanded' : 'collapsed'
          }`}
        >
          <header>{header}</header>
          <main>
            <ul className="main-menu-list">
              {items.map((item) => (
                <MenuItem key={item.label} {...item} />
              ))}
            </ul>
          </main>
          <footer>
            {footer}
            <button
              data-testid="main-menu-toggle-btn"
              type="button"
              title="Toggle sidebar"
              onClick={handleOnSidebarToggleButtonClick}
              className="toggle-btn"
            >
              {_expanded ? (
                <>
                  <svg
                    className="icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.952 10.752L1.2 6L5.952 1.248L6.798 2.1L3.498 5.4H12V6.6H3.498L6.804 9.9L5.952 10.752ZM1.2 6V0H0V12H1.2V6Z"
                      fill="black"
                    />
                  </svg>
                  Collapse sidebar
                </>
              ) : (
                <svg
                  className="icon"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.048 1.248L10.8 6L6.048 10.752L5.202 9.9L8.502 6.6H0V5.4H8.502L5.202 2.1L6.048 1.248ZM10.8 6V12H12V0H10.8V6Z"
                    fill="black"
                  />
                </svg>
              )}
            </button>
          </footer>
        </aside>
      </div>
      {_mode === 'floating' && _expanded && (
        <span data-testid="blackwindow" className="blackwindow" />
      )}
    </>
  );
}

const menuItemPropTypes = {
  id: PropTypes.string,
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

MainMenu.propTypes = {
  mode: PropTypes.oneOf(['fixed', 'floating']),
  header: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  footer: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ...menuItemPropTypes,
      icon: PropTypes.element.isRequired,
      children: PropTypes.arrayOf(PropTypes.shape({ ...menuItemPropTypes })),
    })
  ),
};

export default MainMenu;
