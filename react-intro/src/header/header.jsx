import React from 'react';
import './header.scss';
import PropTypes from 'prop-types';

function Header({handleToggle}) {
  return (
      
      <header className='header'>
        {handleToggle?

        <h1 className='header-title'>Coucou Moi</h1>
        :
        <div className='header-title-section'>T'es beau toi!</div>
      }
        
      </header>
  );
};

Header.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default React.memo(Header);
