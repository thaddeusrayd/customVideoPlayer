/* get our elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* build functions */
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

    /* togglePlay() does this:
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        } */

function updateButton() {
    const icon = this.pause ? '►' : '❚ ❚';
    console.log('Update the button');
}

/* hook up event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
