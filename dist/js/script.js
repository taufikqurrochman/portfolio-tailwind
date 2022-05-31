//Navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixeNav = header.offsetTop;

    // jika ada selisih
    if(window.pageYOffset > fixeNav){
        header.classList.add('navbar-fixed');
    }
    else{
        header.classList.remove('navbar-fixed');
    }
}

//Hamburger
//cek element id hamburger
const hamburger = document.querySelector('#hamburger');
// tangkap id nav-menu dari index
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});