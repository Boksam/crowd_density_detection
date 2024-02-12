import React, {useEffect, useState} from "react";
import Modal from "../Components/Modal";
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

        const marker2 = new kakao.maps.Marker({ position: new kakao.maps.LatLng(35.155347, 129.121857)})
        marker2.setMap(kakaoMap);

        const marker3 = new kakao.maps.Marker({ position: new kakao.maps.LatLng(35.155218, 129.120964)})
        marker3.setMap(kakaoMap);

        const marker4 = new kakao.maps.Marker({ position: new kakao.maps.LatLng(35.155733, 129.121632)})
        marker4.setMap(kakaoMap);

        const marker5 = new kakao.maps.Marker({ position: new kakao.maps.LatLng(35.155643, 129.121204)})
        marker4.setMap(kakaoMap);

        const marker6 = new kakao.maps.Marker({ position: new kakao.maps.LatLng(35.155456, 129.121541)})
        marker6.setMap(kakaoMap);

        const marker7 = new kakao.maps.Marker({ position: new kakao.maps.LatLng(35.155642, 129.122006)})
        marker7.setMap(kakaoMap);

        const marker8 = new kakao.maps.Marker({ position: new kakao.maps.LatLng(35.155283, 129.120539)})
        marker8.setMap(kakaoMap);

        kakao.maps.event.addListener(marker1, 'click', () => {
            setIsModalOpen(true);
        });
        kakao.maps.event.addListener(marker2, 'click', () => {
            setIsModalOpen(true);
        });
        kakao.maps.event.addListener(marker3, 'click', () => {
            setIsModalOpen(true);
        });
        kakao.maps.event.addListener(marker4, 'click', () => {
            setIsModalOpen(true);
        });
        kakao.maps.event.addListener(marker5, 'click', () => {
            setIsModalOpen(true);
        });
        kakao.maps.event.addListener(marker6, 'click', () => {
            setIsModalOpen(true);
        });
        kakao.maps.event.addListener(marker7, 'click', () => {
            setIsModalOpen(true);
        });
        kakao.maps.event.addListener(marker8, 'click', () => {
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