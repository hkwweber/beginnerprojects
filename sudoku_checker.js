function sudokuChecker(sudokuArr) {
function getRow(sudokuArr,rowIndex) {
  return sudokuArr[rowIndex];
}

function getColumn(sudokuArr, columnIndex) {
  var columnArr = [];
  for (var i = 0; i < sudokuArr.length; i++) {
    columnArr.push(sudokuArr[i][columnIndex]);
  }
  return columnArr;
}

function getSection(sudokuArr,y,x) {
  var sectionArr = [];
//determing column starting position for counting array within array  
  var columnStartingIndex;
  if (y === 0) {
    columnStartingIndex = 0;
  }
  else if (y === 1) {
    columnStartingIndex = 3;
  }
  else if (y === 2) {
    columnStartingIndex = 6;
  }
//determining horizontal starting position for counting array  
  var rowStartingIndex;
  if (x === 0) {
    rowStartingIndex = 0;
  }
  else if (x === 1) {
    rowStartingIndex = 3;
  }
  else if (x === 2) {
    rowStartingIndex = 6;
  }  
//pushing time
  for (var i = rowStartingIndex; i <= rowStartingIndex + 2; i++) {
    for (var j = columnStartingIndex; j <= columnStartingIndex + 2; j++){
      sectionArr.push(sudokuArr[i][j]);
    }
  }
  return sectionArr;
}

//CHECKING TIME
function rowChecker(sudokuArr) {
  var rowArray = [];
  for (var i = 0; i < sudokuArr.length; i++) {
    rowArray = getRow(sudokuArr,i);
    rowArray.sort();
    for (var j = 0; j < rowArray.length; j++) {
      if (rowArray[j] !== j+1) {
        return false;
      }
    }
  }
  return true;
}

function columnChecker(sudokuArr) {
  var columnArray = [];
  for (var i = 0; i < sudokuArr.length; i++) {
    columnArray = getColumn(sudokuArr,i);
    columnArray.sort();
    for (var j = 0; j < columnArray.length; j++) {
      if (columnArray[j] !== j+1) {
        return false;
      }
    }
  }
  return true;
}

function sectionChecker(sudokuArr) {
  var sectionArray = [];
  // loop to set first num:
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      sectionArray = getSection(sudokuArr,i,j);
      sectionArray.sort();
      for (var k = 0; k < sectionArray.length; k++) {
        if (sectionArray[k] !== k+1) {
          return false;
        }
      }
    }
  }
  return true;
}

if (columnChecker(sudokuArr) && sectionChecker(sudokuArr) && rowChecker(sudokuArr)) {
  return true;
}
 else return false;
}




// if x is 0 you start at 0, if 1 start at 3, if 2 start at 6
//              0           1        2   
//              0 1 2    3 4 5    6 7 8 
var puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ], //0 
              [ 2,7,1,   9,6,3,   4,8,5 ], //1  //0
              [ 4,6,3,   5,8,1,   7,9,2 ], //2  

              [ 9,3,4,   6,1,7,   2,5,8 ],  //3  
              [ 5,1,7,   2,3,8,   9,6,4 ], //4  //1 
              [ 6,8,2,   4,5,9,   3,7,1 ], //5  

              [ 1,5,9,   8,7,4,   6,2,3 ], //6  
              [ 7,4,6,   3,2,5,   8,1,9 ], //7  //2
              [ 3,2,8,   1,9,6,   5,4,7 ]]; //8  
              
// getRow(puzzle, 8);
// -> [ 3,2,8,1,9,6,5,4,7 ]

// getRow(puzzle, 0);
// // -> [ 8,9,5,7,4,2,1,3,6 ]

// getColumn(puzzle, 0);
// // -> [ 8,2,4,9,5,6,1,7,3 ]

// getColumn(puzzle, 8);
// // -> [ 6,5,2,8,4,1,3,9,7 ]

// getSection(puzzle, 0, 0);
// // -> [ 8,9,5,2,7,1,4,6,3 ]

// getSection(puzzle, 1,0);
// // -> [ 7,4,2,9,6,3,5,8,1 ]       

sudokuChecker(puzzle);
