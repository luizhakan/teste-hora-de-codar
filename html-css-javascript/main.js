// Buscando os elementos da página
const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");
const teste = itemList.getElementsByTagName("span");
// Adicionando os Eventos
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", buscarItems);
// Adiciona Item
function addItem(event) {
  event.preventDefault();
  const newItem = document.getElementById("item").value;
  const li = document.createElement("li");
  li.className = "list-group-item";
  const liTxt = document.createElement("span");
  liTxt.appendChild(document.createTextNode(newItem));
  li.appendChild(liTxt);
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-end delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
  form.reset();
  saveItems();
}
// Remover Itens
function removeItem(event) {
  if (event.target.classList.contains("delete")) {
    const li = event.target.parentElement;
    itemList.removeChild(li);
  }
  saveItems();
}
// Procurar Itens
function buscarItems(event) {
  const text = event.target.value.toLowerCase();
  const items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent.toLowerCase();
    const display = itemName.includes(text) ? "block" : "none";
    item.style.display = display;
  });
}
// Salva os itens no localStorage
function saveItems() {
  const items = [];
  const lis = itemList.getElementsByTagName("span");
  for (let i = 0; i < lis.length; i++) {
    items.push(lis[i].textContent);
  }
  localStorage.setItem("items", JSON.stringify(items));
}
// Carrega os itens do localStorage
function loadItems() {
  const items = JSON.parse(localStorage.getItem("items"));
  if (items) {
    for (let i = 0; i < items.length; i++) {
      const li = document.createElement("li");
      li.className = "list-group-item";
      const liTxt = document.createElement("span");
      liTxt.appendChild(document.createTextNode(items[i]));
      li.appendChild(liTxt);
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-danger btn-sm float-end delete";
      deleteBtn.appendChild(document.createTextNode("X"));
      li.appendChild(deleteBtn);
      itemList.appendChild(li);
    }
  }
}
// Carrega os itens do localStorage ao carregar a página
loadItems();
