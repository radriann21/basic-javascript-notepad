import { setNote, renderNotes } from "./notesFunctions.js"

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form')
  const notesContainer = document.getElementById('notesContainer')
  const notes = JSON.parse(localStorage.getItem('notes')) || []

  renderNotes(notes, notesContainer)
  form.addEventListener('submit', (evt) => setNote(notes, evt, notesContainer))
})




