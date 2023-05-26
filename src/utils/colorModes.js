// first, useful variables to neaten things up:
const htmlRoot = document.querySelector("html");
const colorScheme = document.querySelector('meta[name="color-scheme"]');
const mode = sessionStorage.getItem("mode");
const contrastMode = sessionStorage.getItem("contrastMode");

// set color-scheme to dark
function switchDark() {
  colorScheme.setAttribute("content", "dark");
  htmlRoot.classList.add("dark-mode");
  sessionStorage.setItem("mode", "dark");
}
// set color-scheme to light
function switchLight() {
  colorScheme.setAttribute("content", "light");
  htmlRoot.classList.remove("dark-mode");
  sessionStorage.setItem("mode", "light");
}
// set contrast to high
function switchHigh() {
  htmlRoot.classList.add("high-contrast");
  sessionStorage.setItem("contrastMode", "high");
}
// set contrast to normal
function switchNormal() {
  htmlRoot.classList.remove("high-contrast");
  sessionStorage.removeItem("contrastMode");
}

//check for session preferences
if (mode) {
  if (mode === "dark") {switchDark();}
  else if (mode === "light") {switchLight();}
}
if (contrastMode) {
  if (contrastMode) {switchHigh();}
}

// check for color-scheme, if not set, then...
if (colorScheme.content === "dark light") {
  // ..if user OS is in dark mode...
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // ..add dark-mode class to html element
    htmlRoot.classList.add("dark-mode");
  }
}
// check for contrast, if not set, then...
if (!htmlRoot.classList.contains("high-contrast")) {
  // ..if user OS is in high contrast mode...
  if (window.matchMedia && window.matchMedia('(prefers-contrast: more)').matches) {
    // ..add dark-mode class to html element
    htmlRoot.classList.add("high-contrast");
  }
}

function toggleMode() {
  // check for color-scheme, if not set, then...
  if (colorScheme.content === "dark light") {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      switchLight();
    } else {
      switchDark();
    }
  } else if (colorScheme.content === "light") {
    switchDark();
  } else if (colorScheme.content === "dark") {
    switchLight();
  }
}

function toggleContrast() {
  if (htmlRoot.classList.contains("high-contrast")) {
    switchNormal();
  } else {
    switchHigh();
  }
}

// now we can to check for live changes, by adding an
// event listener in case our user flips the OS mode
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  // only run if the html element color-scheme is not set
  if (colorScheme.content === "dark light") {
    // add/remove dark mode to match OS setting
    if(event.matches) {
      htmlRoot.classList.add("dark-mode");
    } else {
      htmlRoot.classList.remove("dark-mode");
    }
  }
});