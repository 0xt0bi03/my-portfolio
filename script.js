let btnstate = document.querySelectorAll('.btns');

let about = document.querySelector('.about');
let skills = document.querySelector('.skills');
let projects = document.querySelector('.projects');
let interests = document.querySelector('.interests');

btnstate.forEach(function(btn)
{
    btn.addEventListener('click', function()
    {
        console.log(`button ${btn.textContent} is clicked!`);
    });
});