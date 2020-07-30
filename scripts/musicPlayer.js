import { AddZero } from "./supScript.js"
import { list } from "./index.js"
export const musicPlayerInit = () => {

    const audio = document.querySelector('.audio');
    const audiolmg = document.querySelector('.audio-img');
    const audioHeader = document.querySelector('.audio-header');


    const audioPlayer = document.querySelector('.audio-player');



    list.push(audioPlayer);
    const audioNavigation = document.querySelector('.audio-navigation')

    const audioButtonPlay = document.querySelector('.audio-button__play')
    const soundControl = document.querySelector('.sound-progress');

    const audioProgress = document.querySelector('.audio-progress');
    const audioProgressTiming = document.querySelector('.audio-progress')

    const audioTimePassed = document.querySelector('.audio-time__passed')

    const audioTimeTotal = document.querySelector('.audio-time__total')

    let muted = document.querySelector('.muted');
    let soundLevel = 0;
    let mutedFlag = false;
    const currentsound = 0;
    audioProgress.value = 0;

    const playlist = ['hello', 'flow', 'speed'];

    let tracklndex = 0;

    const toggleIcon = () => {


        if (audioPlayer.paused) {
            audioButtonPlay.classList.remove("fa-pause")
            audioButtonPlay.classList.add("fa-play")

            audio.classList.remove("play")
            console.log("asdasd")
        } else {
            audio.classList.add("play")
            audioButtonPlay.classList.remove("fa-play")
            audioButtonPlay.classList.add("fa-pause")
        }
    }
    audioPlayer.addEventListener("pause", toggleIcon)
    audioPlayer.addEventListener("play", toggleIcon)

    const loadTrack = () => {

        const isPlayed = audioPlayer.paused;
        const track = playlist[tracklndex];

        var str = './audio/' + track + '.mp3';
        console.log(str)

        // audioPlayer.src = './audio/${track}.mp3';
        audioPlayer.src = str;
        if (isPlayed) {

            audioPlayer.pause();

        } else {
            audioProgress.value = 0;
            audioPlayer.play();
        }
    }


    const timeupdate = () => {
        const duration = audioPlayer.duration;
        const currentTime = audioPlayer.currentTime;
        const progress = (currentTime / duration) * 100;
        audioProgressTiming.style.width = progress + '%';
        const minutesPassed = Math.floor(currentTime / 60) || 0
        const secondsPassed = Math.floor(currentTime % 60) || 0
        const minutesTotal = Math.floor(duration / 60) || 0
        const secondsTotal = Math.floor(duration % 60) || 0
            // audioTimePassed.textContent = '${addZero(minutesPassed)}:${addZero(secondsPass audioTimeTotal.textContent = 4${addZero(minutesTotal)}:${addZero(secondsTotal)
            // var passed = AddZero(minutesPassed) + ':' + AddZero(secondsPassed);
        audioTimePassed.textContent = AddZero(minutesPassed) + ':' + AddZero(secondsPassed);
        // videoTimeTotal.textContent = '${AddZero(minuteTotal)}:${AddZero(secondsTotal)}';
        audioTimeTotal.textContent = AddZero(minutesTotal) + ':' + AddZero(secondsTotal);


    }

    audioNavigation.addEventListener('click', event => {

        const target = event.target;

        if (target.classList.contains('audio-button__play')) {

            // audio.classList.toggle('play');
            // audioButtonPlay.classList.toggle('fa-play');
            // audioButtonPlay.classList.toggle('fa-pause');

            if (audioPlayer.paused) {
                audioPlayer.play();

            } else {

                audioPlayer.pause();

            }
        }
        if (target.classList.contains('audio-button__prev')) {
            console.log("asdas")
            if (tracklndex !== 0) {
                tracklndex--;

            } else {

                tracklndex = playlist.length - 1;

            }
            loadTrack();
        }
        if (target.classList.contains('audio-button__next')) {

            if (tracklndex === playlist.length - 1) {
                tracklndex = 0;

            } else {

                tracklndex++;
            }
            loadTrack();
        }
        timeupdate();
    })


    audioPlayer.addEventListener('timeupdate', timeupdate)

    audioProgress.addEventListener('input', event => {

        console.log('change')
        try {
            const duration = audioProgress.value;
            //   console.log(audioPlayer.duration)
            const value = audioPlayer.duration;
            //console.log('value' + value)
            audioPlayer.currentTime = (value * duration) / 100;
            //   videoPlayer.addEventListener("timeupdate", timeUpdate)
        } catch (err) {
            //  console.log(err.message)
        }

    })


    soundControl.addEventListener('input', event => {

        mutedFlag = false;
        const value = soundControl.value;
        // console.log(audioPlayer.volume)
        //console.log('value' + value)
        audioPlayer.volume = value / 100;
        if (audioPlayer.volume == 0) {
            muted.classList.remove('fa-volume-up')
            muted.classList.add('fa-volume-off')
        } else {
            if (muted.classList.contains('fa-volume-off')) {
                muted.classList.remove('fa-volume-off')
                muted.classList.add('fa-volume-up')
            }

        }


    })

    muted.addEventListener('click', event => {
        console.log(" mute")
        try {
            if (!mutedFlag) {
                mutedFlag = true;
                soundLevel = audioPlayer.volume;
                audioPlayer.volume = 0;
                soundControl.value = 0;
                muted.classList.add('mutedColor')
                muted.classList.remove('fa-volume-up')
                muted.classList.add('fa-volume-off')
            } else {
                mutedFlag = false;
                audioPlayer.volume = soundLevel;
                soundControl.value = audioPlayer.volume * 100;
                muted.classList.remove('mutedColor')
                muted.classList.remove('fa-volume-off')
                muted.classList.add('fa-volume-up')
            }

            //   videoPlayer.addEventListener("timeupdate", timeUpdate)
        } catch (err) {
            console.log(err.message)
        }

    })

}