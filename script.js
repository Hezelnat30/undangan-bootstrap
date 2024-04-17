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
    window.onscroll = function () {
    rootElement.style.scrollBehavior = 'smooth'

    playAudio();
    }
}

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

disableScroll()