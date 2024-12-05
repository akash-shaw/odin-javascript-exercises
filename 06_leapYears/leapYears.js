const leapYears = function(year) {
    if(!Number.isInteger(year)) return "ERROR";
    if(year<0)  return "ERROR";

    let isLeapyear=false;

    if(year%100==0){
        if(year%400==0) isLeapyear=true;
    }
    else{
        if(year%4==0)   isLeapyear = true;
    }
    return isLeapyear;
};

// Do not edit below this line
module.exports = leapYears;
