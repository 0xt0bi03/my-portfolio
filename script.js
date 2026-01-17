let btnstate = document.querySelectorAll('.btns');

let about = document.querySelector('.about');
let skills = document.querySelector('.skills');
let projects = document.querySelector('.projects');
let interests = document.querySelector('.interests');

let connections = new Map([[btnstate[0], about], [btnstate[1], skills], [btnstate[2], projects], [btnstate[3], interests]]);

// menubar
let menu = document.querySelector('#menu');
console.log(menu);


about.style.display = 'block';
skills.style.display = 'none';
projects.style.display = 'none';
interests.style.display = 'none';

// about.toggle('clicked');




btnstate.forEach(function(btn)
{
    btn.addEventListener('click', function()
    {
        // console.log(`button ${connections.get(btn).textContent} is clicked!`);

        btnstate.forEach(function (b)
        {
            b.classList.remove('clicked');
        });
        // btn.classList.add('active');
        btn.classList.toggle('clicked');

        connections.forEach(function (content) 
        {
            content.style.display = "none";
        });

        connections.get(btn).style.display = 'block';
        // connections.get(btn).style.hov
        // btn.style.d

    });
});