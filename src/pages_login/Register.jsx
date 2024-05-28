import { useState } from "react";
import registerStyle from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleClickLogin = async () => {
    navigate("/login"); 
  };

  //회원가입하기 
  const handleSubmit = async (event) => {
    event.preventDefault(); // 기본 form 제출 동작을 방지합니다.
    try {
        const requestBody = {
            "name": name,
            "login_id": id,
            "pw": password
        };
        const response = await axios.post(`http://127.0.0.1:8080/auth/register`, requestBody);
        alert("회원가입이 완료되었습니다.")
        navigate("/login");
    } catch (error) {
        alert("회원가입 실패");
    }
  };

  return (
    <div className={registerStyle.register}>
      <div className={registerStyle.register_container}>
        <span className={registerStyle.register_title}>Renew Wear</span>
        <span className={registerStyle.register_subtitle}>회원 가입</span>
        <form className={registerStyle.register_from}onSubmit={handleSubmit}>
          <input className={registerStyle.register_input}
            type="text" //type="email"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input className={registerStyle.register_input}
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input className={registerStyle.register_input}
            type="text"
            placeholder="PW"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={registerStyle.register_button}>회원 가입</button>
        </form>
        <p className={registerStyle.register_login} onClick={handleClickLogin}>아이디가 있나요? Login</p>
      </div>
    </div>
  );
};

export default Register;