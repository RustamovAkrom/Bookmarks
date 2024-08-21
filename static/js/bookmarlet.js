const siteUrl = '//127.0.0.1:8000';
const styleUrl = siteUrl + 'static/css/bookmarklet.css';
const minWidth = 250;
const minHeight = 250;

// load CSS
var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = siteUrl + '?r=' + Math.floor(Math.random()*9999999999999999);
head.appendChild(link);

// load HTML
var body = document.getElementsByTagName('body')[0];
boxHtml = `
    <div id="bookmarklet">
        <a href="#">&times;</a>
        <h1>Select an image to bookmark:</h1>
        <div class="images"></div>
    </div>
`
body.innerHTML += boxHtml

function bookmarkletLauncher(){
    bookmarklet = document.getElementById('bookmarklet');
    var ImagesFound = bookmarklet.querySelector('.images');

    //clear image found
    ImagesFound.innerHTML = '';
    bookmarklet.style.display = 'block';

    //close event
    bookmarklet.querySelector('#close')
    .addEventListener('click', function(){
    bookmarklet.style.display = 'none'
    });
}

bookmarkletLauncher();