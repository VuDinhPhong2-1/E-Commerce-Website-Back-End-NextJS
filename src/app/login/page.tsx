'use client'
import { useState } from 'react';
import './login.scss';
import { sendRequest } from '@/utils/api';

const LoginForm = () => {
    const [refreshToken, setRefreshToken] = useState('');

    const handleLoginSubmit = () => {
        sendLoginRequest();
    };

    const sendLoginRequest = () => {
        sendRequest<IBackendRes<IRequestLogin>>({
            method: "POST",
            url: "http://localhost:8001/api/v1/auth/login",
            body: {
                username: "hoidanit@gmail.com",
                password: "123456",
            }
        })
            .then((workouts) => {
                console.log(workouts);
                // Xử lý dữ liệu trả về tại đây (đăng nhập thành công/thất bại)
                //checkRefreshToken();
            })
            .catch((error) => {
                console.error("Error during login:", error);
                // Xử lý lỗi nếu cần
            });
    };

    // const checkRefreshToken = () => {
    //     const refreshTokenCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('refresh_token='));
    //     if (refreshTokenCookie) {
    //         const refreshToken = refreshTokenCookie.split('=')[1];
    //         console.log('Token refresh đã được lưu:', refreshToken);
    //         setRefreshToken(refreshToken);
    //     }
    //     else {
    //         // Token refresh không tồn tại
    //         console.log('Token refresh không tồn tại');
    //     }
    // };

    return (
        <div className='body'>
            <div className="wrapper">
                {/* ... */}
                <div className="login1">
                    <h2>Login</h2>
                    <input type="text" placeholder="UserName" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Sign in" onClick={handleLoginSubmit} />
                    <div className="links">
                        <a href="#">Forget Password</a>
                        <a href="#">Signup</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
