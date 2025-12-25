// FUNCTION FOR TYPEWRITING EFFECT --------------------------
function typewriting(element, text, speed = 5) {
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
const subject = 'I am a software developer, from India.';
const skills = 'REACT';
const languages ="HTML  CSS  JAVASCRIPT  C  C++  PYTHON";
const aboutme = 'I am a 23 year old, fullstack developer from India. I love to program applications, debugging critical structures.';



// ASSIGNING -------------------------------------------------
function print()
{
    const idlist = ['msg', 'heading', 'summary', 'skill', 'skillist', 'lang', 'langlist', 'about', 'abouttext'];
    const msg = document.getElementById('msg');
    typewriting(msg, welcome);
    const heading = document.getElementById('heading');
    typewriting(heading, title);
    const github = document.getElementById('github');
    typewriting(github, '>Github');
    const twitter = document.getElementById('twitter');
    typewriting(twitter, '>Twitter');
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
}

// LOADING TO MAIN SCREEN TRANSISITON ----------
const loading_display = document.querySelector('.loading');

// Wait for loading animation to complete
// 5s delay + 0.4s fadeout animation = 5.4s total
setTimeout(() => {
    loading_display.style.display = 'none';
    document.documentElement.style.setProperty('--display', 'block');
    document.documentElement.style.setProperty('--height', 'auto');
    print();
}, 4000);
