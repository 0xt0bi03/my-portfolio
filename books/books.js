const back = document.getElementById('back');

back.addEventListener('click', goingback)


function goingback()
{
    window.history.back();
}