import React from "react";
import { Route, Routes } from "react-router-dom";
import DragDropView from "../../views/dragAndDropView/DragDropView.js";
import ChatView from "../../views/chatView/ChatView.js";
import SumOuterView from "../../views/SumOuterView.js";

const MainLayout = ({
    setIsUploaded = () => {},
    setIsLoading = () => {},
    isLoading,
}) => {
    return (
        <div
            style={{
                padding: "24px",
                // minHeight: 500,
                flexGrow: 1,
            }}
        >
            <Routes>
                <Route
                    path="/"
                    element={
                        <DragDropView
                            setIsUploaded={setIsUploaded}
                            setIsLoading={setIsLoading}
                            isLoading={isLoading}
                        />
                    }
                />
                <Route
                    path="/chat"
                    element={
                        <ChatView
                            setIsLoading={setIsLoading}
                            isLoading={isLoading}
                        />
                    }
                />
                <Route
                    path="/summarize"
                    element={
                        <SumOuterView
                            setIsLoading={setIsLoading}
                            isLoading={isLoading}
                        />
                    }
                />{" "}
                <Route
                    path="/grammar"
                    element={
                        <SumOuterView
                            setIsLoading={setIsLoading}
                            isLoading={isLoading}
                        />
                    }
                />
            </Routes>
        </div>
    );
};

export default MainLayout;
