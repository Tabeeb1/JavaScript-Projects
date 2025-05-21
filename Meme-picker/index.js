import { catsData } from "./data.js";

const emotionPicker = document.getElementById('emotion-picker');
const gifPicker = document.getElementById('gifPicker');
const submitBtn = document.getElementById('get-image-btn');
const picShowContainer = document.querySelector('.pic-show-container');
const finalImage = document.getElementById('final-image-container');
const picCloseBtn = document.querySelector('.pic-close-btn')

submitBtn.addEventListener('click', showFinalImage)
gifPicker.addEventListener('change', gifImagesReturnOrNot)
picCloseBtn.addEventListener('click', close)

let finalImages = []
let finalPicture = ``

function close(){
    picShowContainer.style.display = 'none'
}

function finalPopUp() {
    picShowContainer.style.display = 'block'
    let alt = ''
    for(let alts of catsData){
        if(alts.image === finalPicture){
            alt = alts.alt
        }
    }
    finalImage.innerHTML = `
        <img src="./images/${finalPicture}" alt="${alt}" class="final-image"/>
    `

}

function showFinalImage() {
    finalPicture = finalImages[Math.floor(Math.random()*finalImages.length)]
    console.log(finalPicture);
    finalPopUp()
}

function gifImagesReturnOrNot (e) {
    let tempImages = []
    if(e.target.checked) {
        for(let cats of catsData) {
            if(cats.isGif){
                tempImages.push(cats.image)
            }
        }
    }
    else{
        for(let cat of catsData) {
            tempImages.push(cat.image)
        }
    }
    finalImages = tempImages
}

emotionPicker.addEventListener('change', checkOptionHighlight)

function fillImageWithEmotion(e){
    for(let cat of catsData) {
        if(cat.emotionTags.includes(e.target.value)){
            finalImages.push(cat.image)
        }
    }
    console.log(finalImages);
}

function checkOptionHighlight(e) {
    const radioButtons = document.getElementsByClassName('radio');
    for(let radio of radioButtons) {
        radio.classList.remove('highlight-radio')
    }
    fillImageWithEmotion(e)
    document.getElementById(e.target.id).parentElement.classList.add('highlight-radio')
}

function catEmotionsReturn(){
    const catEmotion = []
    for(let cat of catsData){
        for(let emotion of cat.emotionTags){
            if(!catEmotion.includes(emotion)){
                catEmotion.push(emotion)
            }
        }
    }
    return catEmotion
}

function renderCat(){
    const catEmotions = catEmotionsReturn()
    let displayEmotion = ``
    for(let emotion of catEmotions){
        displayEmotion += `
            <div class="radio">
                <label for= "${emotion}">${emotion}</label>
                <input type="radio" name="emotion" value=${emotion} id="${emotion}">
            </div>
        `
    }
    emotionPicker.innerHTML = displayEmotion
}

renderCat()