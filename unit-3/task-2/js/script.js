// Заменить словосочетание javascript в параграфе  на JAVASCRIPT.
let out = document.querySelector('.out');
let btn = document.querySelector('.btn');
// Как то так
btn.onclick = () => {
    out.textContent = out.textContent.replace(/javascript/g, 'JAVASCRIPT');
};