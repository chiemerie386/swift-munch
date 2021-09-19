import React from 'react'
import GlobalStyle from './Global.styles.js';
import {Frm, Inp,Sub, Tex, Log, Tab, Logc} from './Login.styles.js'

const Login = () => {
    return (
        <div>
            <GlobalStyle />
           
            <Tab>
                <Log>SIGN IN</Log>
                <Logc>CREATE ACCOUNT</Logc>
            </Tab>
            <Frm action="">
                <Inp type="text" placeholder="Email" />
                <Inp type="text" placeholder="Password" />
                <Tex>Forgot your password?</Tex>
                <Sub  type="submit" value='SIGN IN' />
            </Frm>
            {/* <ul>
                 <h1>One Piece</h1>
                 <h1>Fullmetal </h1>
                 <h1>Naruto</h1>
                 <h1>Bleach</h1>
                 <h1>Haikyu!!</h1>
                 <h1>Kuroko no Basketball</h1>
                 <h1>My hero academia</h1>
                 <h1>One punch man</h1>   
            </ul> */}
        </div>
    )
}

export default Login
