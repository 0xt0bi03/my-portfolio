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

// Handle section switching
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
// FIXED SLIDE MENU (OPEN / CLOSE)
// ==================================================

const menubutton = document.querySelector('#menubutton');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

// Toggle menu on menu button click
menubutton.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent document click

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

// Close menu on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('open')) {
    menu.classList.remove('open');
    overlay.classList.remove('active');
  }
});
