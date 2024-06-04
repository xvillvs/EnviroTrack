import React, { useState, useEffect, useRef } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock } from "react-icons/fa";
import { RiCellphoneFill } from "react-icons/ri";

const LoginRegister = () => {
    const [action, setAction] = useState('');
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (wrapperRef.current) {
            const wrapperHeight = wrapperRef.current.scrollHeight;
            wrapperRef.current.style.height = `${wrapperHeight}px`;
        }
    }, [action]);

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };

    return (
        <div>
            

            <div ref={wrapperRef} className={`wrapper${action}`}>
                <div className="form-box login">
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder='Username' required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='Password' required />
                            <FaLock className='icon' />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />
                                Remember me
                            </label>
                            <a href='#'>Forgot password</a>
                        </div>
                        <button type="submit" onClick={() => location.href = "/home"}>Login</button>
                        <div className="register-link">
                            <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                        </div>
                    </form>
                </div>
                <div className="form-box register">
                    <form action="" onSubmit={(e) => location.href = "/home"}>
                        <h1>Create Account</h1>
                        <div className="input-box">
                            <input type="text" placeholder='Name' required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder='Contact Number' required />
                            <RiCellphoneFill className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder='Username' required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='Password' required />
                            <FaLock className='icon' />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />
                                I agree to the terms & conditions
                            </label>
                        </div>
                        <button type="submit" onClick={() => location.href = "/home"}>Register</button>
                        <div className="register-link">
                            <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
