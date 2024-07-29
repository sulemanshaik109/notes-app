import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdDeleteOutline } from "react-icons/md";
import "../styles.css"

const API_BASE_URL = "https://suleman-notes-app.onrender.com"

const NoteList = ({ onNoteDeleted }) => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/notes`);
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}api/notes/${id}`);
      onNoteDeleted();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [onNoteDeleted]);


  return (
    <div className='list-container'>
        <h2 className='notes-list-heading'>Saved Notes</h2>
        <ul className='notes-list'>
        {notes.map((note) => (
            <li key={note.id} className='list-item'>
                <div className='note-header'>
                    <h3 className='note-title'>{note.title}</h3>
                    <button className='button delete' onClick={() => handleDelete(note.id)}>
                        <MdDeleteOutline size={20}/>
                    </button>
                </div>
                <p className='note-description'>{note.description}</p>
                <p className='date'>{new Date(note.created_at).toLocaleString()}</p>
            </li>
        ))}
    </ul>
    </div>
  );
};

export default NoteList;
