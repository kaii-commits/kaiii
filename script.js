"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", handleNoClick);

function handleNoClick() {
    if (play) {
        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES - 1);
        changeImage(imageIndex);
        resizeNoButton();
        updateNoButtonText();
        
        if (noCount === MAX_IMAGES) {
            play = false;
        }
    }
}

function handleYesClick() {
    titleElement.textContent = "yayyy!! i love you my love:3";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");
}

function resizeNoButton() {
    const computedStyle = window.getComputedStyle(noButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6;
    noButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const messages = [
        "no",
        "are you sure?",
        "baby please",
        "don't do this to me :(",
        "you're breaking my heart",
        "i'm gonna cry..."
    ];

    return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
    catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
    noButton.textContent = generateMessage(noCount);
}