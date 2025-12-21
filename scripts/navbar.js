const toggleNavBar = document.querySelector('.navIcon');

const navMenu = document.getElementById('navMenu');

let menuOpen = false;

toggleNavBar.addEventListener('click',()=>{
    if(menuOpen == false){
        navMenu.style.display = 'flex';
        menuOpen = true;
    }
    else if(menuOpen = true){
        navMenu.style.display = 'none'
        menuOpen = false;
    }
   
})