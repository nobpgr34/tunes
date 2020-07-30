import { radioPlayerInit } from "./radioPlayer.js"
import { videoPlayerInit } from "./videoPlayer.js"
import { musicPlayerInit } from "./musicPlayer.js"


export const list = [];



const playerBtn = document.querySelectorAll(".player-btn")
const playerBlock = document.querySelectorAll(".player-block")
const temp = document.querySelector(".temp")
const dectivationPlayer = () => {
    temp.style.display = "none";
    playerBtn.forEach((item) => { item.classList.remove("active") })
    playerBlock.forEach((item) => { item.classList.remove("active") })
    list.forEach((item) => { item.pause() })

}

playerBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        dectivationPlayer();
        btn.classList.add("active");
        playerBlock[i].classList.add("active");
    })

})

radioPlayerInit();
videoPlayerInit();
musicPlayerInit();