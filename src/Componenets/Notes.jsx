import React from 'react'
import "./Notes.css"
import { heart, pen, Delete } from '../Assets/index'
function Notes(props) {
  return (
    <div className='Notesbox'>
      <div className='titleArchived'>
        <input type="text" id='title' placeholder='Title' />
        <img src={heart} alt="star" id='archived' className='imgi' />
      </div>
      {/* <input type="text" id='textbox' placeholder='Enter Your Notes'/>       */}
      <textarea name="Notes" id='textbox' spellcheck="false" placeholder='Enter Your Notes' cols="20" rows="2" wrap='soft'></textarea>
      <div className='footer'>
        <button className='modify'><img src={pen} alt="modify" className='imgmod' /></button>
        <button className='delete'><img src={Delete} alt="delete" className='imgdel' /></button>
      </div>
    </div>
  )
}

export default Notes