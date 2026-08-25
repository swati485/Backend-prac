import { useState,useEffect } from 'react'
import axios from "axios"


function App() {

  const [notes, setNotes] = useState([])

  function fetchNotes(){
     axios.get('http://localhost:3000/api/notes')
      .then((res) => {
        setNotes(res.data.notes)
      })
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  function handleSubmit(e){
    e.preventDefault()

    const {title,description}=e.target.elements

    console.log(title.value,description.value)

    axios.post("http://localhost:3000/api/notes",{
      title:title.value,
      description:description.value
    })
    .then(res=>{
      console.log(res.data)
      e.target.reset()
      fetchNotes()
    }
  )}

  function handleDeleteNote(noteId){
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then(res=>{
      console.log(res.data)
      fetchNotes()
    })
  }

  function handleUpdateNote(noteId) {
  const title = prompt("Enter new title")
  const description = prompt("Enter new description")

  axios.patch("http://localhost:3000/api/notes/" + noteId, {
    title: title,
    description: description
  })
  .then(res => {
    console.log(res.data)
    fetchNotes()
  })
}
  
  return (
    <>
    <h1 className="page-title">Notes Manager</h1>
  
    <form className='note-create-form' onSubmit={handleSubmit}>
      <input name='title' type="text" placeholder='Enter Title' />
      <input name='description' type="text" placeholder='Enter Description'/>
      <button>Create Note</button>
    </form>

      <div className="notes">
        {
          notes.map(note => {
            return <div className="note" key={note._id}>
              
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <div className="note-buttons">
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteNote(note._id)}
                >
                  Delete
                </button>

                <button
                  className="update-btn"
                  onClick={() => handleUpdateNote(note._id)}
                >
                  Update
                </button>
              </div>
            </div>

          })
        }
      </div>
    </>
  )
}

export default App
