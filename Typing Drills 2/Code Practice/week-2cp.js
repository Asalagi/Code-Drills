// WEEK TWO DAY ONE - 10/09/2023

    // if square l x w = area
    // if rectangle  l + l + w + w = perimeter

const areaOrPerimeter = function(length, width) {
    if (length === width) {
        return length * width;
    } else {
        return length * 2 + width * 2;
    }
  };


function setAlarm(employed, vacation){
    return employed === true && vacation === false ? true : false; 
};

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  };