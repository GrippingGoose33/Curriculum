import React, {useEffect, useState} from 'react';
import Lista from './Lista';
import  './Portafolio.css';

function Portafolio(props) {
    const [character, setCharacter] = useState([]);

    return (
        <div>
            <h2>Proyectos</h2>
            <div>
                {
                    character.map((character) => (
                        <Lista
                            key={character.id}
                            name={character.name}
                            image={character.image}
                            origin={character.origin}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Portafolio;