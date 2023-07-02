import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PlayList from "../pages/PlayList"
import PlayListDetails from "../pages/PlayListDetails"
import About from '../pages/About';
import Error from '../pages/Error';

const Routers = () => {
    return (

        <Routes>
            <Route path='/' element={<Navigate to="/home"/>}/>
            <Route path='home' element={<Home />} />
            <Route path='playlist' element={<PlayList />} />
            <Route path='playlistdetails/:id' element={<PlayListDetails />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<Error />} />

        </Routes>

    );
};

export default Routers
