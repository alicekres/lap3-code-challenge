import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './layout';
import { Footer } from './layout';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
