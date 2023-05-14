import React from 'react'
import './LoginPage.css'
import LoginImg from '../Images/login-Img.gif';
import CoffeeImg from '../Images/coffee-avatar.gif';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const LoginPage = () => {
    return (
        <>
            <div className='loginPage'>
                <div className='loginPage-left'>
                    <img src={LoginImg} alt='' />
                </div>
                <div className='loginPage-right'>
                    <img src={CoffeeImg} alt='' />

                    <form className='loginPage-form'>
                        <input class="input-container" type="email" placeholder='Email' required="" />
                        <input class="input-container" type="password" placeholder='Password' required="" />
                        <button type="button" class="btn">Login</button>
                    </form>

                </div>
            </div>


        </>
    )
}

export default LoginPage