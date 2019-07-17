let shipOne = {
  initialPosition: '',
  secondPosition: '',
  thirdPosition: '',
  lives: 3,
}

let shipTwo = {
  initialPosition: '',
  secondPosition: '',
  thirdPosition: '',
  lives: 3,
}

generateShipOnePosition = (initialPosition, orientation) => {
  let secondPosition;
  let thirdPosition;
  if (orientation < 0.5) {
    secondPosition = initialPosition + 1
    thirdPosition = secondPosition + 1
    shipOne = {
      [initialPosition]: true,
      [secondPosition]: true,
      [thirdPosition]: true,
      lives: 3
    }
  } else {
    secondPosition = initialPosition + 7
    thirdPosition = secondPosition + 7
    shipOne = {
      [initialPosition]: true,
      [secondPosition]: true,
      [thirdPosition]: true,
      lives: 3
    }
  }
}

const generateShipOne = () => {
  const orientation = Math.random()
  const initialPosition = (Math.floor(Math.random() * 49))+1
  generateShipOnePosition(initialPosition, orientation)
}

const generateShipTwoPosition = (initialPosition, orientation) => {
  let secondPosition;
  let thirdPosition;
  if (orientation < 0.5) {
    secondPosition = initialPosition + 1
    thirdPosition = secondPosition + 1
    shipTwo = {
      [initialPosition]: true,
      [secondPosition]: true,
      [thirdPosition]: true,
      lives: 3
    }
  } else {
    secondPosition = initialPosition + 7
    thirdPosition = secondPosition + 7
    shipTwo = {
      [initialPosition]: true,
      [secondPosition]: true,
      [thirdPosition]: true,
      lives: 3
    }
  }
}

const generateShipTwo = () => {
  const shipOnePos = Object.keys(shipOne).splice(0, 3)
  const orientation = Math.random()
    do {
      const initialPosition = (Math.floor(Math.random() * 49)) + 1
      generateShipTwoPosition(initialPosition, orientation)
      console.log(shipTwo)
      console.log(shipOnePos[0])
      console.log(Object.keys(shipTwo)[2])
    } while (Object.keys(shipTwo).includes(shipOnePos[0]) || Object.keys(shipTwo).includes(shipOnePos[1]) || Object.keys(shipTwo).includes(shipOnePos[2]) || (orientation >= 0.5 && Object.keys(shipTwo)[2] > 49) || (orientation < 0.5 && (5 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 8) || (12 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 15) || (19 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 22) || (26 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 29) || (33 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 36) || (40 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 43) || (47 < Object.keys(shipTwo)[0] && Object.keys(shipTwo)[0] < 50)) );
}


generateShipOne()
generateShipTwo()
console.log("final ship one: ", shipOne)
console.log("final ship two:", shipTwo)


// Make sure the boat is not at the end of the board