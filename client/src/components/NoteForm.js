import React, { useState } from 'react';
import axios from 'axios';
import "../styles.css"

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const NoteForm = ({ onNoteSaved }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/notes`, { title, description });
      onNoteSaved();
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
        <div className='input-container'>
            <label className='label' htmlFor='title'>Title</label>
            <input
                type="text"
                className='input'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                id="title"
                required
            />
        </div>
        <div className='input-container'>
            <label className='label' htmlFor='description'>Description</label>
            <textarea
                value={description}
                className='input description'
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                id='description'
                required
            ></textarea>
        </div>
        <button className='button' type="submit">Save</button>
    </form>
  );
};

export default NoteForm;
