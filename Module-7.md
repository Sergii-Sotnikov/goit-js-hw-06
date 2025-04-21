# Пошук елементів

- element.querySelector(selector) - Використовується, якщо необхідно знайти тільки один, найчастіше унікальний елемент.
- element.querySelectorAll(selector) - Використовується, якщо необхідно знайти колекцію елементів, тобто отримати масив посилань на елементи з однаковим селектором

# Доступ до властивостей

<a class="link" href="https://goit.global">GoIT</a>;
const link = document.querySelector(".link");
console.log(link.href); // "https://goit.global"

\*зміна атрибутів
Значення атрибутів можна змінювати
const link = document.querySelector(".link");
console.log(link.href); // "https://goit.global"
link.href = "https://neo.goit.global";
console.log(link.href); // "https://neo.goit.global"

# Властивість textContent

const el = document.querySelector(".text")
const nested = document.querySelector(".sub-text")
console.log(el.textContent); // "Username: Mango"
console.log(nested.textContent); // "Mango"
const el = document.querySelector(".text")
console.log(el.textContent); // "Username: Mango"
el.textContent = "Username: Poly";

# Властивість classList

<a class="link is-active" href="https://goit.global">GoIT</a>
const link = document.querySelector(".link");
console.log(link.classList);
// ["link", "is-active", length: 2, value: "link is-active"]

- Метод classList.contains(className)
  <a class="link is-active" href="https://goit.global">GoIT</a>
  const link = document.querySelector(".link");
  const hasActiveClass = link.classList.contains("is-active"); // true
  const hasActiveClass = link.classList.contains("title"); // false

- Метод classList.add(className)
  <a class="link is-active" href="https://goit.global">GoIT</a>
  const link = document.querySelector(".link");
  link.classList.add("special");
  console.log(link.classList);
  // ["link", "is-active", "special", length: 3, value: "link is-active special"]

- Метод classList.remove(className)
  <a class="link is-active" href="https://goit.global">GoIT</a>
  const link = document.querySelector(".link");
  link.classList.remove("is-active");
  console.log(link.classList);
  // ["link", "special", length: 2, value: "link special"]

- Метод classList.toggle(className)
  link.classList.toggle("is-active");
  console.log(link.classList);
  // ["link", "special", "is-active", length: 3, value: "link special is-active"]

- Метод classList.replace(oldClassName, newClassName)
  link.classList.replace("special", "regular");
  console.log(link.classList);
  // ["link", "regular", "is-active", length: 3, value: "link regular is-active"]

  # Доступ до атрибутів

- Метод element.hasAttribute(nameAttribute)
  <img class="image" src="https://picsum.photos/id/15/320/240" alt="Rocks and waterfall" width="300" />
  const image = document.querySelector(".image");
  console.log(image.hasAttribute("src")); // true
  console.log(image.hasAttribute("href")); // false

- Метод element.getAttribute(nameAttribute)
  <img class="image" src="https://picsum.photos/id/15/320/240" alt="Rocks and waterfall" width="300" />
  console.log(image.getAttribute("alt")); // "Rocks and waterfall"

- Метод element.setAttribute(nameAttribute, value)
  <img class="image" src="https://picsum.photos/id/15/320/240" alt="Rocks and waterfall" width="300" />
  image.setAttribute("alt", "Amazing nature");
  console.log(image.getAttribute("alt")); // Amazing nature

- Метод element.removeAttribute(nameAttribute)
  image.removeAttribute("alt");
  console.log(image.hasAttribute("alt")); // false

  # Власні атрибути

  <button type="button" data-action="save">Save text</button>
  <button type="button" data-action="close">Close editor</button>
  const saveBtn = document.querySelector('button[data-action="save"]');
  console.log(saveBtn.dataset.action); // "save"
  const closeBtn = document.querySelector('button[data-action="close"]');
  console.log(closeBtn.dataset.action); // "close"

- Зміна значень
  // Змінюємо значення data-action для кнопки saveBtn
  saveBtn.dataset.action = "update";
  // Додаємо новий data-атрибут data-role
  saveBtn.dataset.role = "admin";
  // Перевіримо нові значення
  console.log(saveBtn.dataset.action); // "update"
  console.log(saveBtn.dataset.role); // "admin"

  # Створення елементів

  document.createElement(tagName)
  const heading = document.createElement("h1");

  const heading = document.createElement("h1");
  headding.classList.add("title");
  heading.textContent = "This is a heading";
  console.log(heading); // <h1 class="title">This is a heading</h1>

const image = document.createElement("img");
image.src = "https://picsum.photos/id/11/320/240";
image.alt = "Nature";
console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />

# Додавання елементів

elem.append(el1, el2, ...) — додає один або декілька елементів після всіх дітей елемента elem.
elem.prepend(el1, el2, ...) — додає один або декілька елементів перед усіма дітьми елемента elem.

# Видалення елементів

<p class="text">Random text content</p>
const text = document.querySelector(".text")
text.remove();

# Властивість innerHTML

# Метод insertAdjacentHTML()

element.insertAdjacentHTML(position, string) //
position може бути:

- "beforebegin" — перед element
- "afterbegin" — всередині element, перед усіма дітьми
- "beforeend" — всередині element, після усіх дітей
- "afterend" — після element

const list = document.querySelector(".list");
const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
.map((technology) => `<li class="list-item new">${technology}</li>`)
.join("");
list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

//!===================================================
Події

# Метод addEventListener()

Слухач події — це механізм, який "слухає" або "очікує" на виникнення певної події. Метод addEventListener() додає слухача події на елемент.

<button id="single" class="btn">SINGLE CALLBACK</button>

<hr>
<button id="multiple" class="btn">MULTIPLE CALLBACKS</button>
const singleBtn = document.querySelector("#single");
const handleClick = () => {
  console.log("click event listener callback");
};
singleBtn.addEventListener("click", handleClick);

const multiBtn = document.querySelector("#multiple");
const firstCallback = () => {
console.log("First callback!");
};
const secondCallback = () => {
console.log("Second callback!");
};
const thirdCallback = () => {
console.log("Third callback!");
};
multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);

# Метод removeEventListener()

Метод removeEventListener() видаляє слухача події з елемента.

const button = document.querySelector(".btn");
const handleClick = (event) => {
console.log("event: ", event); // PointerEvent {isTrusted: true, pointerId: 1,width: 1, height: 1, pressure: 0, …}

console.log("event type: ", event.type); // click
console.log("currentTarget: ", event.currentTarget);
}; // <button class="btn">Next</button>
button.addEventListener("click", handleClick);

# Об'єкт події

const handleClick = event => {
console.log(event);
};
button.addEventListener("click", handleClick);

# Події клавіатури

- keydown — подія, що відбувається при натисканні клавіші
- keyup — подія, що відбувається, коли клавішу відпустили

document.addEventListener("keydown", event => {
console.log("Keydown: ", event);
});

document.addEventListener("keyup", event => {
console.log("Keyup: ", event);
});

# Властивості key і code

Властивість об’єкта події key повертає символ, згенерований натисканням клавіші на клавіатурі. Ця властивість враховує:

- стан клавіш-модифікаторів, наприклад Shift
- поточну мову
  Властивість об’єкта події code повертає код фізичної клавіші на клавіатурі й не залежить від мови та стану клавіш-модифікаторів.

Властивість об’єкта події code повертає код фізичної клавіші на клавіатурі й не залежить від мови та стану клавіш-модифікаторів.

document.addEventListener("keydown", event => {
console.log("key: ", event.key);
console.log("code: ", event.code);
});

# Подія submit

Відправлення форми відбувається:

- при кліку на кнопку з атрибутом type="submit"
- при натисканні клавіші Enter під час перебування в будь-якому її текстовому полі форми

const form = document.querySelector("form");
form.addEventListener("submit", event => {
// ...
});

- preventDefault()
  Для скасування дії браузера за замовчуванням в об'єкта події є стандартний метод .
  const form = document.querySelector("form");
  form.addEventListener("submit", event => {
  event.preventDefault();
  });

const registerForm = document.querySelector(".form");
registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
event.preventDefault();
const form = event.target;
const login = form.elements.login.value;
const password = form.elements.password.value;
if (login === "" || password === "") {
return console.log("Please fill in all the fields!");
}
console.log(`Login: ${login}, Password: ${password}`);
form.reset();
}

# Подія change

Подія change відбувається після зміни елемента форми.

const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
const selectedOptionValue = event.currentTarget.value;
const selectedOptionIndex = event.currentTarget.selectedIndex;
const selectedOptionText =
event.currentTarget.options[selectedOptionIndex].text;

textOutput.textContent = selectedOptionText;
valueOutput.textContent = selectedOptionValue;}

# Подія input

const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");
textInput.addEventListener("input", (event) => {
output.textContent = event.currentTarget.value;
});

# Подія focus і blur

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
