const lista = document.querySelector("#lista");
const markBtn = document.querySelector(".mark");
const removeBtns = document.querySelectorAll(".remove");
const textP = document.querySelector(".textP");

removeBtns.forEach((removeBtn) => {
  removeBtn.addEventListener("click", () => {
    removeBtn.parentElement.parentElement.remove();
  });
});

markBtn.addEventListener("click", () => {
  textP.classList.toggle("markUp");
});

const newTask = document.querySelector("#newTask");

newTask.addEventListener("click", task);

function task() {
  const name = prompt("Podaj nazwe taska");
  const content = prompt("Treść taska");
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.classList.add("up");

  const removeBtn = document.createElement("i");
  removeBtn.classList.add("fa-solid");
  removeBtn.classList.add("fa-xmark");
  removeBtn.classList.add("remove");
  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  const markBtn = document.createElement("i");
  markBtn.classList.add("fa-solid");
  markBtn.classList.add("fa-check");
  markBtn.classList.add("mark");

  markBtn.addEventListener("click", () => {
    p2.classList.toggle("markUp");
  });

  const p1 = document.createElement("p");
  p1.classList.add("task");
  p1.textContent = name;
  const p2 = document.createElement("p");
  p2.classList.add("textP");
  p2.textContent = content;

  div.appendChild(removeBtn);
  div.appendChild(markBtn);
  div.appendChild(p1);

  li.append(div);
  li.append(p2);
  lista.append(li);
}
