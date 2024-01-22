import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNotes] = useState('new note...')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event)=> {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNotes('')
  }

  const handleNoteChange = (event) => {
    setNewNotes(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button
          className='border-[1px] border-solid rounded-sm border-blue-900'
          onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>

      <form onSubmit={addNote}>
          <input
            value={newNote}
            onChange={handleNoteChange}
            className='border-[1px] border-solid rounded-sm border-blue-900'
            type='text' />
          <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App