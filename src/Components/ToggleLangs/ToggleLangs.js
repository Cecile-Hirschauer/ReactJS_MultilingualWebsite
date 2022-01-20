import React, {useContext} from 'react';
import FrenchFlag from '../../assets/france.svg';
import SpanishFlag from '../../assets/spain.svg';
import EnglishFlag from '../../assets/united-kingdom.svg';
import { Context } from '../../context/langContext';
import './ToggleLangs.css';

export default function ToggleLangs() {

    const {toggleLang} = useContext(Context);
    // console.log(toggleLang)
        
    return (
        <div className='container-langs'>
            <img onClick={() => toggleLang('FR')} src={FrenchFlag} alt="Drapeau français" />
            <img onClick={() => toggleLang('EN')} src={EnglishFlag} alt="English flag" />
            <img onClick={() => toggleLang('ES')} src={SpanishFlag} alt="Bandera española" />

        </div>
    );
}

