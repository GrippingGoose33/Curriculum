import React from 'react';
import { Link } from 'react-router-dom';

function Lista(props) {
    const {title, id, description} = props;

    return (
        <div className='col-3'>
            <div className='card mb-3'>
                <div className='card-body'>
                    <h3 className='card-title'>
                        {title}
                    </h3>
                    <p>{`Description: ${description}`}</p>
                </div>
            </div>
            <Link to={`/portafolio/${id}`}>{title}</Link>
        </div>
    )
}

export default Lista;