import React, { useState } from 'react'
import "./Signup.css"
import { Link,useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../Context/UserAuthContext';
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate('/Login');
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <div className='container1'>
            <form className='form1' onSubmit={handleSubmit}>
                <h2>Signup form</h2>
                {error&&<p className='p1'>{error}</p>}
                <label htmlFor='Email'>Email:</label><br />
                <input type="email" id='Email' placeholder='youremail@domain.com' required onChange={(e) => setEmail(e.target.value)} /><br /><br />
                <label htmlFor='Pass'>Password:</label><br />
                <input type="password" id='Pass' placeholder='password' required onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <label >re-type password:</label><br />
                <input type="password" placeholder='re-type password' required /><br /><br />
                <div className='btn1'><button type='submit'>Register</button></div>
                <h4>Already a User? &nbsp;
                    <Link to="/Login">Login</Link>
                </h4>
            </form>
        </div>
    )
}

export default Signup