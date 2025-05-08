function addNote() {
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
    const emptyMessage = document.getElementById("empty-message");
  
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
  
    if (!title || !content) {
      alert("Both fields are required!");
      return;
    }
  
    // Hide the "no notes yet" message
    if (emptyMessage) {
      emptyMessage.style.display = "none";
    }
  
    // Display the note (optional, if you want to show it)
    const notesDisplay = document.querySelector(".note-display");
  
    const noteItem = document.createElement("div");
    noteItem.classList.add("note-item");
    noteItem.innerHTML = `<strong>${title}</strong><br>${content}`;
    notesDisplay.appendChild(noteItem);
  
    // Clear input fields
    titleInput.value = "";
    contentInput.value = "";
  }
  