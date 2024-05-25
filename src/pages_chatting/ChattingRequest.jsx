import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatPage from './ChatPage';

// 구매자 채팅방 입장 
const ChattingRequest = ({ post_id, sender_id }) => {
    const [roomData, setRoomData] = useState(null);

    // useEffect 훅을 사용하여 컴포넌트가 마운트될 때 handleChatRequest 함수를 자동으로 실행
    useEffect(() => {
        const handleChatRequest = async () => {
            try {
                const response = await axios.get('http://localhost:8080/chat/enter', {
                    params: {
                        post_id: post_id,
                        sender_id: sender_id
                    }
                });
                const { name, room } = response.data;
                console.log(response.data);
                setRoomData({ room_id: room, userName: name });
            } catch (error) {
                console.error("채팅방 정보를 불러오는 데 실패했습니다.", error);
            }
        };

        handleChatRequest();
    }, [post_id, sender_id]); // post_id와 sender_id가 변경될 때마다 함수가 실행되도록 설정

    if (!roomData) {
        return <div>Loading...</div>; // 로딩 상태를 표시
    }

    return (
        <div>
            {roomData && <ChatPage room_id={roomData.room_id} userName={roomData.userName} />}
        </div>
    );
};

export default ChattingRequest;
