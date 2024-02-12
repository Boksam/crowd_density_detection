import React, { useState } from "react";
import Webcam from "react-webcam";
import ChartComponent from "./Components/Chart";

const Modal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState("webcam");

    const handleCloseModal = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black rounded bg-opacity-50 z-50 modal-overlay" onClick={handleCloseModal}>
            <div className="bg-white w-full h-full max-w-[60vw] max-h-[70vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="p-5 overflow-y-auto">
                    <div className="flex mb-4">
                        <button
                            className={`flex-1 py-2 rounded-t-lg ${activeTab === "webcam" ? "bg-gray-300" : "bg-gray-100"}`}
                            onClick={() => setActiveTab("webcam")}
                        >
                            실시간 영상
                        </button>
                        <button
                            className={`flex-1 py-2 rounded-t-lg ${activeTab === "chart" ? "bg-gray-300" : "bg-gray-100"}`}
                            onClick={() => setActiveTab("chart")}
                        >
                            밀집도 변화 추이
                        </button>
                        <button
                            className={`flex-1 py-2 rounded-t-lg ${activeTab === "log" ? "bg-gray-300" : "bg-gray-100"}`}
                            onClick={() => setActiveTab("log")}
                        >
                            로그
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        {activeTab === "webcam" && (
                            <div>
                                <Webcam className="rounded"/>
                            </div>
                        )}
                        {activeTab === "chart" && (
                            <div className="w-full">
                                <ChartComponent data={Array.from({ length: 24}, (_, i) => i)} />
                            </div>
                        )}
                        {activeTab === "log" && (
                            <div>
                                <p>hello</p>
                                <p>hello</p>
                                <p>hello</p>
                                <p>hello</p>
                                <p>hello</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
