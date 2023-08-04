import React, { useState } from 'react'
import "./Home.css"
import { useUserAuth } from '../Context/UserAuthContext';
function Home() {
  const [error, setError] = useState("");
  const { user, logOut } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut()
    } catch (err) {
      setError(err);
    }
  }
  return (
    <div className='container2'>
      {error && alert(error)}
      <div className='container3'>
        <h1>Hello, Welcome! </h1>
        <h2>{user&&user.email}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Home