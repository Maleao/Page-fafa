 
 //config menu
 const btnMobile = document.getElementById('btn-mobile'); 

function toggleMenu(event) { 
    if(event.type === 'touchstart') event.preventDefault() 
    const nav = document.getElementById('nav'); 
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu); 
btnMobile.addEventListener('touchstart', toggleMenu); 

//config menu scroll 

const menuItems = document.querySelectorAll('.menu a'); 
 
menuItems.forEach(item => {
    item.addEventListener('click', scrollIDOnClick); 

}) 

function scrollIDOnClick(event) { 
    event.preventDefault(); 
    const element = event.target;  
    const id = element.getAttribute('href') 
    const to = document.querySelector(id).offsetTop; 
    
    window.scroll({ 
        top: to - 170, 
        behavior: "smooth",
    })
}