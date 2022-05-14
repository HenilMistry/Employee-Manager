function changeColor() {
    let color1 = document.getElementById("colorInp1").value;
    let color2 = document.getElementById("colorInp2").value;
    let gradientOption = document.getElementById("gradientOption").value;

    // to output style...
    let style = "linear-gradient("+ gradientOption +","+ color1 +", "+ color2 +")";

    if(document.getElementById("radial").checked==true) {
        style = "radial-gradient(circle,"+ color1 +", "+ color2 +")";
    }

    outputStyle(style);

    // to apply style...
    document.querySelector("body").style.background = style;
}


// to genereate random r,g,b value...
function getRandom() {
    return Math.floor(Math.random()*255);
}

// to get random rgb() color...
function getRandomColor() {
    return "rgb("+ getRandom() +","+ getRandom() +", "+ getRandom() +")";
}

// to convert rgb() color to hex value...
function convert(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    function hexCode(i) {
        return ("0" + parseInt(i).toString(16)).slice(-2);
    }
    return "#" + hexCode(rgb[1]) + hexCode(rgb[2]) 
            + hexCode(rgb[3]);
}

// to get random gradient...
function random() {
    let gradientOption = ["to right","to left","to top","to bottom"];
    let randomGradient = gradientOption[Math.floor(Math.random()*(gradientOption.length-1))];
    let randomColor1 = getRandomColor();
    let randomColor2 = getRandomColor();


    document.getElementById("gradientOption").value = randomGradient;
    document.getElementById("colorInp1").value = convert(randomColor1);
    document.getElementById("colorInp2").value = convert(randomColor2);

    // to output style...
    let style = "linear-gradient("+ randomGradient +","+ randomColor1 +", "+ randomColor2 +" )";
    if(document.getElementById("radial").checked==true) {
        style = "radial-gradient(circle,"+ randomColor1 +", "+ randomColor2 +")";
    }
    outputStyle(style);

    // to apply style...
    document.querySelector("body").style.background = style;
}

// to get random color for particular gradient
function randomColor() {
    let gradientOption = document.getElementById("gradientOption").value;
    let randomColor1 = getRandomColor();
    let randomColor2 = getRandomColor();

    document.getElementById("colorInp1").value = convert(randomColor1);
    document.getElementById("colorInp2").value = convert(randomColor2);

    // to output style...
    let style = "linear-gradient("+ gradientOption +","+ randomColor1 +", "+ randomColor2 +" )";
    if(document.getElementById("radial").checked==true) {
        style = "radial-gradient(circle,"+ randomColor1 +", "+ randomColor2 +")";
    }
    outputStyle(style);

    //  to apply style...
    document.querySelector("body").style.background = style;
}

// to give output for style
function outputStyle(style) {
    if(document.getElementById("enabledStyleOP").checked==true) {
        document.getElementById("StyleOP").value = style;
    }
}

function verify() {
    let color1 = document.getElementById("colorInp1").value;
    let color2 = document.getElementById("colorInp2").value;
    let gradientOption = document.getElementById("gradientOption").value;
    // to show style.. 
    let style = "linear-gradient("+ gradientOption +","+ color1 +", "+ color2 +")";

    if(document.getElementById("radial").checked==true) {
        style = "radial-gradient(circle,"+ color1 +", "+ color2 +")";
        document.getElementById("randomG").disabled = true;
    } else {
        document.getElementById("randomG").disabled = false;
    }
    outputStyle(style);

    // to apply style...
    document.querySelector("body").style.background = style;
}