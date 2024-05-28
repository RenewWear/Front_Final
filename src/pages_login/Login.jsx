import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import loginStyle from "./Login.module.css";


const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  //로그인하기 
  const handleSubmit = async (event) => {
    event.preventDefault(); // 기본 form 제출 동작을 방지합니다.
    try {
        const requestBody = {
            "login_id": id,
            "pw": password
        };
        const response = await axios.post(`http://localhost:8080/auth/login`, requestBody);
        const userId = response.data.user_id;
        localStorage.setItem("user_id",userId);
        navigate("/");
    } catch (error) {
        alert("로그인 실패 : 없는 회원이거나 비밀번호가 틀렸습니다.");
    }
  };

  //회원가입페이지로 이동
  const handleRegister = async () => {
    navigate("/register")
  };

  return (
    <div className={loginStyle.login}>
        <div className={loginStyle.login_container}>
            <div className={loginStyle.login_title}>Renew Wear</div>
            <span className={loginStyle.login_subtitle}>Login</span>
            <form className={loginStyle.login_form} onSubmit={handleSubmit}> 
                <input className={loginStyle.login_input}
                type="text"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                />
                <input className={loginStyle.login_input}
                type="password" // 비밀번호 입력란의 타입을 password로 수정합니다.
                placeholder="PW"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button className={loginStyle.login_button} type="submit">로그인</button> {/* 버튼 타입을 submit으로 설정합니다. */}
            </form>
            <p className={loginStyle.login_register} onClick={handleRegister}>아이디가 없나요?  회원가입</p>
        </div>
    </div>
  );
};

export default Login;
