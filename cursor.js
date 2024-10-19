let cursor = document.querySelector('.cursor');
let astronomy = document.querySelector('.astronomy');
let environment = document.querySelector('.environment');
let video = document.querySelector('.video');
let navbar_links = document.querySelectorAll('.navbar a');


window.addEventListener('mousemove', function(e) {
    cursor.animate({
        top:e.pageY + 'px',
        left:e.pageX + 'px'
    }, {duration:1000, fill:'forwards'});
});

function expandCursor(text) {
    cursor.style.width = '15vw';
    cursor.style.height = '5vh';
    cursor.style.padding = '1vh 1vw';
    cursor.querySelector('p').innerHTML = text;
}

function bigCursor() {
    cursor.style.width = '5vw';
    cursor.style.height = '5vw';
}

function returnCursorToNormal() {
    cursor.style.width = '1vw';
    cursor.style.height = '1vw';
    cursor.style.padding = '0';
    cursor.querySelector('p').innerHTML = '';
}