let settingIcon = document.querySelector("#icon");
let settingContent = document.querySelector(".settings-content");
let isDobOpen = false;

const showDate = () => {
    if(isDobOpen === false){
        settingContent.classList.remove("hide");
        isDobOpen = true;
    }else{
        settingContent.classList.add("hide");
        isDobOpen = false;
    }
   
};
settingIcon.addEventListener('click', showDate);

let dobButton = document.querySelector("#dobButton");
let newPara = document.querySelector(".container2");
let oldPara = document.querySelector(".container");
isDobClicked = true;

const changeText = () =>{
    if(isDobClicked){
        oldPara.classList.add("hide");
        newPara.classList.remove("hide");
        isDobClicked = false;
    }
};
dobButton.addEventListener('click', changeText);


