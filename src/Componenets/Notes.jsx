import React, { useState } from 'react'
import "./Notes.css"
import { heart, pen, Delete, redHeart } from '../Assets/index'
function Notes(props) {
  const [archived, setArchived] = useState(heart);
  const handleClick = () => {
    setArchived(prevstate => prevstate === heart ? redHeart : heart);
  };
  return (
    <div className='Notesbox'>
      <div className='titleArchived'>
        <input type="text" id='title' placeholder='Title' />
        <span className='imgheart'> <img src={archived} alt="star" id='archived' className='imgi' onClick={handleClick} /></span>
      </div>
      {/* <input type="text" id='textbox' placeholder='Enter Your Notes'/>       */}
      <textarea name="Notes" id='textbox' spellCheck="false" placeholder='Enter Your Notes' cols="20" rows="2" wrap='soft'></textarea>
      <div className='footer'>
        <button className='modify'><img src={pen} alt="modify" className='imgmod' /></button>
        <button className='delete'><img src={Delete} alt="delete" className='imgdel' /></button>
      </div>
    </div>
  )
}

export default Notes