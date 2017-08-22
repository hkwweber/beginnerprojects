function indexOf(str, queryStr) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === queryStr[0]) {
            if (queryStr.length === 1) {
                return i;
            }
            else {
                if (longStrChecker(str.slice(i), queryStr)) {
                  return i;
                }
                else return -1;
                //recursive case - queryStr.length > 1
                //need something to iterate through every letter of queryStr and check if it's the same as the 
                
            }
        }
           }
    return -1;
       }

function longStrChecker(str,queryStr) {
    if (queryStr.length >1) {
        if (str[0] === queryStr[0]) {
            return longStrChecker(str.slice(1),queryStr.slice(1));
        }
        else return false;
    }
    return true;
}


indexOf('helloWorld','World');
