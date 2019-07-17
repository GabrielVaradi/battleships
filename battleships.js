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

generateShipOnePosition = (initialPosition, orientation) => {
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
  const initialPosition = (Math.floor(Math.random() * 49)) +1
  generateShipOnePosition(initialPosition, orientation)
  } while ((orientation >= 0.5 && Object.keys(shipOne)[2] > 49) || (orientation < 0.5 && (3 < Object.keys(shipOne)[0] && Object.keys(shipOne)[0] < 8) || (10 < Object.keys(shipOne)[0] && Object.keys(shipOne)[0] < 15) || (17 < Object.keys(shipOne)[0] && Object.keys(shipOne)[0] < 22) || (24 < Object.keys(shipOne)[0] && Object.keys(shipOne)[0] < 29) || (31 < Object.keys(shipOne)[0] && Object.keys(shipOne)[0] < 36) || (38 < Object.keys(shipOne)[0] && Object.keys(shipOne)[0] < 43) || (45 < Object.keys(shipOne)[0] && Object.keys(shipOne)[0] < 50)))
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
    } while (Object.keys(shipTwo).includes(shipOnePos[0]) || Object.keys(shipTwo).includes(shipOnePos[1]) || Object.keys(shipTwo).includes(shipOnePos[2]) || Object.keys(shipTwo).includes(shipOnePos[3]) || Object.keys(shipTwo).includes(shipOnePos[4]) || (orientation >= 0.5 && Object.keys(shipTwo)[2] > 49) || (orientation < 0.5 && (4 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 8) || (11 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 15) || (18 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 22) || (25 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 29) || (32 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 36) || (39 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 43) || (46 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 50)) );
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
    } while (Object.keys(shipThree).includes(shipOnePos[0]) || Object.keys(shipThree).includes(shipOnePos[1]) || Object.keys(shipThree).includes(shipOnePos[2]) || Object.keys(shipThree).includes(shipOnePos[3]) || Object.keys(shipThree).includes(shipOnePos[4]) || Object.keys(shipThree).includes(shipTwoPos[0]) ||  Object.keys(shipThree).includes(shipTwoPos[1]) || Object.keys(shipThree).includes(shipTwoPos[2]) || Object.keys(shipThree).includes(shipTwoPos[3]) || (orientation >= 0.5 && Object.keys(shipThree)[2] > 49) || (orientation < 0.5 && (4 < Object.keys(shipThree)[0] && Object.keys(shipThree)[0] < 8) || (11 < Object.keys(shipThree)[0] && Object.keys(shipThree)[0] < 15) || (18 < Object.keys(shipThree)[0] && Object.keys(shipThree)[0] < 22) || (25 < Object.keys(shipThree)[0] && Object.keys(shipThree)[0] < 29) || (32 < Object.keys(shipThree)[0] && Object.keys(shipThree)[0] < 36) || (39 < Object.keys(shipThree)[0] && Object.keys(shipThree)[0] < 43) || (46 < Object.keys(shipThree)[0] && Object.keys(shipThree)[0] < 50)) );
}


generateShipOne()
generateShipTwo()
generateShipThree()
console.log("final ship one: ", shipOne)
console.log("final ship two:", shipTwo)
console.log("final ship three:", shipThree)


