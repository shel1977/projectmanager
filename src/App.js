import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Body/Projects/Main";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
