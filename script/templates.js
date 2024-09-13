function getNoteTemplate(indexNote) {
  return `
    <div class="note_box">
      <h3>${notesTitles[indexNote]}</h3>
      <p>${notes[indexNote]}</p>
      <div class="button_container">
      <button class="button_notes_trash" onclick="noteToTrash(${indexNote})"><img class="trash_icon_button" src="./assets/icons/mulleimer.png" alt=""></button>
      <button class="button_delete" onclick="deleteNoteFromNotes(${indexNote})">X</button>
      </div>
    </div>
  `;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `
    <div class="note_box">
      <h3>${trashNoteTitles[indexTrashNote]}</h3>
      <p>${trashNotes[indexTrashNote]}</p>
      <div class="button_container">
      <button class="button_notes_trash" onclick="restoreNote(${indexTrashNote})"><img class="trash_icon_button" src="./assets/icons/notiz.png" alt=""></button>
      <button class="button_delete" onclick="deleteNote(${indexTrashNote})">X</button>
      </div>
    </div>
  `;
}
