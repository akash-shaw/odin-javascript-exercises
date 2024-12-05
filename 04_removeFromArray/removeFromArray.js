const removeFromArray = function(arr, ...args) {
    let newArr = [];
    for(item of arr){
        if(args.includes(item)){
            continue;
        }
        else{
            newArr.push(item);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
