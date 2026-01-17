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


// ==================================================
// SECTION SWITCHING (ABOUT / SKILLS / PROJECTS / INTERESTS)
// ==================================================

const btnstate = document.querySelectorAll('.btns');

const about = document.querySelector('.about');
const skills = document.querySelector('.skills');
const projects = document.querySelector('.projects');
const interests = document.querySelector('.interests');

// Map buttons to sections
const connections = new Map([
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

// Button click handling
btnstate.forEach(btn => {
    btn.addEventListener('click', () => {

        // Remove active state from all buttons
        btnstate.forEach(b => b.classList.remove('clicked'));

        // Activate clicked button
        btn.classList.add('clicked');

        // Hide all sections
        connections.forEach(section => {
            section.style.display = 'none';
        });

        // Show selected section
        connections.get(btn).style.display = 'block';
    });
});


// ==================================================
// MOBILE MENU + BACKGROUND BLUR
// ==================================================

const menubutton = document.querySelector('#menubutton');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

// Open / close menu
menubutton.addEventListener('click', (e) => {
    e.stopPropagation();

    const isOpen = menu.classList.toggle('open');
    overlay.classList.toggle('active', isOpen);
});

// Prevent clicks inside menu from closing it
menu.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Close menu when clicking outside (overlay)
overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('active');
});

// Optional: close menu on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        overlay.classList.remove('active');
    }
});
