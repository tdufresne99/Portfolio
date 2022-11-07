import {useContext, useState} from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';


const Accueil = () => {

    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Accueil;