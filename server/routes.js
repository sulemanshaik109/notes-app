const express = require('express');
const router = express.Router();
const db = require('./database');

// Create a new note
router.post('/api/notes', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  db.run(
    'INSERT INTO notes (title, description) VALUES (?, ?)',
    [title, description],
    function (err) {
      if (err) {
        console.error('Error inserting note:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
      res.status(201).json({ id: this.lastID, title, description });
    }
  );
});

// List all notes
router.get('/api/notes', (req, res) => {
  db.all('SELECT * FROM notes', [], (err, rows) => {
    if (err) {
      console.error('Error fetching notes:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.json(rows);
  });
});

// Delete a note
router.delete('/api/notes/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM notes WHERE id = ?', id, function (err) {
    if (err) {
      console.error('Error deleting note:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(204).end();
  });
});

module.exports = router;
