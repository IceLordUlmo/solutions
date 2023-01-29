function spiralOrder(matrix) {
    let left = 0
    let top = 0
    let right = matrix[0].length - 1
    let bottom = matrix.length - 1
    let array = []

    while (array.length < matrix[0].length * matrix.length) {

      for (i = top; i <= right; i++) {
        if (array.length === matrix[0].length * matrix.length) return array;
             array.push(matrix[top][i])
        }
        top++
        for (i = top; i <= bottom; i++) {
            if (array.length === matrix[0].length * matrix.length) return array;
              array.push(matrix[i][right])
        }
        right--
        for (i = right; i >= left; i--) {
            if (array.length === matrix[0].length * matrix.length) return array;
              array.push(matrix[bottom][i])
        }
        bottom--
        for (i = bottom; i >= top;  i--) {
            if (array.length === matrix[0].length * matrix.length) return array;
          array.push(matrix[i][left])
        }
        left++
        }
    return array;

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
