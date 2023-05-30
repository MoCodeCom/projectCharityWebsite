const menu = document.getElementById('lines');
const nav_lst = document.getElementById('s_nav');

const divHeader = document.getElementById('header');
const divFooter = document.getElementById('footer');
const divs_nav = document.getElementById('s_nav');
const changeColorBtn = document.getElementById('changeColorBtn');

menu.onclick = function(){
    nav_lst.style.display = 'block';
};

nav_lst.onclick = function(){
    nav_lst.style.display = 'none';
}

function changeColor(){
    const colorElement = document.getElementById('colorPicker').value;
    divHeader.style.backgroundColor = colorElement;
    divFooter.style.backgroundColor = colorElement;
    divs_nav.style.backgroundColor = colorElement;
    changeColorBtn.style.backgroundColor = colorElement;
    changeColorBtn.style.color = 'white';
}