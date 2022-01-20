import React, {useContext} from 'react';
import FrenchFlag from '../../assets/france.svg';
import SpanishFlag from '../../assets/spain.svg';
import EnglishFlag from '../../assets/united-kingdom.svg';
import './ToggleLangs.css';

function ToggleLangs() {
  return (
    <div className='container-langs'>
        <img src={FrenchFlag} alt="Drapeau français" />
        <img src={EnglishFlag} alt="English flag" />
        <img src={SpanishFlag} alt="Bandera española" />

    </div>
  );
}

export default ToggleLangs;
