import React, { useState } from 'react'
import "./Home.css"
import { search, admin, add } from '../Assets/index';
import { useUserAuth } from '../Context/UserAuthContext';
import Notes from './Notes';
function Home() {
  const [error, setError] = useState("");
  const { user, logOut } = useUserAuth();
  const [components, setComponents] = useState([]);
  const createComponent = () => {
    setComponents(prevComponents => [...prevComponents, {}]);
  };

  const deleteComponent = (index) => {
    setComponents(prevComponents => prevComponents.filter((_, i) => i !== index));
    console.log(index);
  };
  const handleLogout = async () => {
    try {
      await logOut()
    } catch (err) {
      setError(err);
    }
  }
  return (
    <div className='parent'>
      <header className='head'>
        <div className='searchbox'>
          <img src={search} alt="searchicon" className='searchicon' />
          <input type="text" id='search' placeholder='Search Your Notes' />
        </div>
        <div className='profile'>
          {/* <div className='profilecircle'> */}
          <img src={admin} alt="DP" id='profilepic' /><p>{user.email}</p>
          <button className='btnlogout' onClick={handleLogout}>Logout</button>
          {/* </div> */}
        </div>
      </header>
      <div className='main-content'>
        <div className='SidePanel'>
          <p className='side-txt'>Docker</p>
          <div className='CreateBtn'>
            <img src={add} alt="Create" onClick={createComponent} />
          </div>
          <div className='multiple-color'>
            <div className='first'></div>
            <div className='second'></div>
            <div className='third'></div>
            <div className='fourth'></div>
            <div className='fifth'></div>
            <div className='sixth'></div>
          </div>
        </div>
        <div className='line'></div>
        <div className='Notes'>
          <h1 className='Notesheading'>Notes</h1>
          <div className='notesText'>
            {components.map((_, index) => (
              <Notes key={index} onDelete={() => deleteComponent(index)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home