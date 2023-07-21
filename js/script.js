'use strict';
document.addEventListener("DOMContentLoaded", createBlock);
document.addEventListener("DOMContentLoaded", createDiv);
function createBlock() {
  let main = document.getElementById('main');
  let section = document.createElement('section')
  section.id = 'section';
  main.insertAdjacentElement('afterbegin', section);
};
function createDiv() {
  let section = document.getElementById('section');
  let textDiv = document.createElement('div');
  textDiv.id = 'text';
  textDiv.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  section.insertAdjacentElement('afterbegin', textDiv);
};

document.addEventListener('keydown', function (event) {
  
  if (event.ctrlKey && event.key === 'e' || event.key === 'у') {
    event.preventDefault(); 
    let section = document.getElementById('section');
    let textDiv = document.getElementById('text');
    let textTemp = textDiv.innerText;
    textDiv.remove();
    let textEditor = document.createElement('textarea');
    textEditor.id = 'text';
    textEditor.innerText = textTemp;
    textEditor.rows = '10';
    textEditor.cols = '70';
    section.insertAdjacentElement('afterbegin', textEditor);
    textEditor.focus();
  }
   if (event.ctrlKey && event.key === 's' || event.key === 'ы') {
    event.preventDefault();
    let textEditor = document.getElementById('text');
    let textTemp = textEditor.value;
    textEditor.remove();
    let section = document.getElementById('section');
    let textDiv = document.createElement('div');
    textDiv.id = 'text';
    textDiv.innerText = textTemp;
    section.insertAdjacentElement('afterbegin', textDiv);
    
  }
});

// *******************
