const options = document.getElementById("options-textarea");

options.addEventListener("keyup", createArr)

function createArr(event){
    
    const optionsArr = options.value.split(",");
    const filteredOptions = optionsArr.filter(el => el.trim() != "")
    renderOption(filteredOptions);

    return filteredOptions;
}

function renderOption(arr){
    const optionsDiv = document.querySelector(".options");
    optionsDiv.innerHTML = "";
    arr.forEach((option)=>{
        const optionSpan = document.createElement("span");
        optionSpan.classList = "option";
        optionSpan.innerText = option;

        
        optionsDiv.append(optionSpan);
    })
}

const getRandomBtn = document.getElementById("get-random-btn");
getRandomBtn.addEventListener("click",getRandom)

function getRandom(event){
    event.preventDefault();

    if(createArr().length < 1){
        return ""
    }
    const times = 30;

    const interval = setInterval(()=>{

        const randomOption = pickRandomOption();

        highlightOption(randomOption);

        setTimeout(()=>{
            unHighlightOption(randomOption)
        },100)

    },100);

    setTimeout(()=>{
        clearInterval(interval);

        setTimeout(()=>{
            const randomOption = pickRandomOption();

            highlightOption(randomOption);
        },100)
        
    },times * 100)
}

function pickRandomOption(){

    const allOptions = document.querySelectorAll(".option");
    return allOptions[Math.floor(Math.random() * allOptions.length)]

}

function highlightOption(option){
    option.classList.add("selected");
}

function unHighlightOption(option){
    option.classList.remove("selected");
}