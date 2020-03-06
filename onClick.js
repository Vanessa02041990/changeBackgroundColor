let color = ['#0000FF', '#8A2BE2', '#A52A2A', '#7FFF00', '#0000FF', '#9932CC', '#E9967A', '#E9967A', '#4B0082', '#20B2AA']
let i = 0;
function firstFunction() {
    i = 1 < color.length ? ++i : 0;
    document.querySelector('body').style.background = color[i]
};

document.querySelector('button').addEventListener('click', firstFunction);

function youClickedMe() {
    alert('Why you clicked me?')
};


let h1 = document.getElementById('text')
h1.addEventListener('mouseover', function () {
    this.style.backgroundImage = 'linear-gradient(rgb(153, 50, 204), rgb(255, 182, 193))'
    this.style.color = 'black';

});

h1.addEventListener('mouseout', function () {
    this.style = ''
});