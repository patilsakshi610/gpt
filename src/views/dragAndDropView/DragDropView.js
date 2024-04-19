import React, { useState } from "react";
import FileUploaderView from "./FileUploaderView.js";
import ImageUploadView from "./ImageUploadView.jsx";
import { faL } from "@fortawesome/free-solid-svg-icons";

const fileTypes = [".pdf"];

const DragDropView = ({
    setIsUploaded = () => {},
    setIsLoading = () => {},
    isLoading,
}) => {
    const [file, setFile] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [textAreaValue, setTextAreaValue] = useState("");

    const handleTextAreaChange = (event) => {
        setTextAreaValue(event.target.value);
    };

    const handleFileChange = (selectedFile) => {
        setFile(selectedFile);
        selectedFile && setIsUploaded(true);
        textAreaValue && setIsUploaded(true);
        console.log(file);
    };

    const handleChange = (event) => {
        const file = event.target.files[0];

        setImageFile(file);

        console.log(imageFile);
    };
    //effect for handling file change (sending file to backend)

    const texthandler = () => {
        console.log(textAreaValue);
    };
    const imageHandler = () => {
        console.log(imageFile);
    };

    const buttonHandler = () => {
        imageFile ? imageHandler() : texthandler();
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "90vh",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                maxWidth: "500px",
                margin: "0 auto",
            }}
        >
            <h1 style={{ marginBottom: "20px" }}>Drag and Drop Files</h1>
            <FileUploaderView
                onFileChange={handleFileChange}
                fileTypes={fileTypes}
            />
            <hr
                style={{
                    borderBottom: "1px solid rgb(128 129 145 / 24%)",
                    width: "100%",
                    margin: " 35px 0",
                }}
            ></hr>

            <div className="image-container" style={{ width: "100%" }}>
                <h1 style={{ marginBottom: "20px" }}>Upload Images</h1>
                <ImageUploadView
                    handleChange={handleChange}
                    selectedFile={setImageFile}
                    imageFile={imageFile}
                />
                <p
                    style={{
                        textAlign: "center",
                        fontSize: "14px",
                        fontWeight: "bold",
                    }}
                >
                    Or
                </p>
                <textarea
                    style={{
                        width: "100%",
                        height: "auto",
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        resize: "none",
                    }}
                    placeholder="Type your text here..."
                    value={textAreaValue}
                    onChange={handleTextAreaChange}
                />
                <div style={{ justifyContent: "center" }}>
                    <button
                        style={{
                            height: "30px",
                            height: "40px",
                            width: "100px",
                            borderRadius: "8px",
                            backgroundColor: "#808191",
                            cursor: "pointer",
                            color: "black",
                            fontWeight: "500",
                        }}
                        onClick={buttonHandler}
                    >
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DragDropView;
