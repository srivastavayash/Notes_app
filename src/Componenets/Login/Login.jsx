import React from 'react'
import "./Login.css"
import { Link,useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../Context/UserAuthContext';
import { useState } from "react"
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn } = useUserAuth();
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <div className='container'>
            <form className='form' onSubmit={handleSubmit}>
                <h2>Login form</h2>
                {error&&<p className='p2'>{error}</p>}
                <label htmlFor='Email'>Email:</label><br />
                <input type="email" id='Email' placeholder='youremail@domain.com' autoComplete="username" required onChange={(e) => setEmail(e.target.value)}/><br /><br />
                <label htmlFor='Pass'>Password:</label><br />
                <input type="password" id='Pass' placeholder='password' autoComplete="current-password" required onChange={(e) => setPassword(e.target.value)}/><br /><br />
                <div className='btn'><button type='submit'>Sigin</button></div>
                <h4>Want to Register? &nbsp;
                    <Link to="/Signup">Sign Up</Link>
                </h4>
            </form>
        </div>
    )
}

export default Login