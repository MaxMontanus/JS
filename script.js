const myTitle = document.getElementById('myTitle');

const myImage = document.getElementById('myImage');

let seizoenen = [
    {
        'titel':'Seizoenen',
        'image':'img/seasons.jpg'
    },
    {
        'titel':'lente',
        'image':'img/spring.jpg'
    },
    {
        'titel':'zomer',
        'image':'img/summer.jpg'
    },
    {
        'titel':'herfst',
        'image':'img/autumn.jpg'
    },
    {
        'titel':'winter',
        'image':'img/winter.jpg'
    }
];

function show(index){
    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
}