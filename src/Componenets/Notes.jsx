import React, { useEffect, useState } from 'react';
import "./Notes.css";
import { heart, redHeart, pen, Delete } from '../Assets/index';

function Notes({ id, textColor, archived, childCallback, descval, onDelete }) {
  const [data, setData] = useState("");

  const handleClick = () => {
    const newArchived = archived === heart ? redHeart : heart;
    childCallback(id, newArchived);
  };

  const textareaStyle = {
    color: textColor,
  };

  useEffect(() => {
    descval(data);
  }, [data, descval]);

  return (
    <div className='Notesbox'>
      <div className='titleArchived'>
        <input type="text" id='title' placeholder='Title' />
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

