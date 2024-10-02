function getNoteTemplate(indexNote) {
  return `
    <div class="note_box">
      <h3>${allNotes.notesTitles[indexNote]}</h3>
      <p>${allNotes.notes[indexNote]}</p>
      <div class="button_container">
      <button class="button_notes_trash" onclick="moveNote(${indexNote},'notes','trashNotes')"><img class="trash_icon_button" src="./assets/icons/mulleimer.png" alt=""></button>
      <button class="button_notes_trash" onclick="moveNote(${indexNote},'notes','archiveNotes')">A</button>
      </div>
    </div>
  `;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `
    <div class="note_box">
      <h3>${allNotes.trashNotesTitles[indexTrashNote]}</h3>
      <p>${allNotes.trashNotes[indexTrashNote]}</p>
      <div class="button_container">
      <button class="button_notes_trash" onclick="moveNote(${indexTrashNote},'trashNotes','notes')"><img class="trash_icon_button" src="./assets/icons/notiz.png" alt=""></button>
      <button class="button_delete" onclick="deleteNotes(${indexTrashNote})">X</button>
      </div>
    </div>
  `;
}

function getArchiveNoteTemplate(indexArchiveNote) {
  return `
    <div class="note_box">
      <h3>${allNotes.archiveNotesTitles[indexArchiveNote]}</h3>
      <p>${allNotes.archiveNotes[indexArchiveNote]}</p>
      <div class="button_container">
      <button class="button_notes_trash" onclick="moveNote(${indexArchiveNote},'archiveNotes','notes')"><img class="trash_icon_button" src="./assets/icons/notiz.png" alt=""></button>
      <button class="button_delete" onclick="deleteNotes(${indexArchiveNote})">X</button>
      </div>
    </div>
  `;
}
