import React, { useState, useEffect, ReactElement } from 'react';
import DefaultUserImage from './user.png';

import './HeaderMenu.scss';
import { Link } from 'react-router-dom';

export interface MenuOption {
  label: string;
  id?: string;
  path?: string;
  onClick?: () => void;
}

export interface HeaderMenuProps {
  logo?: ReactElement;
  searchBar?: {
    onSearch: () => void;
  };
  menuOptions?: MenuOption[];
  userProfile?: {
    image?: ReactElement;
    options: MenuOption[];
  };
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  logo,
  searchBar,
  userProfile,
}) => {
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [showMenuOptions, setShowMenuOptions] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    let timeoutId: number;
    if (searchText) {
      timeoutId = setTimeout(() => {
        searchBar.onSearch();
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchText]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const toggleUserOptions = () => {
    setShowUserOptions((prevState) => !prevState);
  };

  const toggleMenuOptions = () => {
    setShowMenuOptions((prevState) => !prevState);
  };

  const userProfileImage = !userProfile?.image
    ? DefaultUserImage
    : userProfile.image;

  return (
    <header className="header">
      <div className="header-logo">{logo}</div>
      <button
        data-testid="header-menu-button"
        className="header-menu-button"
        onClick={toggleMenuOptions}
      >
        {showMenuOptions && (
          <div
            data-testid="header-menu-options"
            className="header-menu-options"
          >
            <div className="header-menu-option">Option 1</div>
            <div className="header-menu-option">Option 2</div>
            <div className="header-menu-option">Option 3</div>
          </div>
        )}
      </button>
      {searchBar && (
        <input
          data-testid="header-search-bar"
          className="header-search-bar"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
        />
      )}
      {userProfile && (
        <div
          data-testid="header-user-profile-logo"
          className="header-user-profile-logo"
          onClick={toggleUserOptions}
        >
          <>
            <div className="header-user-logo-container">{userProfileImage}</div>
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="inherit"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 5L0 0H10L5 5Z" fill="inherit" />
            </svg>
          </>
          {showUserOptions && (
            <div
              data-testid="header-user-options"
              className="header-user-options"
            >
              {userProfile.options.map((option) => {
                const { id, label, path, onClick } = option;
                const finalId = !id
                  ? label.replace(' ', '-').toLowerCase().trim()
                  : id;

                return (
                  <li
                    id={finalId}
                    key={finalId}
                    data-testid={finalId}
                    className="header-user-option"
                  >
                    <Link to={path ? path : ''}>
                      <button
                        data-testid={`${finalId}-button`}
                        onClick={onClick}
                      >
                        {label}
                      </button>
                    </Link>
                  </li>
                );
              })}
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default HeaderMenu;
