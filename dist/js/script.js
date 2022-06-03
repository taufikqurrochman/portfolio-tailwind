//Navbar fixed
window.onscroll = function(){
    // variabel
    const header = document.querySelector('header');
    const fixeNav = header.offsetTop;
    // variable set to top
    const toTop = document.querySelector('#to-top');

    // jika ada selisih
    if(window.pageYOffset > fixeNav){
        // menambahkan class
        header.classList.add('navbar-fixed');
        // menambahkan class pada id totop
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }
    else{
        // menghilangkan class
        header.classList.remove('navbar-fixed');
        //menambahk class pada id totop
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
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

// clik diluar akan menghilangkan menu hamburger
window.addEventListener('click', function (e) {
    if(e.target != navMenu && e.target != hamburger){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        // supaya direfresh tidak berubah default dark
        // localStorage.theme = 'dark';
    }
    else{
        html.classList.remove('dark');
        // supaya direfresh tidak berubah default light
        // localStorage.theme = 'light';
    }
});

// pindahkan posisi toggle sesuai mode, jika dipindah bisa berubah theme karena default cek local komputer dia theme dark atau light
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     darkToggle.checked = true;
//   } else {
//     document.documentElement.classList.remove('dark')
//   }