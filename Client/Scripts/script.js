
const sideNav = document.getElementById('sideMenu');
sideNav.addEventListener('click', () => {
    // Replace 'somethingElse' with the actual element you want to show
    const side= document.getElementById('sidebar');
    if (side) {
        side.style.display = 'flex';
        side.style.transition = 'opacity 0.3s ease';
    }
    const closebtn= document.getElementById('closeMenu');
    if (closebtn) {
        closebtn.style.display = 'block';
    }
    sideNav.style.display = 'none';

});
const mediaQuery = window.matchMedia('(min-width: 800px');
mediaQuery.addEventListener('change', (event) => {
    if(event.matches){
        sideNav.style.display = 'none';
        closeButton.style.display = 'none';
    }
    else{
        sideNav.style.display = 'block';
    }
})


const closeButton = document.getElementById('closeMenu');

    closeButton.addEventListener('click', () => {
        const navClose = document.getElementById('sidebar');
        if (navClose) {
            navClose.style.display = 'none';
        }
        closeButton.style.display = 'none';
        const openMenu = document.getElementById('sideMenu')
        if (openMenu) {
            openMenu.style.display = 'block'
        }
    });

const exitMenu = document.getElementById('sidebar');
exitMenu.addEventListener('click', () => {
        exitMenu.style.display = 'none';
        const hideMenu = document.getElementById('closeMenu');
    if(hideMenu) {
        hideMenu.style.display = 'none';
    }
    const showBar = document.getElementById('sideMenu');
    if(showBar) {
        showBar.style.display = 'flex';
    }
});
const loginB = document.getElementById('login-btn')
loginB.addEventListener('click', () => {
    window.location.href = "/Client/login.html"
})

    