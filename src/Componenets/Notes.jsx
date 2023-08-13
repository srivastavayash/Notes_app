import React, { useEffect, useState } from 'react'
import "./Notes.css"
import { heart, pen, Delete, redHeart } from '../Assets/index'


function Notes({val, childCallback, descCallback,onDelete }) {
  const [archived, setArchived] = useState(heart);
  const handleClick = () => {
    setArchived(prevstate => prevstate === heart ? redHeart : heart);
  };
  useEffect(() => {
    childCallback(archived);
  });

  return (
    <div className='Notesbox'>
      <div className='titleArchived'>
        <input type="text" id='title' key={val} placeholder='Title' />
        <span className='imgheart'> <img src={archived} alt="star" key={val} id='archived' className='imgi' onClick={handleClick} /></span>
      </div>
      
      <textarea name="Notes" key={val} id='textbox' spellCheck="false" placeholder='Enter Your Notes' cols="20" rows="2" wrap='soft'></textarea>
      <div className='footer'>
        <button className='modify'><img src={pen} alt="modify" className='imgmod' /></button>
        <button className='delete'><img src={Delete} alt="delete" key={val} className='imgdel' onClick={onDelete} /></button>
      </div>
    </div>
  )
}

export default Notes