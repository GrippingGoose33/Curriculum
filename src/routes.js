import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './Components/App';
import Contacto from './Components/Contacto/Contacto';
import Curriculum from './Components/Curriculum/Curriculum';
import Portafolio from './Components/Portafolio/Portafolio';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path= "/" element={<Curriculum/>} />
            <Route path= "/portafolio" element={<Portafolio/>} />
            <Route path= "/contacto" element={<Contacto/>} />
        </Routes>
    </App>
)

export default AppRoutes;