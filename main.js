document.addEventListener('DOMContentLoaded', () => {
  let notes = []
  if (!localStorage.getItem('notes')) {
    localStorage.setItem('notes', JSON.stringify(notes))
  } else {
    notes = JSON.parse(localStorage.getItem('notes'))
  }

  const desc = document.getElementById('description')
  const form = document.getElementById('form')

  form.addEventListener('submit', (evt) => {
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
  })
})




