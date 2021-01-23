import React from 'react'; // TODO: 17 версия Реакта не требует React импорта в компонентах
import {Route, BrowserRouter} from 'react-router-dom'; // Предпочтительно все глобальные обертки делать в корневом index.js
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
