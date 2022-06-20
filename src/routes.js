import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './Components/App';
import Contacto from './Components/Contacto/Contacto';
import Curriculum from './Components/Curriculum/Curriculum';
import Portafolio from './Components/Portafolio/Portafolio';
import Pomodoro from './Components/Pomodoro/Timer';
import Calculadora from './Components/Calculadora/Calculadora';
import Error404 from './Components/Error/404';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path= "/" element={<Curriculum/>} />
            <Route path= "/portafolio" element={<Portafolio/>} />
            <Route path= "/contacto" element={<Contacto/>} />
            <Route path= "/portafolio/1" element={<Pomodoro/>} />
            <Route path= "/portafolio/2" element={<Calculadora/>} />
            <Route path= "*" element={<Error404/>} />
        </Routes>
    </App>
)

export default AppRoutes;