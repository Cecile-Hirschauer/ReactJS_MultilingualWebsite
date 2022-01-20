import React, {useContext} from 'react';
import './Contenu.css';
import data from '../../assets/data.js';

function Contenu() {
  return (
  <div>
      <div className="content">
          <h1 className="title">{data['FR'].title}</h1>
          <p className="content-txt">{data['FR'].txt}</p>
      </div>
  </div>
  );
}

export default Contenu;
