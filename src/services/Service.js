import { db } from "../Componenets/Firebase";
import { ref, push, set, update, remove, get, child } from "firebase/database";

// Fetch user-specific notes
export const fetchUserNotes = async (uid, user) => {
  try {
    if (!user) {
      console.error("No authenticated user.");
      return [];
    }
    const noteRef = ref(db);
    const snapshot = await get(child(noteRef, `users/${uid}/notes`));
    // console.log(snapshot.exists());
    if (snapshot.exists()) {
      const notesData = snapshot.val();
      const notesArray = Object.keys(notesData).map(id => ({ id, ...notesData[id] }));
      // console.log("User's Notes:", notesArray);
      return notesArray;
    } else {
      console.log("No notes found for the user.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching user notes: ", error);
    return [];
  }
};


// Add a new note
export const addNote = async (uid, note) => {
  try {
    const notesRef = ref(db, `users/${uid}/notes`);
    const newNoteRef = push(notesRef);
    await set(newNoteRef, note);
    return newNoteRef.key;
  } catch (error) {
    console.error("Error adding note: ", error);
  }
};

// Update an existing note
export const updateNote = async (uid, id, data) => {
  try {
    const noteRef = ref(db, `users/${uid}/notes/${id}`);
    await update(noteRef, data);
  } catch (error) {
    console.error("Error updating note: ", error);
  }
};

// Delete a note
export const deleteNote = async (uid, id) => {
  try {
    const noteRef = ref(db, `users/${uid}/notes/${id}`);
    await remove(noteRef);
  } catch (error) {
    console.error("Error deleting note: ", error);
  }
};
