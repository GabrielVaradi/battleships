let shipOne = {
  initialPosition: '',
  secondPosition: '',
  thirdPosition: '',
  fourthPosition: '',
  fifthPosition: '',
  lives: 5,
}

let shipTwo = {
  initialPosition: '',
  secondPosition: '',
  thirdPosition: '',
  fourthPosition: '',
  lives: 4,
}

let shipThree = {
  initialPosition: '',
  secondPosition: '',
  thirdPosition: '',
  lives: 3,
}

let shipFour = {
  initialPosition: '',
  secondPosition: '',
  thirdPosition: '',
  lives: 3,
}

let shipFive = {
  initialPosition: '',
  secondPosition: '',
  lives: 2,
}

let playerOneShips = [];
let playerTwoShips = [];


const generateShipOnePosition = (initialPosition, orientation) => {
  let secondPosition;
  let thirdPosition;
  let fourthPosition;
  let fifthPosition;
  if (orientation < 0.5) {
    secondPosition = initialPosition + 1
    thirdPosition = secondPosition + 1
    fourthPosition = thirdPosition + 1
    fifthPosition = fourthPosition + 1
    shipOne = {
      [initialPosition]: true,
      [secondPosition]: true,
      [thirdPosition]: true,
      [fourthPosition]: true,
      [fifthPosition]: true,
      lives: 5
    }
  } else {
    secondPosition = initialPosition + 7
    thirdPosition = secondPosition + 7
    fourthPosition = thirdPosition + 7
    fifthPosition = fourthPosition + 7
    shipOne = {
      [initialPosition]: true,
      [secondPosition]: true,
      [thirdPosition]: true,
      [fourthPosition]: true,
      [fifthPosition]: true,
      lives: 5
    }
  }
}

const generateShipOne = () => {
  const orientation = Math.random()
  do {
    const initialPosition = (Math.floor(Math.random() * 49)) + 1
    generateShipOnePosition(initialPosition, orientation)
  } while ((orientation >= 0.5 && Object.keys(shipOne)[4] > 49) || (orientation < 0.5 && (3 < Object.keys(shipOne)[0] && Object.keys(shipOne)[0] < 8) || (10 < Object.keys(shipOne)[0] && Object.keys(shipOne)[0] < 15) || (17 < Object.keys(shipOne)[0] && Object.keys(shipOne)[0] < 22) || (24 < Object.keys(shipOne)[0] && Object.keys(shipOne)[0] < 29) || (31 < Object.keys(shipOne)[0] && Object.keys(shipOne)[0] < 36) || (38 < Object.keys(shipOne)[0] && Object.keys(shipOne)[0] < 43) || (45 < Object.keys(shipOne)[0] && Object.keys(shipOne)[0] < 50)))
}

const generateShipTwoPosition = (initialPosition, orientation) => {
  let secondPosition;
  let thirdPosition;
  if (orientation < 0.5) {
    secondPosition = initialPosition + 1
    thirdPosition = secondPosition + 1
    fourthPosition = thirdPosition + 1
    shipTwo = {
      [initialPosition]: true,
      [secondPosition]: true,
      [thirdPosition]: true,
      [fourthPosition]: true,
      lives: 4
    }
  } else {
    secondPosition = initialPosition + 7
    thirdPosition = secondPosition + 7
    fourthPosition = thirdPosition + 7
    shipTwo = {
      [initialPosition]: true,
      [secondPosition]: true,
      [thirdPosition]: true,
      [fourthPosition]: true,
      lives: 4
    }
  }
}

const generateShipTwo = () => {
  const shipOnePos = Object.keys(shipOne).splice(0, 5)
  const orientation = Math.random()
  do {
    const initialPosition = (Math.floor(Math.random() * 49)) + 1
    generateShipTwoPosition(initialPosition, orientation)
  } while (Object.keys(shipTwo).includes(shipOnePos[0]) || Object.keys(shipTwo).includes(shipOnePos[1]) || Object.keys(shipTwo).includes(shipOnePos[2]) || Object.keys(shipTwo).includes(shipOnePos[3]) || Object.keys(shipTwo).includes(shipOnePos[4]) || (orientation >= 0.5 && Object.keys(shipTwo)[3] > 49) || (orientation < 0.5 && (4 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 8) || (11 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 15) || (18 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 22) || (25 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 29) || (32 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 36) || (39 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 43) || (46 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 50)));
}

const generateShipThreePosition = (initialPosition, orientation) => {
  let secondPosition;
  let thirdPosition;
  if (orientation < 0.5) {
    secondPosition = initialPosition + 1
    thirdPosition = secondPosition + 1
    shipThree = {
      [initialPosition]: true,
      [secondPosition]: true,
      [thirdPosition]: true,
      lives: 3
    }
  } else {
    secondPosition = initialPosition + 7
    thirdPosition = secondPosition + 7
    shipThree = {
      [initialPosition]: true,
      [secondPosition]: true,
      [thirdPosition]: true,
      lives: 3
    }
  }
}

const generateShipThree = () => {
  const shipOnePos = Object.keys(shipOne).splice(0, 5)
  const shipTwoPos = Object.keys(shipTwo).splice(0, 4)
  const orientation = Math.random()
  do {
    const initialPosition = (Math.floor(Math.random() * 49)) + 1
    generateShipThreePosition(initialPosition, orientation)
  } while (Object.keys(shipThree).includes(shipOnePos[0]) || Object.keys(shipThree).includes(shipOnePos[1]) || Object.keys(shipThree).includes(shipOnePos[2]) || Object.keys(shipThree).includes(shipOnePos[3]) || Object.keys(shipThree).includes(shipOnePos[4]) || Object.keys(shipThree).includes(shipTwoPos[0]) || Object.keys(shipThree).includes(shipTwoPos[1]) || Object.keys(shipThree).includes(shipTwoPos[2]) || Object.keys(shipThree).includes(shipTwoPos[3]) || (orientation >= 0.5 && Object.keys(shipThree)[2] > 49) || (orientation < 0.5 && (5 < Object.keys(shipThree)[0] && Object.keys(shipThree)[0] < 8) || (12 < Object.keys(shipThree)[0] && Object.keys(shipThree)[0] < 15) || (19 < Object.keys(shipThree)[0] && Object.keys(shipThree)[0] < 22) || (26 < Object.keys(shipThree)[0] && Object.keys(shipThree)[0] < 29) || (33 < Object.keys(shipThree)[0] && Object.keys(shipThree)[0] < 36) || (40 < Object.keys(shipThree)[0] && Object.keys(shipThree)[0] < 43) || (47 < Object.keys(shipThree)[0] && Object.keys(shipThree)[0] < 50)));
}

const generateShipFourPosition = (initialPosition, orientation) => {
  let secondPosition;
  let thirdPosition;
  if (orientation < 0.5) {
    secondPosition = initialPosition + 1
    thirdPosition = secondPosition + 1
    shipFour = {
      [initialPosition]: true,
      [secondPosition]: true,
      [thirdPosition]: true,
      lives: 3
    }
  } else {
    secondPosition = initialPosition + 7
    thirdPosition = secondPosition + 7
    shipFour = {
      [initialPosition]: true,
      [secondPosition]: true,
      [thirdPosition]: true,
      lives: 3
    }
  }
}

const generateShipFour = () => {
  const shipOnePos = Object.keys(shipOne).splice(0, 5)
  const shipTwoPos = Object.keys(shipTwo).splice(0, 4)
  const shipThreePos = Object.keys(shipThree).splice(0, 3)
  const orientation = Math.random()
  do {
    const initialPosition = (Math.floor(Math.random() * 49)) + 1
    generateShipFourPosition(initialPosition, orientation)
  } while (Object.keys(shipFour).includes(shipOnePos[0]) || Object.keys(shipFour).includes(shipOnePos[1]) || Object.keys(shipFour).includes(shipOnePos[2]) || Object.keys(shipFour).includes(shipOnePos[3]) || Object.keys(shipFour).includes(shipOnePos[4]) || Object.keys(shipFour).includes(shipTwoPos[0]) || Object.keys(shipFour).includes(shipTwoPos[1]) || Object.keys(shipFour).includes(shipTwoPos[2]) || Object.keys(shipFour).includes(shipTwoPos[3]) || Object.keys(shipFour).includes(shipThreePos[0]) || Object.keys(shipFour).includes(shipThreePos[1]) || Object.keys(shipFour).includes(shipThreePos[2]) || (orientation >= 0.5 && Object.keys(shipFour)[2] > 49) || (orientation < 0.5 && (5 < Object.keys(shipFour)[0] && Object.keys(shipFour)[0] < 8) || (12 < Object.keys(shipFour)[0] && Object.keys(shipFour)[0] < 15) || (19 < Object.keys(shipFour)[0] && Object.keys(shipFour)[0] < 22) || (26 < Object.keys(shipFour)[0] && Object.keys(shipFour)[0] < 29) || (33 < Object.keys(shipFour)[0] && Object.keys(shipFour)[0] < 36) || (40 < Object.keys(shipFour)[0] && Object.keys(shipFour)[0] < 43) || (47 < Object.keys(shipFour)[0] && Object.keys(shipFour)[0] < 50)));
}

const generateShipFivePosition = (initialPosition, orientation) => {
  let secondPosition;
  if (orientation < 0.5) {
    secondPosition = initialPosition + 1
    shipFive = {
      [initialPosition]: true,
      [secondPosition]: true,
      lives: 2
    }
  } else {
    secondPosition = initialPosition + 7
    shipFive = {
      [initialPosition]: true,
      [secondPosition]: true,
      lives: 2
    }
  }
}

const generateShipFive = () => {
  const shipOnePos = Object.keys(shipOne).splice(0, 5)
  const shipTwoPos = Object.keys(shipTwo).splice(0, 4)
  const shipThreePos = Object.keys(shipThree).splice(0, 3)
  const shipFourPos = Object.keys(shipFour).splice(0, 3)
  const orientation = Math.random()
  do {
    const initialPosition = (Math.floor(Math.random() * 49)) + 1
    generateShipFivePosition(initialPosition, orientation)
  } while (Object.keys(shipFive).includes(shipOnePos[0]) || Object.keys(shipFive).includes(shipOnePos[1]) || Object.keys(shipFive).includes(shipOnePos[2]) || Object.keys(shipFive).includes(shipOnePos[3]) || Object.keys(shipFive).includes(shipOnePos[4]) || Object.keys(shipFive).includes(shipTwoPos[0]) || Object.keys(shipFive).includes(shipTwoPos[1]) || Object.keys(shipFive).includes(shipTwoPos[2]) || Object.keys(shipFive).includes(shipTwoPos[3]) || Object.keys(shipFive).includes(shipThreePos[0]) || Object.keys(shipFive).includes(shipThreePos[1]) || Object.keys(shipFive).includes(shipThreePos[2]) || Object.keys(shipFive).includes(shipFourPos[0]) || Object.keys(shipFive).includes(shipFourPos[1]) || Object.keys(shipFive).includes(shipFourPos[2]) || (orientation >= 0.5 && Object.keys(shipFive)[1] > 49) || (orientation < 0.5 && (6 < Object.keys(shipFive)[0] && Object.keys(shipFive)[0] < 8) || (13 < Object.keys(shipFive)[0] && Object.keys(shipFive)[0] < 15) || (20 < Object.keys(shipFive)[0] && Object.keys(shipFive)[0] < 22) || (27 < Object.keys(shipFive)[0] && Object.keys(shipFive)[0] < 29) || (34 < Object.keys(shipFive)[0] && Object.keys(shipFive)[0] < 36) || (41 < Object.keys(shipFive)[0] && Object.keys(shipFive)[0] < 43) || (48 < Object.keys(shipFive)[0] && Object.keys(shipFive)[0] < 50)));
}

const generatePlayerOneShips = () => {
  generateShipOne()
  generateShipTwo()
  generateShipThree()
  generateShipFour()
  generateShipFive()
  playerOneShips.push(shipOne, shipTwo, shipThree, shipFour, shipFive)
}

const generatePlayerTwoShips = () => {
  generateShipOne()
  generateShipTwo()
  generateShipThree()
  generateShipFour()
  generateShipFive()
  playerTwoShips.push(shipOne, shipTwo, shipThree, shipFour, shipFive)
}

generatePlayerOneShips()
generatePlayerTwoShips()
console.log(playerOneShips)
console.log(playerTwoShips)