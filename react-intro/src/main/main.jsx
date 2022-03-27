import React from 'react';
import './main.scss';
import PropTypes from 'prop-types';

function Main({handleToggle}) {
  return (
    <main className="main">
      {handleToggle? 
      <h2 className="main-title">Bien tu a cliquer</h2>
      :
      <h2 className="main-title">Presentation</h2>
      }
      <article className="main-article">
        Bien le bonjour a toi qui passe par la!
        <button className="main-article-button">
          Va y Clic ont est bien
        </button>
        <button className="main-button">Chat</button>
        <button className="main-button">Chien</button>
      </article>
    </main>
  );
}

Main.propTypes = {};

export default Main;
