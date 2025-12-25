const text = 'I love to program applications, debugging critical structures.';
const el = document.getElementById('text');
let i = 0;
function type()
{
    if (i < text.length)
    {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 20);
    }
    else
    {
        el.style.removeProperty('content');
    }
}
type();