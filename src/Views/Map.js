import React, {useEffect, useState} from "react";
import Modal from "./Modal";
const { kakao } = window;

const Map = () => {
    const [map, setMap] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const container = document.getElementById('map');
        const options = { center: new kakao.maps.LatLng(35.154831, 129.120428) };
        const kakaoMap = new kakao.maps.Map(container, options);
        setMap(kakaoMap);

        const marker1 = new kakao.maps.Marker({ position: new kakao.maps.LatLng(35.154831, 129.120428)})
        marker1.setMap(kakaoMap);

        kakao.maps.event.addListener(marker1, 'click', () => {
            setIsModalOpen(true);
        });
    }, [])

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            <div id="map" style={{ width: '100%', height: '100vh' }}></div>
            <Modal isOpen={isModalOpen} onClose={closeModal}/>
        </div>
    );
};

export default Map;