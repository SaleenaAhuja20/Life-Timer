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
const changeText = () =>{
    dateOfBirth = new Date(dobInput.value);
    if(dateOfBirth){
        oldPara.classList.add("hide");
        newPara.classList.remove("hide");
    }
    setInterval(() => updateAge(), 1000);
};
const updateAge = () =>{
    let currdate = new Date();
   
    let dateDifference = currdate - dateOfBirth;
    const years = Math.floor(dateDifference/(1000*60*60*24*365));
    const months = Math.floor(dateDifference / (1000*60*60*24*365)) % 12;
    const days = Math.floor(dateDifference / (1000*60*60*24)) % 30;
    const hours = Math.floor(dateDifference/ (1000*60*60))  % 24;
    const minutes = Math.floor(dateDifference / (1000*60))  % 60;
    const seconds = Math.floor(dateDifference / (1000)) % 60;
    
    year.textContent = years;
    month.textContent = months;
    day.textContent = days;
    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;
};

settingIcon.addEventListener('click', showDate);
dobButton.addEventListener('click', changeText);

