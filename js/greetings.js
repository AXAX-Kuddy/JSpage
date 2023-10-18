const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const loginIcon = document.querySelector("#login-icon");
const afterLogin = document.querySelector("#after-login");
const greeting = document.querySelector("#greeting");
const weather = document.querySelector("#weather");

const HIDDEN_CLASSNAME = "hidden";
const FLEX_CLASSNAME = "flex";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.className = HIDDEN_CLASSNAME;
  loginIcon.className = HIDDEN_CLASSNAME;
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}
loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  afterLogin.className = FLEX_CLASSNAME;
  greeting.innerText = `${username}. Wellcome!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  weather.className = FLEX_CLASSNAME;
  loginForm.className = HIDDEN_CLASSNAME;
  loginIcon.className = HIDDEN_CLASSNAME;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.className = FLEX_CLASSNAME;
  loginIcon.className = FLEX_CLASSNAME;
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
