export function setNote(notes, evt, notesContainer) {
  evt.preventDefault()

  const formData = new FormData(evt.target)
  const noteObj = {
    id: crypto.randomUUID()
  }

  formData.forEach((value, key) => {
    noteObj[key] = value
  })
  notes.push(noteObj)
  localStorage.setItem('notes', JSON.stringify(notes))
  renderNotes([noteObj], notesContainer)
}

export function renderNotes(notes, notesContainer) {
  if (!Array.isArray(notes)) return 
  notes.forEach(note => {
    const li = document.createElement('li')
    li.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.desc}</p>
      `
    notesContainer.appendChild(li)
  })
}