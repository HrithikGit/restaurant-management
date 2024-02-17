import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar';
import  Dashboard  from './components/Dashboard';

function App(){
    return (
        <div className="App">
            <div>
                <Sidebar/>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default App;