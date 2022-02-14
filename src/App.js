import React from 'react';
import { Brand, CTA, Navbar } from './components';
import { Footer, Blog, Features, Header, Possibility, WhatGPT3 } from './containers';
import './App.css';
import './index.css';

const App = () => {
    return (
        <div>
            <div className="App">
                <div className="gradient__bg">
                    <Navbar />
                    <Header />
                </div>
                <Brand />
                <WhatGPT3 />
                <Features />
                <Possibility />
                <CTA />
                <Blog />
                <Footer />
            </div>
        </div>
    )
}

export default App
