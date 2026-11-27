const gruvbox = {
  bgHard: "#1d2021",
  bg: "#282828",
  bgSoft: "#32302f",
  bg1: "#3c3836",
  bg2: "#504945",

  grey1: "#665c54",
  grey2: "#7c6f64",
  grey3: "#928374",
  grey4: "#a89984",

  fg4: "#bdae93",
  fg3: "#d5c4a1",
  fg2: "#ebdbb2",
  fg1: "#fbf1c7",

  red: "#fb4934",
  redDark: "#cc241d",

  orange: "#fe8019",
  orangeDark: "#d65d0e",

  yellow: "#fabd2f",
  yellowDark: "#d79921",

  green: "#b8bb26",
  greenDark: "#98971a",

  aqua: "#8ec07c",
  aquaDark: "#689d6a",

  blue: "#83a598",
  blueDark: "#458588",

  purple: "#d3869b",
  purpleDark: "#b16286"
};

const box = document.getElementById("box");
const sections = document.querySelectorAll(".container");

function showTab(id) {
    const target = document.getElementById(id);
    //   if (!target) return false;            // Blog/Socials/Contact don't exist yet
    
    sections.forEach(s => (s.style.display = "none"));
    target.style.display = id === "about" ? "block" : "flex";
    return true;
}

function changes(btn) {
    if (!showTab(btn.dataset.tab)) return; // no section yet, so change nothing
    box.style.borderColor = getComputedStyle(btn).borderColor;
}

// initial state: only the intro is visible
showTab("intro");

const buttons = document.querySelectorAll(".legend button");
buttons.forEach(btn => {
    btn.addEventListener("click", () => changes(btn));
});

function opens(link){
    if(link.textContent == "Gmail"){
        window.open("mailto:m4sk3d.t0bi@gmail.com", "_blank");
    }
    else if(link.textContent == "Reddit"){
        window.open("https://www.reddit.com/user/0xt0bi03/", "_blank");
    }
    else if(link.textContent == "Twitter"){
        window.open("https://x.com/0xt0bi03", "_blank");
    }
}

const links = document.querySelectorAll("#contact button");
links.forEach(link => {
    link.addEventListener("click", () => opens(link) )
})