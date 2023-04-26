//DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);


document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode;
    console.log(valeur)
})