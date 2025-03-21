let settingIcon = document.querySelector("#icon");
let settingContent = document.querySelector(".settings-content");
let dobButton = document.querySelector("#dobButton");
let newPara = document.querySelector(".container2");
let oldPara = document.querySelector(".container");
let dobInput = document.querySelector("#dob");
let year = document.querySelector(".year");
let month = document.querySelector(".month");
let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let isDobOpen = false;
let dateOfBirth;

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

const changeText = () =>{
    dateOfBirth = dobInput.value;
    console.log(" ", dateOfBirth);
    if(dateOfBirth){
        oldPara.classList.add("hide");
        newPara.classList.remove("hide");
    }
};
dobButton.addEventListener('click', changeText);


