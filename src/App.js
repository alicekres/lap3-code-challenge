import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Explanation } from './pages';
import { Header } from './layout';
import { Footer } from './layout';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/navbar" element={<Explanation />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
