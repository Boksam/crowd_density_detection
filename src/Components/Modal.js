import React, { useState } from "react";
import Webcam from "react-webcam";
import ChartComponent from "./Chart";

const Modal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState("webcam");

    const handleCloseModal = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            onClose();
        }
    };

    const log_list = [
        {'time': '2024/02/10-10:04', 'message': '인구 밀집도가 상승하였습니다. (12% -> 16%)', 'status': 'safe'},
        {'time': '2024/02/10-09:57', 'message': '인구 밀집도가 하락하였습니다. (76% -> 53%)', 'status': 'warning'},
        {'time': '2024/02/10-10:04', 'message': '🚨 인구 밀집도가 70%를 초과하였습니다. (76%) 🚨', 'status': 'danger'},
        {'time': '2024/02/10-10:04', 'message': '⚠️ 인구 밀집도가 50% 를 초과하였습니다 ⚠️', 'status': 'warning'},
        {'time': '2024/02/10-10:04', 'message': '인구 밀집도가 하락하였습니다. (76% -> 53%)', 'status': 'warning'},
        {'time': '2024/02/10-10:04', 'message': '인구 밀집도가 상승하였습니다. (12% -> 16%)', 'status': 'safe'},
        {'time': '2024/02/10-09:57', 'message': '인구 밀집도가 하락하였습니다. (76% -> 53%)', 'status': 'warning'},
        {'time': '2024/02/10-10:04', 'message': '🚨 인구 밀집도가 70%를 초과하였습니다. (76%) 🚨', 'status': 'danger'},
        {'time': '2024/02/10-10:04', 'message': '⚠️ 인구 밀집도가 50% 를 초과하였습니다 ⚠️', 'status': 'warning'},
        {'time': '2024/02/10-10:04', 'message': '인구 밀집도가 하락하였습니다. (76% -> 53%)', 'status': 'warning'},
        {'time': '2024/02/10-10:04', 'message': '인구 밀집도가 상승하였습니다. (12% -> 16%)', 'status': 'safe'},
        {'time': '2024/02/10-09:57', 'message': '인구 밀집도가 하락하였습니다. (76% -> 53%)', 'status': 'warning'},
        {'time': '2024/02/10-10:04', 'message': '🚨 인구 밀집도가 70%를 초과하였습니다. (76%) 🚨', 'status': 'danger'},
        {'time': '2024/02/10-10:04', 'message': '⚠️ 인구 밀집도가 50% 를 초과하였습니다 ⚠️', 'status': 'warning'},
        {'time': '2024/02/10-10:04', 'message': '인구 밀집도가 하락하였습니다. (76% -> 53%)', 'status': 'warning'},
        {'time': '2024/02/10-10:04', 'message': '인구 밀집도가 상승하였습니다. (12% -> 16%)', 'status': 'safe'},
        {'time': '2024/02/10-09:57', 'message': '인구 밀집도가 하락하였습니다. (76% -> 53%)', 'status': 'warning'},
        {'time': '2024/02/10-10:04', 'message': '🚨 인구 밀집도가 70%를 초과하였습니다. (76%) 🚨', 'status': 'danger'},
        {'time': '2024/02/10-10:04', 'message': '⚠️ 인구 밀집도가 50% 를 초과하였습니다 ⚠️', 'status': 'warning'},
        {'time': '2024/02/10-10:04', 'message': '인구 밀집도가 하락하였습니다. (76% -> 53%)', 'status': 'warning'},
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black rounded bg-opacity-50 z-50 modal-overlay" onClick={handleCloseModal}>
            <div className="bg-white w-full h-full max-w-[60vw] rounded max-h-[70vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="p-5 overflow-y-auto">
                    <div className="flex justify-between mb-4">
                        <div className="flex w-5/6">
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
                                로그s
                            </button>
                        </div>
                        <div className="items-end">
                            <button
                                className="flex-1 py-2 rounded-t-lg"
                                onClick={() => onClose()}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        {activeTab === "webcam" && (
                            <div>
                                <Webcam className="rounded"/>
                            </div>
                        )}
                        {activeTab === "chart" && (
                            <div className="w-full">
                                <ChartComponent data={Array.from({length: 24}, (_, i) => i)}/>
                            </div>
                        )}
                        {activeTab === "log" && (
                            <div className="flex flex-col w-full">
                                {log_list.map((log, index) => (
                                    <React.Fragment key={index}>
                                        <div className="flex mb-2">
                                        <div className="w-1/3 border-r">
                                                <div>{log.time}</div>
                                            </div>
                                            <div className="w-1/12"></div>
                                            <div className="w-7/12">
                                                <div>{log.message}</div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
