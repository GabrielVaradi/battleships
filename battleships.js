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
  const initialPosition = Math.floor(Math.random() * 49) // Create a random number between 0 and 49
  generateShipOnePosition(initialPosition, orientation)
}

const generateShipTwoPosition = (initialPosition, orientation) => {
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

const generateShipTwo = () => {
  const orientation = Math.random()
  const initialPosition = Math.floor(Math.random() * 49) // Create a random number between 0 and 49

  while (!Object.keys(shipTwo).includes(Object.keys(shipOne)))

  generateShipTwoPosition(initialPosition, orientation)
}


generateShipOne()
generateShipTwo()
console.log(shipOne)
console.log(shipTwo)


// Make sure the boat is not at the end of the board