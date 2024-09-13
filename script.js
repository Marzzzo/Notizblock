let notesTitles = [];
let notes = [];

let trashNoteTitles = [];
let trashNotes = [];

function init() {
  getFromLocalStorage();
  renderNotes();
  renderTrashNotes();
  updateItemCount();
}

function updateItemCount() {
  const itemCountElement = document.getElementById("item_count");

  let itemCount = trashNotes.length;

  if (itemCount > 0) {
    itemCountElement.style.display = "block";
    itemCountElement.textContent = itemCount;
  } else {
    itemCountElement.style.display = "none";
  }
}

function saveToLocalStorage() {
  localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("trashNoteTitles", JSON.stringify(trashNoteTitles));
  localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
}

function getFromLocalStorage() {
  if (localStorage.getItem("notesTitles")) {
    notesTitles = JSON.parse(localStorage.getItem("notesTitles"));
    notes = JSON.parse(localStorage.getItem("notes"));
  }

  if (localStorage.getItem("trashNoteTitles")) {
    trashNoteTitles = JSON.parse(localStorage.getItem("trashNoteTitles"));
    trashNotes = JSON.parse(localStorage.getItem("trashNotes"));
  }
}

function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderTrashNotes() {
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";

  for (
    let indexTrashNote = 0;
    indexTrashNote < trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

function addNote() {
  let noteInputRef = document.getElementById("note_input");
  let titleInputRef = document.getElementById("title_input");
  let errorMessageRef = document.getElementById("error-message");

  if (titleInputRef.value.trim() === "" || noteInputRef.value.trim() === "") {
    errorMessageRef.textContent =
      "Bitte füllen Sie sowohl das Titel- als auch das Notizfeld aus!";
    errorMessageRef.style.display = "block";
    return;
  }

  errorMessageRef.style.display = "none";

  notesTitles.push(titleInputRef.value);
  notes.push(noteInputRef.value);

  saveToLocalStorage();
  renderNotes();
  renderTrashNotes();

  noteInputRef.value = "";
  titleInputRef.value = "";
}

function noteToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashNotes.push(trashNote[0]);

  let trashNoteTitle = notesTitles.splice(indexNote, 1);
  trashNoteTitles.push(trashNoteTitle[0]);

  saveToLocalStorage();
  renderNotes();
  renderTrashNotes();
  updateItemCount();
}

function deleteNoteFromNotes(indexNote) {
  notes.splice(indexNote, 1);
  notesTitles.splice(indexNote, 1);

  saveToLocalStorage();
  renderNotes();
}

function deleteNote(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1);
  trashNoteTitles.splice(indexTrashNote, 1);

  saveToLocalStorage();
  renderNotes();
  renderTrashNotes();
  updateItemCount();
}

function restoreNote(indexTrashNote) {
  let restoredNote = trashNotes.splice(indexTrashNote, 1);
  notes.push(restoredNote[0]);

  let restoredNoteTitle = trashNoteTitles.splice(indexTrashNote, 1);
  notesTitles.push(restoredNoteTitle[0]);

  saveToLocalStorage();
  renderNotes();
  renderTrashNotes();
  updateItemCount();
}

function toggleOverlay() {
  const overlay = document.getElementById("overlay_content");
  if (overlay.style.display === "block") {
    overlay.style.display = "none";
  } else {
    overlay.style.display = "block";
  }
}
