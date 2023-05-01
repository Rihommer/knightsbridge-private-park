let button = document.getElementById('js-more');
let element = document.getElementById('js-element');

button.onclick = function() {
    element.classList.add('active');
    button.remove()
  }
