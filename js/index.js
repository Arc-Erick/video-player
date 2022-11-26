const $video = document.querySelector('#video');
const $pause= document.querySelector('#pause');
const $play = document.querySelector('#play');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progress.addEventListener('input', handleInput);

function handleInput(){
    $video.currentTime = $progress.value; 
}

function handleLoaded(){
    $progress.max = $video.duration;
    // console.log($video.duration);
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime;
}

function handlePlay(){
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    $progress.hidden = false;
    // console.log('first')
    $backward.hidden = false;
    $forward.hidden = false;
}
function handlePause(){
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
    // console.log('first')
}
function handleBackward(){
    // $video.currentTime = $video.currentTime - 10;
    $video.currentTime -= 10;
}
function handleForward(){
    // $video.currentTime = $video.currentTime + 10;
    $video.currentTime += 10;
}