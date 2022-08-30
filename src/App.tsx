import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./features/Home";
import Analysis from "./features/Analysis/Analysis";

import './features/Home.scss';

function App() {
    return (
        <div className='app'>
            <Header />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="answers" element={<Analysis />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;