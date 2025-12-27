// CUSTOM CURSOR -----------------------------
const cursor = document.querySelector('.cursor');
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});


// FUNCTION FOR TYPEWRITING EFFECT --------------------------
function typewriting(element, text, speed = 0) {
    let index = 0;
    element.textContent = ''; // Clear existing content
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            element.style.setProperty('--typing-complete', 'true');
        }
    }
    
    type();
}

// CONTENT -------------------------------------------------
const welcome = 'Hello, welcome to my website!';
const title = "Hey, It's Tobi.";
const subject = 'I am a student who is learning Fullstack development, from India.';
const skills = 'REACT(learning)';
const languages ="HTML CSS JAVASCRIPT C++ PYTHON";
const aboutme = `I am a 23 year old college student, from India. Unfortunately, I am not a CS Major, yet I started doing programming because of the love of the game.

I love to program applications, debug critical structures and solve real world problems. Currently I am learning Fullstack Web/app development. I love problem solving and analytical thinking. I do solve Leetcode and Codeforces apart from development.

My gear: ASUS TUF A16 + RTX 2050`;


// ASSIGNING -------------------------------------------------
function print()
{
    // const idlist = ['msg', 'heading', 'summary', 'skill', 'skillist', 'lang', 'langlist', 'about', 'abouttext'];
    const msg = document.getElementById('msg');
    typewriting(msg, welcome);
    const heading = document.getElementById('heading');
    typewriting(heading, title);
    const mail = document.getElementById('mail');
    typewriting(mail, '>Mail');
    const github = document.getElementById('github');
    typewriting(github, '>Github');
    const twitter = document.getElementById('twitter');
    typewriting(twitter, '>Twitter');
    const codeforces = document.getElementById('codeforces');
    typewriting(codeforces, '>Codeforces');
    const summary = document.getElementById('summary');
    typewriting(summary, subject);
    const skill = document.getElementById('skill');
    typewriting(skill, 'Skills:');
    const skillist = document.getElementById('skilllist');
    typewriting(skillist, skills);
    const lang = document.getElementById('lang');
    typewriting(lang, 'Languages:');
    const langlist = document.getElementById('langlist');
    typewriting(langlist, languages);
    const about = document.getElementById('about');
    typewriting(about, 'About Me:');
    const abouttext = document.getElementById('abouttext');
    typewriting(abouttext, aboutme);
    const themecredit = document.getElementById('themecredit');
    typewriting(themecredit, '>Theme');
    const fontcredit = document.getElementById('fontcredit');
    typewriting(fontcredit, '>Font');
}



// LOADING TO MAIN SCREEN TRANSISITON ----------
const loading_display = document.querySelector('.loading');

setTimeout(() => {
    loading_display.style.display = 'none';
    document.documentElement.style.setProperty('--display', 'block');
    document.documentElement.style.setProperty('--height', 'auto');
    print();
}, 4000);
