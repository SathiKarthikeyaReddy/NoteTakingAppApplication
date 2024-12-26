const apiUrl = 'http://localhost:8080/notes';

function saveNote() {
    const noteContent = document.getElementById('noteArea').value;
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: noteContent })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('noteArea').value = '';
        loadNotes();
    })
    .catch(error => console.error('Error:', error));
}

function loadNotes() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const notesDiv = document.getElementById('savedNotes');
        notesDiv.innerHTML = '';
        data.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.textContent = note.content;
            notesDiv.appendChild(noteElement);
        });
    });
}

window.onload = loadNotes;
