let settingIcon = document.querySelector("#icon");
let settingContent = document.querySelector(".settings-content");
let isDobOpen = false;

const showDate = () => {
    console.log("Clicked!");
    if(isDobOpen === false){
        settingContent.classList.remove("hide");
        isDobOpen = true;
    }else{
        settingContent.classList.add("hide");
        isDobOpen = false;
    }
   
};
settingIcon.addEventListener('click', showDate);

