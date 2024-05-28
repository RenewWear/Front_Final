import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChatList.css';
import ChattingRequest from './ChattingRequest';
import ChattingReceive from './ChattingReceive';
import HeaderComponent from '../components_header/HeaderComponent';

const ChatList = async (user_id) => {
  try {
    const response = await axios.get(`http://localhost:8080/chat/list/${user_id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("채팅 파트너 목록 가져오기 실패:", error);
    return []; // 에러가 발생했을 때 빈 배열을 반환
  }
};

const ChatListComponent = () => {
  const [chatList, setChatList] = useState([]);
  const user_id = localStorage.getItem('user_id');
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [selectedChatForRequest, setSelectedChatForRequest] = useState(null);

  useEffect(() => {
    const fetchChatList = async () => {
      const data = await ChatList(user_id);
      setChatList(data);
    };

    fetchChatList();
  }, [user_id]);

  const handleReceiverClick = (room_id) => {
    // receiver_id와 user_id가 동일할 때의 동작 구현
    // console.log("Receiver 클릭", chat);
    setSelectedRoomId(room_id)
    setSelectedChatForRequest(null); // 새로운 채팅을 선택할 때마다 초기화
  };
  
  const handleSenderClick = (post_id,sender_id) => {
    // sender_id와 user_id가 동일할 때의 동작 구현
    console.log("Sender 클릭", post_id,sender_id);
    setSelectedChatForRequest({post_id,sender_id})
    setSelectedRoomId(null); // 다른 컴포넌트를 렌더링할 때 초기화
  };
  

  return (
    <div>
        <HeaderComponent/>
        <div className="chat-container">
        <div className="chat-list-container">
            <h3 className="chatlist-header">채팅</h3> 
            <ul className="chat-list">
            {chatList.map((chat) => (
                <li key={chat.room_id} 
                className={`chat-list-item ${selectedRoomId === chat.room_id || (selectedChatForRequest && selectedChatForRequest.sender_id === chat.sender_id && selectedChatForRequest.post_id === chat.post_id) ? 'selected-chat-item' : ''}`}
                onClick={() => {
                    if(chat.receiver_id == user_id.toString()){
                        handleReceiverClick(chat.room_id);
                    }
                    else if(chat.sender_id == user_id.toString()){
                        handleSenderClick(chat.post_id,chat.sender_id);
                    }
                }}>
                    <div className="chat-partner">
                    {chat.receiver_id === user_id.toString() ? chat.sender_name : chat.receiver_name}
                    </div>
                    <div className="last-message">
                    {chat.last_message ? chat.last_message : "메시지 없음"}
                    </div>
                </li>
            ))}
            </ul>
        </div>
        <div className="chat-detail">
            {selectedRoomId && <ChattingReceive key={selectedRoomId} room_id={selectedRoomId} />}
            {selectedChatForRequest && <ChattingRequest {...selectedChatForRequest} />}
        </div>
        </div>
    </div>
  );
  
};
export default ChatListComponent;
