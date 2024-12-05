const sumAll = function(lowerLimit, upperLimit) {
    if(lowerLimit<0||upperLimit<0)  return "ERROR";
    // if(Math.floor(lowerLimit)!=lowerLimit||Math.floor(upperLimit)!=upperLimit)  return "ERROR";
    // if(typeof(lowerLimit)!=typeof(5)||typeof(upperLimit)!=typeof(5)) return "ERROR";
    if(!Number.isInteger(upperLimit)||!Number.isInteger(lowerLimit)) return "ERROR";
    
    let sum = 0;
    for(let i=Math.min(upperLimit,lowerLimit);i<=Math.max(upperLimit,lowerLimit);i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
