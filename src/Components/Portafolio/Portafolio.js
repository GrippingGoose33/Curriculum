import React from 'react';
import Lista from './Lista';
import {obtDatos} from '../../datos';
import { Link, useParams} from 'react-router-dom';
import  './Portafolio.css';

function Portafolio(props) {
    let datos = obtDatos();

    const {dataid} = useParams();

    const filterNotes = (id) => {
        let selectedNote = false;

        if(id > 0) {
            selectedNote = datos.filter(
                dato => dato.id === Number(id),
            );
        }

        return selectedNote;
    }

    const selectedNote = filterNotes(dataid);

    const renderNotes = (datos) => (
        <ul>
            {
                datos.map((dato, key) => (
                    <li key ={key}>
                        <Lista
                            key={dato.id}
                            title = {dato.title}
                            description = {dato.description}
                            id={dato.id}
                        />
                    </li>
                ))
            }
        </ul>
    )

    return (
        <div className = "Proyecto">
            <h1>Proyectos</h1>
            {renderNotes(datos)}
        </div>
    );
    
}

export default Portafolio;