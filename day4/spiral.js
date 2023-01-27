function spiralOrder(matrix)
{
  // direction is which direction we're going to move next step.
  // the first number is the vertical direction, the second number is the horizontal direction
  let direction = [0, 1];
  let location = [0, 0];
  let newMatrix = []
  let itemCount =  matrix.length * matrix[0].length;

  for (x = 0; x < itemCount; x++)
  {
    //push the item we're at to the list
    newMatrix.push(matrix[location[0]][location[1]]);

    //blank out the item we just grabbed so it cannot be grabbed a second time
    matrix[location[0]][location[1]] = null;

    //move our location to the next spot
    location = navigate(direction, location, matrix);
  }

  return newMatrix;
}

function navigate(direction, location, matrix)
{
  // make a new location
  let newLocation = addMatrix(direction, location);

  // if our new location is not valid
  if (!isValidLocation(newLocation, matrix))
  {
    // turn right
    direction = turnRight(direction);

    //find a new location based on our new direction
    newLocation = addMatrix(direction, location);
  }

  return newLocation;
}

function addMatrix(mat1, mat2)
{
  //add two matrixes that only have two items together
  return [mat1[0] + mat2[0], mat1[1] + mat2[1]];
}

function isValidLocation(location, matrix)
{
  // if we're out of bounds by having a negative value, not a valid location
  if (location[0] <= -1 || location[1] <= -1)
  {
    return false;
  }

  // if we're out of bounds by going past the end of the matrix, not a valid location
  if (location[0] >= matrix.length || location[1] >= matrix[0].length)
  {
    return false;
  }

  // if we've already grabbed the value at the new location and nulled it, not a valid location
  if (matrix[location[0]][location[1]] === null)
  {
    return false;
  }


  //we passed all the fail checks, the location is valid
  return true;
}

function turnRight(direction)
{
  // hang on to direction 1
  let temp = direction[1];

  // swap the horizontal and vertical direction values
  direction [1] = direction [0];
  direction [0] = temp;

  // if we're switching back to moving vertically, invert the direction
  if (direction[1] !== 0)
  {
    direction[1] *= -1;
  }

  return direction;
}

matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

matrix = [[1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
          [11,12, 13, 14, 15],
          [16, 17, 18, 19, 20]]

console.log(spiralOrder(matrix));
