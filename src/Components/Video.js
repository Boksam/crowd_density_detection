import React, { useEffect, useRef } from "react";

const Video = () => {
    let videoRef = useRef(null);
    let streamRef = useRef(null);

    useEffect(() => {
        const getCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true
                });
                videoRef.current.srcObject = stream;
                streamRef.current = stream;

                // 기존 스트림과 새로운 스트림이 같은 경우에만 play() 호출
                if (videoRef.current.srcObject === stream) {
                    videoRef.current.play();
                }
            } catch (error) {
                console.log(error);
            }
        };

        getCamera();

        // 컴포넌트가 언마운트될 때 스트림을 중지합니다.
        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    return <video ref={videoRef} />;
};

export default Video;