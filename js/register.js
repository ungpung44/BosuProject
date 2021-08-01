/*
var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
document.head.appendChild(jQueryScript);

$('.form_id h1').css({
    'color':'red'
});
*/

const toggleButton = document.querySelector('.navbar_toggleButton');
const menu = document.querySelector('.navbar_menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});
var dbform = document.getElementById('btnDatabase');
window.onload = function() {
    dbform.onclick = dbconnect;
}
function dbconnect() {
    dbform.action = "../database.jsp";
    dbform.method = "post";
    dbform.submit();
}