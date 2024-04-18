const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const song = document.querySelector('#song');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
let isPlaying = false;
function disableScroll() {
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    window.onscroll = function () {
        window.scrollTo(scrollTop, scrollLeft);
    }
    
    rootElement.style.scrollBehavior = 'auto';
}

function enableScroll() {
    window.onscroll = function () {}
    rootElement.style.scrollBehavior = 'smooth'
        
    playAudio();
}
disableScroll()

function playAudio() {
    song.volume = 0.5;
    audioIconWrapper.style.display = 'flex'
    song.play()
    isPlaying = true;
}

audioIconWrapper.onclick = function () {
    if(isPlaying) {
        song.pause();
        audioIcon.classList.remove('bi-disc')
        audioIcon.classList.add('bi-pause-circle')
    } else {
        song.play();
        audioIcon.classList.add('bi-disc')
        audioIcon.classList.remove('bi-pause-circle')
    }

    isPlaying = !isPlaying;
}

// Navbar
const hamburger = document.querySelector('.navbar-toggler');
const stickyTop = document.querySelector('.sticky-top');

hamburger.addEventListener('show.bs.offcanvas', function () {
    stickyTop.style.overflow = 'visible';
})
const offcanvas = document.querySelector('.offcanvas');
offcanvas.addEventListener('hidden.bs.offcanvas', function () {
    stickyTop.style.overflow = 'hidden';
})

// Form
window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Konfirmasi Kehadiran Terkirim!");
      })
    });
  });