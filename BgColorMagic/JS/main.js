function changeColor() {
    let color1 = document.getElementById("colorInp1").value;
    let color2 = document.getElementById("colorInp2").value;
    let gradientOption = document.getElementById("gradientOption").value;

    document.querySelector("body").style.background = "linear-gradient("+ gradientOption +","+ color1 +", "+ color2 +")";
}


// to genereate random r,g,b value...
function getRandom() {
    return Math.floor(Math.random()*255);
}

// to get random rgb() color...
function getRandomColor() {
    return "rgb("+ getRandom() +","+ getRandom() +", "+ getRandom() +")";
}

// to get random gradient...
function random() {
    let gradientOption = ["to right","to left","to top","to bottom"];
    let randomGradient = gradientOption[Math.floor(Math.random()*(gradientOption.length-1))];
    let randomColor1 = getRandomColor();
    let randomColor2 = getRandomColor();

    document.getElementById("gradientOption").value = randomGradient;
    document.getElementById("colorInp1").value = randomColor1;
    document.getElementById("colorInp2").value = randomColor2;

    document.querySelector("body").style.background = "linear-gradient("+ randomGradient +","+ randomColor1 +", "+ randomColor2 +" )";
}

function randomColor() {
    let gradientOption = document.getElementById("gradientOption").value;
    document.querySelector("body").style.background = "linear-gradient("+ gradientOption +",rgb("+ getRandom() +","+ getRandom() +", "+ getRandom() +"), rgb("+ getRandom() +","+ getRandom() +", "+ getRandom() +"))";
}