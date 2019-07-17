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
  const initialPosition = Math.floor(Math.random() * 49)
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
    do {
      const orientation = Math.random()
      const initialPosition = Math.floor(Math.random() * 49)
      generateShipTwoPosition(initialPosition, orientation)
      console.log(shipTwo)
      console.log(shipOnePos[0])
    } while (Object.keys(shipTwo).includes(shipOnePos[0]) || Object.keys(shipTwo).includes(shipOnePos[1]) || Object.keys(shipTwo).includes(shipOnePos[2]));
}


generateShipOne()
generateShipTwo()
console.log("final ship one: ", shipOne)
console.log("final ship two:", shipTwo)


// Make sure the boat is not at the end of the board