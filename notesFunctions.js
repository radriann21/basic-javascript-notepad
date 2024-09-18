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

export function deleteTask(noteId, notes, note) {
  const newNotes = notes.filter(note => note.id !== noteId)
  localStorage.setItem('notes', JSON.stringify(newNotes))
  note.remove()
}

export function renderNotes(notes, notesContainer) {
  if (!Array.isArray(notes)) return 

  notes.forEach(note => {
    const li = document.createElement('li')
    li.setAttribute('data-id', note.id)
    li.classList.add('element')
    li.innerHTML = `
        <button class="close" id="close">X</button>
        <h3>${note.title}</h3>
        <p>${note.desc}</p>
      `
    notesContainer.appendChild(li)
  })

  notesContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('close')) {
      const note = evt.target.parentNode
      const noteId = note.getAttribute('data-id')
      const notes = JSON.parse(localStorage.getItem('notes'))
      deleteTask(noteId, notes, note)
    }
  })
}

export function writeCharacters(chars, description) {
  description.addEventListener('input', (evt) => {
    let number = evt.target.value.length
    if (number <= 500) {
      chars.innerText = number
    } 
  })
}