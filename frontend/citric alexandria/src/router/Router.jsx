import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Offers from '../pages/Offers';
import Souvenirs from '../pages/Souvenirs';
import Contact from '../pages/Contact';
import Shop from '../pages/Shop';
import Shooping from '../pages/Shooping';
import GamePage from '../pages/GamePage';
import GameForm from '../pages/GameAdd';
import UserPage from '../pages/UserPage';


function RouterMain() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/souvenirs' element={<Souvenirs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shopping' element={<Shooping/>} />
            <Route path='/gameadd' element={<GameForm/>}/>
            <Route path="userpage" element={<UserPage/>}/>
            <Route path='/shop/:gameid' element={<GamePage/>}>
            
            </Route>
        </Routes>
    );
}

export default RouterMain;
