/* eslint-disable no-restricted-globals */
import React from 'react';

import SearchBar from '../SearchBar';
import '../../styles/header.scss';

function Header() {
  return (
    <header>
      <nav>
        <div className="back-button" onClick={() => history.back()} />
        <SearchBar />
      </nav>
    </header>
  )
}

export default Header
