// Global Variables
let playerSun = false;
let playerCloud = false;
let playerCloudImage = "./assets/rain.png";
let playerSunImage = "./assets/sun.png";

// Tic-Tac-Toe grid individual box selectors
let topLeft = document.getElementById("top-left");
let topMid = document.getElementById("top-mid");
let topRight = document.getElementById("top-right");
let midLeft = document.getElementById("mid-left");
let midMid = document.getElementById("mid-mid");
let midRight = document.getElementById("mid-right");
let botLeft = document.getElementById("bot-left");
let botMid = document.getElementById("bot-mid");
let botRight = document.getElementById("bot-right");

//Tic-Tac-Toe grid individual image selectors
let topLeftImage = document.getElementById("topLeftImage");
let topMidImage = document.getElementById("topMidImage");
let topRightImage = document.getElementById("topRightImage");
let midLeftImage = document.getElementById("midLeftImage");
let midMidImage = document.getElementById("midMidImage");
let midRightImage = document.getElementById("midRightImage");
let botLeftImage = document.getElementById("botLeftImage");
let botMidImage = document.getElementById("botMidImage");
let botRightImage = document.getElementById("botRightImage");

// Sun and Cloud player button selectors
let sunButton = document.getElementById("sun");
let cloudButton = document.getElementById("rain");

// Variables that are used in functions to only let me click each individual grid box one time
let topLeftClicked = true;
let topMidClicked = true;
let topRightClicked = true;
let midLeftClicked = true;
let midMidClicked = true;
let midRightClicked = true;
let botLeftClicked = true;
let botMidClicked = true;
let botRightClicked = true;

// let topLeftCellVal = 0;
// let topMidCellVal = 0;
// let topRightCellVal = 0;
// let midLeftCellVal = 0;
// let midMidCellVal = 0;
// let midRightCellVal = 0;
// let botLeftCellVal = 0;
// let botMidCellVal = 0;
// let botRightCellVal = 0;


// SOURCE: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
let arrayChecker = (x, y) => {
    if (x === y) return true;
    if (x == null || y == null) return false;
    if (x.length !== y.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (x[i] !== y[i]) return false;
    }
    return true;
}

const gameBoard = [{
        topRow: [0, 0, 0]
    },
    {
        midRow: [0, 0, 0]
    },
    {
        botRow: [0, 0, 0]
    }
]

const winArray_Sun = [1, 1, 1]
const winArray_Cloud = [2, 2, 2]

let topRowCheck = (array) => {
    for (let i = 0; i < array[0].length; i++) {
        if (arrayChecker(array[i].topRow, winArray_Sun)) {
            alert("Sun Player wins!!");
        } else if (arrayChecker(array[i].topRow, winArray_Cloud)) {
            alert("Cloud player wins!!");
        }
    }

}

let midRowCheck = (array) => {
    for (let i = 0; i < array[1].length; i++) {
        if (arrayChecker(array[i].midRow, winArray_Sun)) {
            alert("Sun Player wins!!");
        } else if (arrayChecker(array[i].midRow, winArray_Cloud)) {
            alert("Cloud player wins!!");
        }
    }

}

let botRowCheck = (array) => {
    for (let i = 0; i < array[2].length; i++) {
        if (arrayChecker(array[i].botRow, winArray_Sun)) {
            alert("Sun Player wins!!");
        } else if (arrayChecker(array[i].botRow, winArray_Cloud)) {
            alert("Cloud player wins!!");
        }
    }

}

let ColumnCheck = (array) => {
    for (let i = 0; i < array[0].length; i++) {
        if (arrayChecker(array[0].topRow[i], array[1].midRow[i], array[2].botRow[i], winArray_Sun)) {
            alert("Sun Player wins!!");
        } else if (arrayChecker(array[0].topRow, winArray_Cloud)) {
            alert("Cloud player wins!!");
        }
    }

}

sunButton.addEventListener("click", function (event) {
    console.log(gameBoard)
    playerTurn = 1;
    if (playerTurn > 0) {
        playerSun = true;
        playerTurn--;
    } else {
        return playerSun = false;
    }

})

cloudButton.addEventListener("click", function (event) {

    playerTurn = 1;
    if (playerTurn > 0) {
        playerCloud = true;
        playerTurn--;
    } else {
        return playerCloud = false;
    }

})

topLeft.onclick = () => {
    if (playerSun === true && topLeftClicked === true) {
        topLeftImage.src = playerSunImage;
        playerSun = false;
        playerCloud = true;
        gameBoard[0].topRow[0] = 1;

    } else if (playerCloud === true && topLeftClicked === true) {
        topLeftImage.src = playerCloudImage;
        playerSun = true;
        gameBoard[0].topRow[0] = 2;
    }
    topLeftClicked = false;
}

topMid.onclick = () => {
    if (playerSun === true && topMidClicked === true) {
        topMidImage.src = playerSunImage;
        playerSun = false;
        playerCloud = true;
        gameBoard[0].topRow[1] = 1;
    } else if (playerCloud === true && topMidClicked === true) {
        topMidImage.src = playerCloudImage;
        playerSun = true;
        gameBoard[0].topRow[1] = 2;
    }
    topMidClicked = false;
}
topRight.onclick = () => {
    if (playerSun === true && topRightClicked === true) {
        topRightImage.src = playerSunImage;
        playerSun = false;
        playerCloud = true;
        gameBoard[0].topRow[2] = 1;
    } else if (playerCloud === true && topRightClicked === true) {
        topRightImage.src = playerCloudImage;
        playerSun = true;
        gameBoard[0].topRow[2] = 2;
    }
    topRightClicked = false;
}
midLeft.onclick = () => {
    if (playerSun === true && midLeftClicked === true) {
        midLeftImage.src = playerSunImage;
        playerSun = false;
        playerCloud = true;
        gameBoard[1].midRow[0] = 1;
    } else if (playerCloud === true && midLeftClicked === true) {
        midLeftImage.src = playerCloudImage;
        playerSun = true;
        gameBoard[1].midRow[0] = 2;
    }
    midLeftClicked = false;
}
midMid.onclick = () => {
    if (playerSun === true && midMidClicked === true) {
        midMidImage.src = playerSunImage;
        playerSun = false;
        playerCloud = true;
        gameBoard[1].midRow[1] = 1;
    } else if (playerCloud === true && midMidClicked === true) {
        midMidImage.src = playerCloudImage;
        playerSun = true;
        gameBoard[1].midRow[1] = 2;
    }
    midMidClicked = false;
}
midRight.onclick = () => {

    if (playerSun === true && midRightClicked === true) {
        midRightImage.src = playerSunImage;
        playerSun = false;
        playerCloud = true;
        gameBoard[1].midRow[2] = 1;
    } else if (playerCloud === true && midRightClicked === true) {
        midRightImage.src = playerCloudImage;
        playerSun = true;
        gameBoard[1].midRow[2] = 2;
    }
    midRightClicked = false;
}
botLeft.onclick = () => {

    if (playerSun === true && botLeftClicked === true) {
        botLeftImage.src = playerSunImage;
        playerSun = false;
        playerCloud = true;
        gameBoard[2].botRow[0] = 1;
    } else if (playerCloud === true && botLeftClicked === true) {
        botLeftImage.src = playerCloudImage;
        playerSun = true;
        gameBoard[2].botRow[0] = 2;
    }
    botLeftClicked = false;
}
botMid.onclick = () => {

    if (playerSun === true && botMidClicked === true) {
        botMidImage.src = playerSunImage;
        playerSun = false;
        playerCloud = true;
        gameBoard[2].botRow[1] = 1;
    } else if (playerCloud === true && botMidClicked === true) {
        botMidImage.src = playerCloudImage;
        playerSun = true;
        gameBoard[2].botRow[1] = 2;
    }
    botMidClicked = false;
}
botRight.onclick = () => {

    if (playerSun === true && botRightClicked === true) {
        botRightImage.src = playerSunImage;
        playerSun = false;
        playerCloud = true;
        gameBoard[2].botRow[2] = 1;
    } else if (playerCloud === true && botRightClicked === true) {
        botRightImage.src = playerCloudImage;
        playerSun = true;
        gameBoard[2].botRow[2] = 2;
    }
    botRightClicked = false;
}