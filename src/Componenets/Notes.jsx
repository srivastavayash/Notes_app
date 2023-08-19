import React, { useState, useEffect } from 'react';
import './Notes.css';
import { heart, redHeart, pen, Delete } from '../Assets/index';
// import { format } from 'date-fns';
import { updateNote } from "../services/Service"; // Import updateNote function

function Notes({
  id,
  textColor,
  // dateCreated,
  archived,
  uid,
  childCallback,
  onDelete,
  descval,
  description: initialDescription,
  Title: initialTitle,
}) {
  const [data, setData] = useState(initialDescription);
  const [val, setVal] = useState(initialTitle);

  const handleClick = async () => {
    const newArchived = archived === heart ? redHeart : heart;
    await updateNote(uid, id, { archived: newArchived });
    childCallback(id, newArchived);
  };

  const textareaStyle = {
    color: textColor,
  };


  useEffect(() => {
    descval(id, data, val);
    // eslint-disable-next-line
  }, [data, val]);

  // const descval = async (id, data, val) => {
  //   await updateNote(id, { Title: val, description: data });

  //   const updatedComponents = components.map((comp) =>
  //     comp.id === id ? { ...comp, Title: val, description: data } : comp
  //   );
  //   setComponents(updatedComponents);
  // };

  return (
    <div className='Notesbox'>
      <div className='titleArchived'>
        <input
          type='text'
          id='title'
          placeholder='Title'
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <span className='imgheart'>
          <img
            src={archived}
            alt='star'
            id='archived'
            className='imgi'
            onClick={handleClick}
          />
        </span>
      </div>

      <textarea
        name='Notes'
        id='textbox'
        style={textareaStyle}
        spellCheck='false'
        placeholder='Enter Your Notes'
        cols='20'
        rows='2'
        wrap='soft'
        value={data}
        onChange={(e) => setData(e.target.value)}
      ></textarea>
      <div className='footer'>
        <button className='modify'>
          <img src={pen} alt='modify' className='imgmod' />
        </button>
        {/* <p className='time'>{Date.now()}</p> */}
        <button className='delete'>
          <img
            src={Delete}
            alt='delete'
            key={id}
            className='imgdel'
            onClick={() => onDelete(id, archived)}
            uid={uid}
          />
        </button>
      </div>
    </div>
  );
}

export default Notes;
