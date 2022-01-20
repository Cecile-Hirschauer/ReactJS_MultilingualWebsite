import React, { useContext } from "react";
import { Context } from "../../context/langContext";
import "./Contenu.css";
import data from "../../assets/data.js";

function Contenu() {

    const {lang} = useContext(Context);
    // console.log(lang);
    return (
        <div>
        <div className="content">
            <h1 className="title">{data[lang].title}</h1>
            <p className="content-txt">{data[lang].txt}</p>
        </div>
        </div>
    );
}

export default Contenu;
