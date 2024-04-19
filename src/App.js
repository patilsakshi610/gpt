import React from "react";
import "./App.css";
import AppContainer from "./components/AppContainer.js";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <AppContainer />
            </div>
        </BrowserRouter>
    );
};
export default App;
