// const link = document.querySelector(".link");
// link.classList.add("special");
// link.classList.remove("is-active");
// console.log(link.classList);
// // ["link", "special", length: 2, value: "link special"]

// const link = document.querySelector(".link");
// console.log(link.href); // "https://goit.global"
// link.href = "https://neo.goit.global";
// console.log(link.href); // "https://neo.goit.global"

// const link = document.querySelector(".link");
// console.log(link.classList);

// const hasActiveClass = link.classList.contains("is-active");
// console.log(`hasActiveClass - ${hasActiveClass}`);

// link.classList.add("special");
// console.log(link.classList);

// link.classList.remove("is-active");
// console.log(link.classList);

// link.classList.toggle("is-active");
// console.log(link.classList);

// link.classList.replace("special", "regular");
// console.log(link.classList);

// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Rocks and waterfall"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature
// console.log(image.attributes);

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// // Змінюємо значення data-action для кнопки saveBtn
// saveBtn.dataset.action = "update";

// // Додаємо новий data-атрибут data-role
// saveBtn.dataset.role = "admin";

// // Перевіримо нові значення
// console.log(saveBtn.dataset.action); // "update"
// console.log(saveBtn.dataset.role); // "admin"

// const list = document.querySelector(".usernames");

// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technologi) => `<li class="list-item">${technologi}</li>`)
//   .join("");
// console.log(markup);
// list.innerHTML = markup;

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

// const addListenerBtn = document.querySelector(".js-add");
// const removeListenerBtn = document.querySelector(".js-remove");
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//   console.log("callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("added");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("removed");
// });

// function greet() {
//   console.log("Привіт від callback!");
// }

// function jorik() {
//   console.log("Привіт Жорік");
// }

// function message() {
//   console.log("Знову привіт Жорік");
// }

// function doAction(callback) {
//   console.log("Готуюсь...");
//   callback();
// }

// doAction(greet);
// doAction(jorik);
// doAction(message);

// 🔧 Завдання 2 (новий рівень)
// 🔹 Створи функцію showNumber, яка приймає число і виводить його
// 🔹 Створи функцію processNumber, яка приймає число і функцію
// 🔹 Усередині processNumber, виклич цю функцію з переданим числом

// function showNumber(op) {
//   console.log(op);
// }

// function processNumber(number, callback) {
//   callback(number);
// }

// processNumber(42, showNumber);

// 🔹 Завдання 3:
// 🔸 Створи функцію checkEven, яка виводить "парне" або "непарне" число
// 🔸 Створи processValue, яка приймає число та callback
// 🔸 Виклич callback всередині processValue і передай у нього число

// function processValue(check) {
//   if (check % 2 === 0) {
//     console.log("парне");
//   } else {
//     console.log("непарне");
//   }
// }

// function checkEven(number, callback) {
//   callback(number);
//   return callback;
// }

// checkEven(41, processValue);

// const Btn = document.querySelector(".js-check-btn");
// const handleClick = () => {
//   console.log("click click");
// };

// Btn.addEventListener("click", handleClick);

// const btn = document.querySelector(".btn-check");

// function sayhello() {
//   console.log("Жорік привіт");
// }

// btn.addEventListener("click", () => {
//   sayhello();
// });

// const saveBtn = document.querySelector(".link");

// console.log(link.getAttribute("href"));

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const headingElement = document.createElement("h1");
// headingElement.classList.add("title");
// headingElement.textContent = "Hello";
// console.log(headingElement);

// const imgElement = document.createElement("img");

// imgElement.alt = "fdsdfsdfs";
// imgElement.width = 420;
// imgElement.classList.add = "dcsadasd";
// console.log(imgElement);

// const userList = document.querySelector(".usernames");

// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// userList.append(lastItem);

// const firstItem = document.createElement("li");
// firstItem.textContent = "Giga";
// userList.prepend(firstItem);

// console.log(userList);
// userList.remove();
// console.log(userList);

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';
// console.log(title);

// const items = ["li1", "li2", "li3", "li4", "li5", "li6"];
// const list = document.querySelector(".list");

// const a = items.map((item) => `<li>${item}</li>`).join("");
// console.log(a);

// list.innerHTML = a;
// console.log(list);

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// const items = ["li1", "li2", "li3", "li4", "li5", "li6"];
// const list = document.querySelector(".list");

// const a = items.map((item) => `<li> ${item} </li>`).join("");
// console.log(a);
// list.insertAdjacentHTML("beforeend", a);
// console.log(list);

// const addListenerBtn = document.querySelector(".js-add");
// const removeListenerBtn = document.querySelector(".js-remove");
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });

// const clearLogBtn = document.querySelector(".js-clear");
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// console.log(clearLogBtn);

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;

//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
// }

const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput.blur();
});

textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
});
