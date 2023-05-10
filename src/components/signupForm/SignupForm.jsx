import React from 'react'
import { Close, Facebook, Google, LinkedIn} from '@mui/icons-material';

export default function SignupForm() {

    const signUp = ()=>{

    }

  return (
    <div className="form-container sign-up-container">
		<form onSubmit={signUp}>
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><Facebook/></a>
				<a href="#" className="social"><Google/></a>
				<a href="#" className="social"><LinkedIn/></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="First Name" />
			<input type="text" placeholder="Last Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button type='submit'>Sign Up</button>
		</form>
	</div>
  )
}
