(function () {
  // --- État ---
  let todos = JSON.parse(localStorage.getItem("todo-list") || "[]");
  let editingIdx = null;
  let pendingDeleteIdx = null;

  // --- DOM ---
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");
  const darkBtn = document.getElementById("dark-toggle");
  const overlay = document.getElementById("confirm-overlay");
  const confirmText = document.getElementById("confirm-text");
  const confirmOk = document.getElementById("confirm-ok");
  const confirmCancel = document.getElementById("confirm-cancel");

  // --- Dark mode ---
  let darkMode = localStorage.getItem("todo-dark-mode") === "true" ||
    (localStorage.getItem("todo-dark-mode") === null &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  function applyDark() {
    document.documentElement.classList.toggle("dark", darkMode);
    darkBtn.textContent = darkMode ? "☀️" : "🌙";
    localStorage.setItem("todo-dark-mode", darkMode);
  }
  applyDark();
  darkBtn.addEventListener("click", () => { darkMode = !darkMode; applyDark(); });

  // --- Sauvegarde ---
  function save() {
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }

  // --- Rendu ---
  function render() {
    list.innerHTML = "";
    if (todos.length === 0) {
      list.innerHTML = '<li class="todo-empty">✅ Aucune tâche pour l\'instant.</li>';
      return;
    }
    todos.forEach((todo, idx) => {
      const li = document.createElement("li");
      li.className = "todo-item" + (todo.done ? " done" : "");

      if (editingIdx === idx) {
        // Mode édition
        const inp = document.createElement("input");
        inp.className = "edit-input";
        inp.type = "text";
        inp.value = todo.text;
        inp.addEventListener("keydown", (e) => {
          if (e.key === "Enter") { saveEdit(idx, inp.value); }
          if (e.key === "Escape") { editingIdx = null; render(); }
        });

        const saveBtn = document.createElement("button");
        saveBtn.className = "icon-btn";
        saveBtn.style.background = "#4caf50";
        saveBtn.textContent = "✓";
        saveBtn.onclick = () => saveEdit(idx, inp.value);

        const cancelBtn = document.createElement("button");
        cancelBtn.className = "icon-btn";
        cancelBtn.style.background = "#f44336";
        cancelBtn.textContent = "✕";
        cancelBtn.onclick = () => { editingIdx = null; render(); };

        li.append(inp, saveBtn, cancelBtn);
        list.appendChild(li);
        setTimeout(() => inp.focus(), 0);
      } else {
        // Mode normal
        const span = document.createElement("span");
        span.textContent = (todo.done ? "✅ " : "") + todo.text;
        span.title = todo.done ? "Marquer comme à faire" : "Marquer comme fait";
        span.onclick = () => { todos[idx].done = !todos[idx].done; save(); render(); };

        const actions = document.createElement("div");
        actions.className = "actions";

        const editBtn = document.createElement("button");
        editBtn.className = "icon-btn";
        editBtn.style.background = "#e2b700";
        editBtn.textContent = "✏️";
        editBtn.title = "Modifier";
        editBtn.onclick = () => { editingIdx = idx; render(); };

        const delBtn = document.createElement("button");
        delBtn.className = "icon-btn";
        delBtn.style.background = "#f44336";
        delBtn.textContent = "🗑️";
        delBtn.title = "Supprimer";
        delBtn.onclick = () => showConfirm(idx);

        actions.append(editBtn, delBtn);
        li.append(span, actions);
        list.appendChild(li);
      }
    });
  }

  function saveEdit(idx, value) {
    if (value.trim() === "") return;
    todos[idx].text = value.trim();
    editingIdx = null;
    save();
    render();
  }

  // --- Confirmation suppression ---
  function showConfirm(idx) {
    pendingDeleteIdx = idx;
    confirmText.innerHTML = 'Êtes-vous sûr de vouloir supprimer : <b>' + todos[idx].text + '</b> ?';
    overlay.classList.remove("hidden");
  }

  confirmCancel.onclick = () => { pendingDeleteIdx = null; overlay.classList.add("hidden"); };
  confirmOk.onclick = () => {
    if (pendingDeleteIdx !== null) {
      todos.splice(pendingDeleteIdx, 1);
      if (editingIdx === pendingDeleteIdx) editingIdx = null;
      pendingDeleteIdx = null;
      save();
      render();
    }
    overlay.classList.add("hidden");
  };

  // --- Ajout ---
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim() === "") return;
    todos.push({ text: input.value.trim(), done: false });
    input.value = "";
    save();
    render();
  });

  // --- Init ---
  render();
})();
