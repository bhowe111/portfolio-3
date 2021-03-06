// Defining localstorage
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

// Retrieve theme choice from local storage, if applicable

let theme = localStorage.getItem('theme')

if(theme === null) {
  setTheme('light')
} else {
  setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function() {
    let mode = this.dataset.mode
    console.log('option clicked:', mode)
    setTheme(mode)
  })
}

function setTheme(mode) {
  if(mode === 'light'){
    document.getElementById('theme-style').href = 'styles/main.css'
  }
  if(mode === 'gold'){
    document.getElementById('theme-style').href = 'styles/gold.css'
  }
  // Store theme choice in local storage
  localStorage.setItem('theme', mode)
}