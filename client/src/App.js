import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import "./App.css"

const App = () => {
  const [noteUpdated, setNoteUpdated] = useState(false);

  const handleNoteSaved = () => {
    setNoteUpdated(!noteUpdated);
  };

  const handleNoteDeleted = () => {
    setNoteUpdated(!noteUpdated);
  };

  return (
    <div className='app-container'>
      <h1 className='title'>Notes App</h1>
      <NoteForm onNoteSaved={handleNoteSaved} />
      <NoteList onNoteDeleted={handleNoteDeleted} />
    </div>
  );
};

export default App;
