import React, {useState } from 'react'
import "./Home.css"
import { search, admin, add } from '../Assets/index';
import { useUserAuth } from '../Context/UserAuthContext';
import Notes from './Notes';
import { heart } from '../Assets/index';


function Home() {
  const [error, setError] = useState("");
  const { user, logOut } = useUserAuth();
  const [components, setComponents] = useState([]);
  const [desc, setDesc] = useState();
  const [textColor, setTextColor] = useState("rgb(190, 177, 177)")

  const createComponent = () => {
    const newComponent = { id: Date.now(), description: desc, archived: heart,color:textColor };
    setComponents((prevComponents) => [...prevComponents, newComponent]);
  };

  const deleteComponent = (id, archived) => {
    if (archived === heart) {
      const updatedComponents = components.filter((comp) => comp.id !== id);
      setComponents(updatedComponents);
    } else {
      alert("This Note can't be deleted as Protected ♥!");
    }
  };

  const childCallback = (id, archval) => {
    const updatedComponents = components.map((comp) =>
      comp.id === id ? { ...comp, archived: archval } : comp
    );
    setComponents(updatedComponents);
  };


  const descval = (data) => {
    setDesc(data);
  }


  const handleLogout = async () => {
    try {
      await logOut()
    } catch (err) {
      setError(err);
    }
  }

  const handleColorchange = (colorval) => {
    setTextColor(colorval);
  }

  return (
    <div className='parent'>
      {error && <p>{error}</p>}
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
            <div className='first' onClick={()=>handleColorchange("rgba(224, 68, 50, 0.664)")}></div>
            <div className='second' onClick={()=>handleColorchange("rgba(98, 219, 28, 0.774)")}></div>
            <div className='third' onClick={()=>handleColorchange("rgba(53, 189, 223, 0.74)")}></div>
            <div className='fourth' onClick={()=>handleColorchange("rgba(255, 39, 201, 0.767)")}></div>
            <div className='fifth' onClick={()=>handleColorchange("rgba(173, 43, 248, 0.719)")}></div>
            <div className='sixth' onClick={()=>handleColorchange("rgba(255, 121, 11, 0.774)")}></div>
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
                archived={component.archived}
                textColor={textColor}
                childCallback={childCallback}
                descval={descval}
                onDelete={() => deleteComponent(component.id, component.archived)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home