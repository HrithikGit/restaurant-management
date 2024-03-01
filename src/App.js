import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar';
import  Dashboard  from './components/Dashboard';
import Orders from './components/Orders';
import MenuCategories from './components/MenuCategories';

function App(){
    return (
        <div className="App">
            <div style={{ width : "12%"}}>
                <Sidebar/>
            </div>
            <div style={{ width : "88%"}}>
                <Routes>
                    <Route path="/" element={<Dashboard />}></Route>
                    <Route path="/categories" element={<MenuCategories/>} ></Route>
                    <Route path="/orders" element={<Orders />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default App;