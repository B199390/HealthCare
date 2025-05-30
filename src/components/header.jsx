import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="flex items-center justify-between h-16 px-6 bg-white">
      <div className="flex items-center gap-3 w-3/5">
        <div className="flex items-center w-full border border-gray-300 rounded-lg px-3 py-2">
          <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-sm w-full"
          />
        </div>
        <FontAwesomeIcon
          icon={faBell}
          className="text-blue-900 cursor-pointer"
          size="lg"
        />
      </div>

      <div className="flex items-center gap-6 w-1/5 justify-end">
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        <div className="bg-blue-900 w-8 h-8 flex justify-center items-center rounded-sm">
          <FontAwesomeIcon icon={faPlus} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
