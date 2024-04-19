import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar.js";
import MainLayout from "./main-layout/MainLayout.js";
import "../App.css";
import { RingLoader } from "react-spinners";

const AppContainer = () => {
    const [isUploaded, setIsUploaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="app-Container">
            {isLoading && (
                <div className="overlay">
                    <RingLoader
                        color="#36D7B7"
                        size={100}
                        loading={isLoading}
                    />
                </div>
            )}
            <Sidebar
                isUploaded={isUploaded}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
            />
            <MainLayout
                setIsUploaded={setIsUploaded}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
            />
        </div>
    );
};

export default AppContainer;
