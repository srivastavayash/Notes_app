import React, { useState } from 'react'
import "./Home.css"
import { search, admin, add } from '../Assets/index';
import { useUserAuth } from '../Context/UserAuthContext';
import Notes from './Notes';
import { heart } from '../Assets/index';


function Home() {
  const [error, setError] = useState("");
  const { user, logOut } = useUserAuth();
  const [components, setComponents] = useState([]);
  const [archi, setArchi] = useState(heart);
  const [desc, setDesc] = useState();

  const createComponent = () => {
    const newComponent = { id: Date.now(), description: desc};
    setComponents((prevComponents) => [...prevComponents, newComponent]);
  };

  const deleteComponent = (id) => {
    if (archi === heart) {
      setComponents((prevComponents) =>
        prevComponents.filter((comp) => comp.id !== id)
      );
    } else {
      alert("This Note can't be deleted as Protected ♥!");
    }
  };


  const childCallback = (idcheck, archval) => {
   setArchi(archval);
  };

  const descval = (data) => {
    setDesc(data);
  }

  // const handleColor = () => {
  //   const classval=document.querySelector
  // }

  const handleLogout = async () => {
    try {
      await logOut()
    } catch (err) {
      setError(err);
    }
  }
  return (
    <div className='parent'>
      {error&&<p>{error}</p>}
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
          <p className='side-txt'>Docket</p>
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
          {components.map((component) => (
              <Notes
                key={component.id}
                id={component.id}
                data={component.description}
                childCallback={childCallback}
                descval={descval}
                onDelete={() => deleteComponent(component.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home