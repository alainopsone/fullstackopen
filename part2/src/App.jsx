import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Al Hes' }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input className='p-1 border-[1px] rounded-md border-solid border-slate-800' value={newName} onChange={handlePersonChange} />
          <div>debug: {newName}</div>
        </div>
        <div>
          <button
            className='p-1 border-[1px] rounded-md border-solid border-slate-800'
            type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(person => <Person key={person.name} name={person.name} />)}
        </ul>
      </div>
    </div>
  )
}

export default App