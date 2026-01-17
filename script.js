// let btnstate = document.querySelectorAll('.btns');

// let about = document.querySelector('.about');
// let skills = document.querySelector('.skills');
// let projects = document.querySelector('.projects');
// let interests = document.querySelector('.interests');

// let connections = new Map([[btnstate[0], about], [btnstate[1], skills], [btnstate[2], projects], [btnstate[3], interests]]);

// // menubar
// let menubutton = document.querySelector('#menubutton');
// console.log(menubutton);
// document.addEventListener('click', (e) => {
//     // if menu is open
//     if (menu.classList.contains('open')) {

//         const clickedInsideMenu = menu.contains(e.target);
//         const clickedMenuButton = menubutton.contains(e.target);

//         if (!clickedInsideMenu && !clickedMenuButton) {
//             menu.classList.remove('open');
//         }
//     }
// });



// about.style.display = 'block';
// skills.style.display = 'none';
// projects.style.display = 'none';
// interests.style.display = 'none';

// // about.toggle('clicked');




// btnstate.forEach(function(btn)
// {
//     btn.addEventListener('click', function()
//     {
//         // console.log(`button ${connections.get(btn).textContent} is clicked!`);

//         btnstate.forEach(function (b)
//         {
//             b.classList.remove('clicked');
//         });
//         // btn.classList.add('active');
//         btn.classList.toggle('clicked');

//         connections.forEach(function (content) 
//         {
//             content.style.display = "none";
//         });

//         connections.get(btn).style.display = 'block';
//         // connections.get(btn).style.hov
//         // btn.style.d

//     });
// });



// ==============================
// SECTION TOGGLE (ABOUT / SKILLS / PROJECTS / INTERESTS)
// ==============================

let btnstate = document.querySelectorAll('.btns');

let about = document.querySelector('.about');
let skills = document.querySelector('.skills');
let projects = document.querySelector('.projects');
let interests = document.querySelector('.interests');

// Map buttons to content sections
let connections = new Map([
    [btnstate[0], about],
    [btnstate[1], skills],
    [btnstate[2], projects],
    [btnstate[3], interests]
]);

// Default visible section
about.style.display = 'block';
skills.style.display = 'none';
projects.style.display = 'none';
interests.style.display = 'none';

// Button click logic
btnstate.forEach(btn => {
    btn.addEventListener('click', () => {

        // remove active state from all buttons
        btnstate.forEach(b => b.classList.remove('clicked'));

        // add active state to clicked button
        btn.classList.add('clicked');

        // hide all sections
        connections.forEach(section => {
            section.style.display = 'none';
        });

        // show corresponding section
        connections.get(btn).style.display = 'block';
    });
});


// ==============================
// MOBILE MENU TOGGLE
// ==============================

let menubutton = document.querySelector('#menubutton');
let menu = document.querySelector('.menu');

// Toggle menu on button click
menubutton.addEventListener('click', (e) => {
    e.stopPropagation();          // prevent document click
    menu.classList.toggle('open');
});

// Prevent clicks inside menu from bubbling
menu.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Close menu when clicking outside
document.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    }
});
