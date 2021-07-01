// movement animation to happen 
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//animate items
const title = document.querySelector('.title');
const image = document.querySelector('.image img');
// ya está - const contacto = document.querySelector('.contacto');
const redes = document.querySelector('.redes');
const info = document.querySelector('.info h3');


//moving animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX)/25;
    let yAxis = (window.innerHeight / 2 - e.pageY)/25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});
//animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //popout 
    image.style.transform = 'translateZ(100px)';
    title.style.transform = 'translateZ(75px)';
    redes.style.transform = 'translateZ(50px)';
    info.style.transform = 'translateZ(25px)';
});
//animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popout
    image.style.transform = 'translateZ(0px)';
    title.style.transform = 'translateZ(0px)';
    redes.style.transform = 'translateZ(0px)';
    info.style.transform = 'translateZ(0px)';
});