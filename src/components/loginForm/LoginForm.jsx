import { Close, Facebook, Google, LinkedIn} from '@mui/icons-material';
import React, { useState } from 'react'

export default function LoginForm() {

  let [email, setEmail]  = useState("");

  const login = ()=>{
    
  }

  return (
    <div className="form-container sign-in-container">
    <form onSubmit={login}>
        <h1>Sign in</h1>
        <div className="social-container">
            <a href="#" className="social"><Facebook/></a>
            <a href="#" className="social"><Google/></a>
            <a href="#" className="social"><LinkedIn/></a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button type='submit'>Sign In</button>
    </form>
    </div>
  )
}
