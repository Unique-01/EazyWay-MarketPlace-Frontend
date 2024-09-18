import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "./VideoUpload.css"; // Import the CSS file

const VideoUpload = () => {
    const { handleSubmit } = useForm();
    const [videos, setVideos] = useState([]);
    const inputFileRef = useRef(null);

    const onDrop = (acceptedFiles) => {
        const updatedVideos = acceptedFiles.map((file) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
            })
        );
        setVideos((prevState) => [...prevState, ...updatedVideos]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "video/*",
        onDrop,
        multiple: true,
        noClick: true,
    });

    const handleFileSelect = (event) => {
        const files = event.target.files;
        const updatedVideos = Array.from(files).map((file) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
            })
        );
        setVideos((prevState) => [...prevState, ...updatedVideos]);
    };

    const onSubmit = (data) => {
        console.log("Form data", data);
        console.log("Uploaded videos", videos);
    };

    const removeVideo = (indexToRemove, event) => {
        event.stopPropagation(); // Prevent click from triggering the dropzone
        setVideos((prevVideos) =>
            prevVideos.filter((_, index) => index !== indexToRemove)
        );
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Drag and drop area */}
                <div
                    {...getRootProps()}
                    className={`dropzone-container ${
                        isDragActive ? "dropzone-active" : ""
                    }`}
                >
                    <input {...getInputProps()} />

                    {videos.length === 0 && (
                        <div className="video-placeholder rounded-circle d-flex justify-content-center align-items-center">
                            <BsFillPlayCircleFill className="icon-style rounded" />
                        </div>
                    )}

                    {videos.length > 0 && (
                        <div className="file-preview-container">
                            {videos.map((file, index) => (
                                <div key={index} style={{ position: "relative" }}>
                                    <video
                                        src={file.preview}
                                        controls
                                        className="file-preview video-preview"
                                    />
                                    {/* Remove button */}
                                    <button
                                        type="button"
                                        onClick={(event) =>
                                            removeVideo(index, event)
                                        }
                                        className="remove-btn"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Button to trigger file input */}
                    <p className="drag-text">
                        Drag & drop some videos here, or use the button below to select videos
                    </p>
                    <button
                        type="button"
                        onClick={() => inputFileRef.current.click()}
                        className="add-btn"
                    >
                        Add Video
                    </button>

                    {/* Hidden file input */}
                    <input
                        type="file"
                        ref={inputFileRef}
                        style={{ display: "none" }}
                        onChange={handleFileSelect}
                        multiple
                        accept="video/*"
                    />
                </div>
            </form>
        </div>
    );
};

export default VideoUpload;
