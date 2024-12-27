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
        data.forEach((note, index) => {
            const noteElement = document.createElement('div');
            noteElement.textContent = note.content;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function() {
                deleteNote(index);
            };

            noteElement.appendChild(deleteButton);
            notesDiv.appendChild(noteElement);
        });
    });
}

function deleteNote(index) {
    fetch(`${apiUrl}/${index}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            loadNotes();
        } else {
            console.error('Failed to delete note');
        }
    })
    .catch(error => console.error('Error:', error));
}

window.onload = loadNotes;
