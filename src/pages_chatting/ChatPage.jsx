import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './ChatPage.css'

const SERVER_ENDPOINT = "http://localhost:8080/chat"; // Flask 서버 주소 및 네임스페이스
let socket;

const ChatPage = ({ room_id, userName }) => { // props로 room_id와 userName을 받음
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [otherUserName, setOtherUserName] = useState("");

  useEffect(() => {
    // Socket.IO 클라이언트 초기화
    socket = io(SERVER_ENDPOINT);

    // 채팅방에 입장
    if (room_id) {
      socket.emit('joined', { room: room_id,name: userName});
      setMessage("");
    }


    // Flask 서버로부터 메시지 받기
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
      if (msg.name !== userName) {
        setOtherUserName(msg.name); // 상대방 이름 설정
      }
    });

    // 컴포넌트 언마운트 시 소켓 연결 해제
    return () => {
      socket.disconnect();
    };
  }, [room_id]); // room_id가 변경될 때마다 useEffect 훅이 실행됨

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
        // userName을 사용하여 메시지 전송
        socket.emit('text', { room: room_id, msg: message, name: userName });
        setMessage("");
    }
  };

  const leaveRoom = () => {
    socket.emit('left', { room: room_id,name: userName }); // 서버에 'left' 이벤트 전송

    setTimeout(() =>{
        setMessages([]);
    }, 2000);
};

  return (
    <div className="chat">
      <div className="chat-header">
        <h2>{otherUserName ? `${otherUserName}님과의 채팅` : '채팅방'}</h2>
      </div>
      <div className="messages">
          {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.name === userName ? 'outgoing' : 'incoming'}`}>{msg.msg}</div>
          ))}
      </div>
      <div className="input-container" style={{display: 'flex', justifyContent: 'space-between'}}>
        <form onSubmit={sendMessage} style={{flexGrow: 1, display: 'flex'}}>
          <input
            type="text"
            className="message-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="메시지 입력"
            style={{flexGrow: 0.85}}
          />
          <button type="submit" className="send-button">

          </button>
        </form>
      </div>
    </div>
  );


};

export default ChatPage;
