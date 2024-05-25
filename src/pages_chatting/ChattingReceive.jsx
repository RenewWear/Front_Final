import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatPage from './ChatPage';

//판매자  채팅방 입장 
const ChattingReceive = ({room_id}) => {
    const [roomData, setRoomData] = useState(null);

    useEffect(() => {
        // 채팅방 정보를 자동으로 불러오는 함수
        const handleChatReceive = async () => {
            
            try {
                const response = await axios.get(`http://localhost:8080/chat/enter/${room_id}`);
                const { name, room } = response.data;
                console.log(response.data);
                setRoomData({ room_id: room, userName: name });
                
            } catch (error) {
                console.error("채팅방 정보를 불러오는 데 실패했습니다.", error);
            }
        };
        
        // 컴포넌트 마운트 시 채팅방 정보 불러오기 실행
        handleChatReceive();
    }, []); // 빈 의존성 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

    return (
        <div>
            {roomData && <ChatPage room_id={roomData.room_id} userName={roomData.userName} />}
        </div>
    );
};

export default ChattingReceive;
