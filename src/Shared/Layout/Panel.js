import React from 'react';
import PropTypes from 'prop-types';
//import logo from '../Images/logo.svg';
import { Link } from "react-router-dom";

const Panel = (props) => {

    const {title, url} = props;

        return (
            <header className="App-header">
            <div className="App-header-logo">
                <a href={props.url}>
                <img src="http://assets.stickpng.com/thumbs/58718a527b7f6103e35c6ce5.png" className="App-logo" alt="logo" />
                </a>
                <h1>{props.title}</h1>
            </div>

            <ul>
                <li><Link to={`/`} className="App-link">Curriculum</Link></li>
                <li><Link to={`/portafolio`} className="App-link">Portafolio</Link></li>
                <li><Link to={`/contacto`} className="App-link">Contacto</Link></li>
            </ul>

          </header>
        );
    
}

Panel.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Panel;