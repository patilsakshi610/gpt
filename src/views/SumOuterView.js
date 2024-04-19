import React, { useEffect } from "react";
import "../views/chatView/ChatView.css";
import { useLocation } from "react-router-dom";

const SumOuterView = ({ setIsLoading = () => {}, isLoading }) => {
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                await new Promise((resolve) => setTimeout(resolve, 2000));

                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [location.pathname]);

    return (
        <div className="chat-window">
            <div className="chat-header" style={{ padding: "17px" }}>
                {location.pathname === "/summarize"
                    ? "Summarization"
                    : "Grammar Checking"}
            </div>
            <div className="chat-body">
                {!isLoading && <div>hello</div>}
                <div className="chat-footer">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={""}
                        // onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button onClick={() => ""}>send</button>
                </div>
            </div>
        </div>
    );
};

export default SumOuterView;
