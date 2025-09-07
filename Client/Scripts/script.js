

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


const nightMode = document.getElementById('dark');
nightMode.addEventListener('click', () => {
    // Toggle a 'dark-mode' class on the body for night mode
    document.querySelector('#themeSwitch').style.backgroundColor = 'white';
    nightMode.style.transform = 'translateX(.8rem)';
    nightMode.style.transition = 'transition: ease-in .3s;'
    nightMode.style.display = 'none'
    const lightMode = document.getElementById('light');
    lightMode.style.display = 'block';
    lightMode.style.transform = 'translateX(1.4rem)';
    const darkMode = document.querySelector('.about-section');
    if(darkMode){
        darkMode.style.backgroundColor = '#37474F';
        const darkCtnMode = document.querySelector('.contact-section');
        darkCtnMode.style.backgroundColor = '#37474F';
           const servicesTheme = document.querySelector('.services-section');
         servicesTheme.style.backgroundColor = '#37474F';
        document.querySelector(".contact-container").style.backgroundColor = '#fff9f9d3';
         
    } 
   

    const colorText = document.querySelector('#darkTheme');
    if(colorText){
        colorText.style.color = 'white';
    }
    const colorText2 = document.querySelector('#darkTheme2');
    if(colorText2){
        colorText2.style.color = 'white';
    }
    const changeTheme = document.getElementById('theme');
    if(changeTheme){
          changeTheme.style.color = 'white';
    }
   
    
    
    
});

const dayMode =document.getElementById('light');
dayMode.addEventListener('click', () => {
    document.querySelector('#themeSwitch').style.backgroundColor = 'black';
    dayMode.style.transform = 'translateX(-0.1rem)';
    dayMode.style.transition = 'transition: ease-in .3s;'
    dayMode.style.display = 'none'

     const day = document.getElementById('dark');
    day.style.display = 'block';
    day.style.transform = 'translateX(-0.1rem)';

     const dayTheme = document.querySelector('.about-section');
    if(dayTheme){
        dayTheme.style.backgroundColor = 'white';
        const darkCtnMode = document.querySelector('.contact-section');
        darkCtnMode.style.backgroundColor = 'white';
    }
    const colorText = document.querySelector('#darkTheme');
    if(colorText){
        colorText.style.color = 'black';
    }
    const colorText2 = document.querySelector('#darkTheme2');
    if(colorText2){
        colorText2.style.color = 'black';
    }

    const darkMode2 = document.getElementById('service');
    darkMode2.style.backgroundColor = 'white';

    const changeTheme = document.getElementById('theme');
    if(changeTheme){
          changeTheme.style.color = 'black';
    }
    const newTheme = document.getElementById('serviceTheme');
        newTheme.style.backgroundColor = '#141319';
    

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
const copyContact = document.getElementById('phoneCall');
copyContact.addEventListener('copy', () => {
    alert('Contact copied to clipboard');
});

