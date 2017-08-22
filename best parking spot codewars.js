function bestParkingSpot(arr){
//   create arr for distances to live
  var distanceArr = [];
  var totalDistance;
  var distanceToStore;
  var openIndex;
// loop through array to look for open spot
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'OPEN') {
      openIndex = i;
//    1st distance bw spot and store ---- TIMES 2
      distanceToStore = openIndex;
      totalDistance = distanceToStore*2; //add distanceToStore*2 to total distance
// 2nd distance: bw spot and nearest corral ----TIMES 2  
// call corralDist function - multiply by 2 and add to total distance
      totalDistance += (corralDist(arr,openIndex))*2;
//store it all in array
      distanceArr[openIndex] = totalDistance;
    }  
  }
  var minDistance = distanceArr.reduce(function(a,b) {
    return Math.min(a,b);
  });
  console.log(distanceArr);
  var minIndex = distanceArr.lastIndexOf(minDistance);
  console.log('min index: ', minIndex);
  console.log('min distance: ', minDistance);
  return minIndex;
}


function corralDist (arr,index) {
  //to the left
  var leftArr = arr.slice(0,index);
  var toTheLeft;
  if (leftArr.lastIndexOf('CORRAL') > -1) {
    toTheLeft = index - leftArr.lastIndexOf('CORRAL');
  }
  // console.log(index);
  // console.log('left arr: ', leftArr, ' ', toTheLeft, ' steps');
  //to the right
  var rightArr = arr.slice(index);
  var toTheRight;
  if (rightArr.indexOf('CORRAL') > -1) {
    toTheRight = rightArr.indexOf('CORRAL');
  }
  // console.log('right arr: ', rightArr, ' ', toTheRight, ' steps');
  if (toTheRight && toTheLeft) {
    return Math.min(toTheLeft,toTheRight);
  }
  else if (!toTheRight) {
    return toTheLeft;
  }
  else if (!toTheLeft) {
    return toTheRight;
  }
} 

var s = ["STORE", "OPEN","TAKEN","OPEN","CORRAL"];
// should be 3

// var s = ["STORE", "TAKEN", "TAKEN", "CORRAL", "TAKEN", "OPEN", "OPEN", "TAKEN", "CORRAL"];
//  should be 5
bestParkingSpot(s);
