import React, { useEffect, useState } from 'react';
import "./Notes.css";
import { heart, redHeart, pen, Delete } from '../Assets/index';
import { format } from 'date-fns';

function Notes({ id, textColor, dateCreated, archived, childCallback, descval, onDelete }) {

  const [data, setData] = useState("");
  const [val, setVal] = useState("");

  const handleClick = () => {
    const newArchived = archived === heart ? redHeart : heart;
    childCallback(id, newArchived);
  };

  const textareaStyle = {
    color: textColor,
  };

  useEffect(()=>{
    descval(id, data,val);
    // eslint-disable-next-line
  },[data,val])

  return (
    <div className='Notesbox'>
      <div className='titleArchived'>
        <input type="text" id='title' placeholder='Title' value={val} onChange={(e) => setVal(e.target.value)}/>
        <span className='imgheart'>
          <img
            src={archived}
            alt="star"
            id='archived'
            className='imgi'
            onClick={handleClick}
          />
        </span>
      </div>

      <textarea
        name="Notes"
        id="textbox"
        style={textareaStyle}
        spellCheck="false"
        placeholder='Enter Your Notes'
        cols="20"
        rows="2"
        wrap='soft'
        value={data}
        onChange={(e) => setData(e.target.value)}
      ></textarea>
      <div className='footer'>
        <button className='modify'>
          <img src={pen} alt="modify" className='imgmod' />
        </button>
        <p className='time'>{format(dateCreated, 'MMMM d, yyyy HH:mm a')}</p>
        <button className='delete'>
          <img
            src={Delete}
            alt="delete"
            key={id}
            className='imgdel'
            onClick={() => onDelete(id, archived)}
          />
        </button>
      </div>
    </div>
  );
}

export default Notes;

