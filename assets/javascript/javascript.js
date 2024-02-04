const hamburgerButton = document.querySelector('.hamburger-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('#icon') 
const logo = document.querySelector('#logo')
const accordianNav = document.querySelectorAll(".accordion")
const accordianContent = document.querySelectorAll(".accordion-content")
const body = document.getElementsByTagName('body')[0]

hamburgerButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');

    let y = hamburgerIcon

    if(y.classList.contains('fa-bars')){
        y.classList.remove('fa-bars');
        y.classList.add('fa-times');
        logo.style.opacity = 0
        body.style.overflow = "hidden"
    }else{
        y.classList.remove('fa-times');
        y.classList.add('fa-bars');
        logo.style.opacity = 1
        body.style.overflow = "visible"
    }
})


for(let i = 0; i < accordianNav.length; i++){
    accordianNav[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = accordianContent[i];
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
}