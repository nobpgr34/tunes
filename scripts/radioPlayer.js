import { list } from "./index.js"
export const radioPlayerInit = () => {
    console.log("radio init");
    const radio = document.querySelector('.radio');
    const radioCoverlmg = document.querySelector('.radio-cover__img');
    const radioitem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');
    const radioHeaderBig = document.querySelector('.radio-header');
    const radioNavigation = document.querySelector('.radio-navigation');



    const audio = new Audio();
    list.push(audio);
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    // radioNavigation.addEventListener('click', event => {
    //     // console.log("asdasd");
    //     radioStop.disabled = false;
    //     const target = event.target;
    //     //  console.log(target);
    //     var elem = target.getAttribute("data-radio-stantion")
    //     audio.src = elem;
    //     const playPromise = audio.play();

    //     if (playPromise !== null) {
    //         playPromise.catch(() => { /* discard runtime error */ })
    //     }
    //     toggleIcon();
    // })
    const toggleIcon = () => {

        if (audio.paused) {
            radio.classList.remove("play")
            radioStop.classList.remove("fa-pause")
            radioStop.classList.add("fa-play")

        } else {
            radio.classList.add("play")
            radioStop.classList.remove("fa-play")
            radioStop.classList.add("fa-pause")

        }
    }
    audio.addEventListener("pause", toggleIcon)
    audio.addEventListener("play", toggleIcon)
    const selectltem = elem => {
        radioitem.forEach(item => item.classList.remove('select'));
        elem.classList.add('select');
    }


    radioNavigation.addEventListener('click', event => {
        const target = event.target;

        const parrent = target.closest('.radio-item');
        selectltem(parrent);

        const title = parrent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = title;



        const img = parrent.querySelector('.radio-img');
        //  console.log();
        var mySource = img.src;
        radioCoverlmg.src = mySource;
        radioStop.disabled = false;

        audio.src = target.dataset.radioStantion;


        const playPromise = audio.play();

        if (playPromise !== null) {
            playPromise.catch(() => { /* discard runtime error */ })
        }
        toggleIcon();

    })


    radioStop.addEventListener('click', event => {

        if (audio.paused) {
            audio.play()
        } else { audio.pause() }
        toggleIcon();
    })



}