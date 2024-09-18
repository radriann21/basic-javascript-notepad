import { setNote, renderNotes, writeCharacters } from "./notesFunctions.js"

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form')
  const notesContainer = document.getElementById('notesContainer')
  let notes = JSON.parse(localStorage.getItem('notes')) || []
  
  const description = document.getElementById('description')
  const chars = document.getElementById('number')

  writeCharacters(chars, description)
  renderNotes(notes, notesContainer)
  form.addEventListener('submit', (evt) => {
    setNote(notes, evt, notesContainer)
  })
})




