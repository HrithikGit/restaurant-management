import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar';
import  Dashboard  from './components/Dashboard';
import Orders from './components/Orders';

function App(){
    return (
        <div className="App">
            <div>
                <Sidebar/>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />}></Route>
                    <Route path="/orders" element={<Orders />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default App;