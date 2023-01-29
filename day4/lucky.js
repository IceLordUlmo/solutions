function luckyNumbers(matrix) {

  let luckyNumberArray = [];
  // your code here...
  for (rowIndex=0; rowIndex < matrix.length; rowIndex++)
  {
    let row = matrix[rowIndex];

    let rowMinimumIndex = 0;
    let rowMinimum = row[0];

    // finding the index of the lowest value in this row
    for (columnIndex = 1; columnIndex < row.length; columnIndex++)
    {

      if (row[columnIndex] < rowMinimum)
      {
        rowMinimumIndex = columnIndex;
        rowMinimum = row[columnIndex];
      }
    }

    let columnMaxIndex = 0;
    let biggest = true;
    for (rowIndex2 = 0; rowIndex2 < matrix.length; rowIndex2++)
    {
      if (matrix[rowIndex2][rowMinimumIndex] > rowMinimum)
      {
        biggest = false;
      }
    }

    if (biggest)
    {
      luckyNumberArray.push (rowMinimum);
    }
  }

  return luckyNumberArray;
}



matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]
