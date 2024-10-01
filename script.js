let allNotes = {
  notesTitles: [],
  notes: [],
  trashNotesTitles: [],
  trashNotes: [],
};

function init() {
  getFromLocalStorage();
  renderNotes();
  updateItemCount();
}

function moveNote(indexNote, startKey, destinationKey) {
  let note = allNotes[startKey].splice(indexNote, 1);
  allNotes[destinationKey].push(note[0]);
  let notesTitles = allNotes[startKey + "Titles"].splice(indexNote, 1);
  allNotes[destinationKey + "Titles"].push(notesTitles[0]);

  saveToLocalStorage();
  renderNotes();
  updateItemCount();
}

function deleteNotes(indexNote) {
  allNotes.splice(indexNote, 1);

  saveToLocalStorage();
  renderNotes();
  updateItemCount();
}

function renderNotes() {
  let contentRef = document.getElementById("content");
  let trashContentRef = document.getElementById("trash_content");
  contentRef.innerHTML = "";
  trashContentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
  for (
    let indexTrashNote = 0;
    indexTrashNote < allNotes.trashNotes.length;
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
    const smileyIcon =
      '<img class="smiley" src="./assets/icons/smiley.png" alt="Smiley">';

    errorMessageRef.innerHTML = "Bitte beide Felder ausfüllen " + smileyIcon;
    errorMessageRef.style.display = "block";
    return;
  }

  errorMessageRef.style.display = "none";

  allNotes["notesTitles"].push(titleInputRef.value);
  allNotes["notes"].push(noteInputRef.value);

  saveToLocalStorage();
  renderNotes();

  noteInputRef.value = "";
  titleInputRef.value = "";
}

function deleteNotes(indexNote, indexTrashNote) {
  allNotes.notes.splice(indexNote, 1);
  allNotes.notesTitles.splice(indexNote, 1);
  allNotes.trashNotes.splice(indexTrashNote, 1);
  allNotes.trashNotesTitles.splice(indexTrashNote, 1);

  saveToLocalStorage();
  renderNotes();
  updateItemCount();
}

function updateItemCount() {
  let itemCountElement = document.getElementById("item_count");

  let itemCount = allNotes.trashNotes.length;

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

function toggleOverlay() {
  const overlay = document.getElementById("overlay_content");
  if (overlay.style.display === "block") {
    overlay.style.display = "none";
  } else {
    overlay.style.display = "block";
  }
}
