function changeBg(){
    let navbar = document.getElementById('navbar');
    let scrollValue = window.scrollY;
    console.log(scrollValue);
    if (scrollValue < 150){
        navbar.classList.remove('bgcolor');
    }else {
        navbar.classList.add('bgcolor');
    }
}

window.addEventListener('scroll', changeBg);