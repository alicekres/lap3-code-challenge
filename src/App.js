import React from 'react';
import * as Pages from './pages';
import { Header } from './layout';
import { Footer } from './layout';

const App = () => {
    return (
        <>
            <Header />
            <Pages.Home />
            <Footer />
        </>
    );
};

export default App;
