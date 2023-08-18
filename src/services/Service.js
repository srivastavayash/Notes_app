import { db } from "../Componenets/Firebase";
import { ref, push, set, update, remove } from "firebase/database";

//fetching data from database
// export const fetchUserNotes = (userId, onDataUpdate, onError) => {
//     const notesRef = ref(db, 'notes'); // Replace 'notes' with your reference path
  
//     const q = query(notesRef, orderByChild('userId'), equalTo(userId));
  
//     const dataRef = onValue(q, onDataUpdate, onError);
  
//     return () => {
//       off(dataRef, 'value', onDataUpdate);
//     };
//   };
//import { ref, push, set, update, remove, query, orderByChild, equalTo, onValue, off } from "firebase/database";

  
// Add a new note
export const addNote = async (note) => {
    try {
      const notesRef = ref(db, "notes");
      const newNoteRef = push(notesRef);
      await set(newNoteRef, note);
      return newNoteRef.key;
    } catch (error) {
      console.error("Error adding note: ", error);
    }
  };
  
  // Update an existing note
  export const updateNote = async (id, data) => {
    try {
      const noteRef = ref(db, `notes/${id}`);
      await update(noteRef, data);
    } catch (error) {
      console.error("Error updating note: ", error);
    }
  };
  
  // Delete a note
  export const deleteNote = async (id) => {
    try {
      const noteRef = ref(db, `notes/${id}`);
      await remove(noteRef);
    } catch (error) {
      console.error("Error deleting note: ", error);
    }
  };
  