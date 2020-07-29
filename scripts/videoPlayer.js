export const videoPlayerInit = () => {
    console.log("video init");


    // video-player
    // video-button__play
    // video-button__stop
    // video-time__passed
    // video-progress
    // video-time__total


    const videoPlayer = document.querySelector(".video-player");
    const videoButtonPlay = document.querySelector(".video-button__play")
    const videoButtonStop = document.querySelector(".video-button__stop")
    const videoTimePassed = document.querySelector(".video-time__passed")
    const videoProgress = document.querySelector(".video-progress")
    const videoTimeTotal = document.querySelector(".video-time__total")

    const toggleIcon = () => {

        if (videoPlayer.paused) {
            videoButtonPlay.classList.remove("fa-pause")
            videoButtonPlay.classList.add("fa-play")

        } else {
            videoButtonPlay.classList.remove("fa-play")
            videoButtonPlay.classList.add("fa-pause")

        }
    }

    const togglePlay = () => {

        if (videoPlayer.paused) {
            videoPlayer.play()
        } else { videoPlayer.pause() }
        //toggleIcon();
    }

    const stopPlay = () => {

        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }

    const AddZero = n => n < 10 ? '0' + n : n;


    videoPlayer.addEventListener("pause", toggleIcon)
    videoPlayer.addEventListener("play", toggleIcon)
    videoButtonPlay.addEventListener("click", togglePlay)

    videoButtonStop.addEventListener("click", stopPlay)

    const timeUpdate = () =>

        {
            const currentTime = videoPlayer.currentTime;
            const duration = videoPlayer.duration;
            videoProgress.value = (currentTime / duration) * 100;
            let minutePassed = Math.floor(currentTime / 60);
            let secondsPassed = Math.floor(currentTime % 60);
            let minuteTotal = Math.floor(duration / 60);
            let secondsTotal = Math.floor(duration % 60);
            videoTimePassed.textContent = AddZero(minutePassed) + ':' + AddZero(secondsPassed);
            // videoTimeTotal.textContent = '${AddZero(minuteTotal)}:${AddZero(secondsTotal)}';
            videoTimeTotal.textContent = AddZero(minuteTotal) + ':' + AddZero(secondsTotal);
        }


    //  videoPlayer.addEventListener("click", togglePlay)

    videoPlayer.addEventListener("timeupdate", timeUpdate)

    // videoPlayer.addEventListener("ondblclick ", () => {


    // })
    videoPlayer.onclick = event => {
        if (event.detail === 1) {
            togglePlay();
            // it was a single click
        } else if (event.detail === 2) {
            console.log("double");
            videoPlayer.webkitRequestFullScreen();
        }
    };

    videoProgress.addEventListener('input', () => {
        //  videoPlayer.removeEventListener("timeupdate", timeUpdate);
        console.log('change')
        try {
            const duration = videoPlayer.duration;
            const value = videoProgress.value;
            videoPlayer.currentTime = (value * duration) / 100;
            //   videoPlayer.addEventListener("timeupdate", timeUpdate)
        } catch (err) {
            console.log(err.message)
        }
    })
}