const fibonacci = function(n) {
    if(typeof n != 'number')n=parseInt(n);
    if(n<0) return "OOPS";
    if(n==0) return 0;
    if(n==1 || n==2) return 1;
    let former=1;
    let later=1;
    let count = 2;
    while(count<n){
        let sum = former + later;
        former = later;
        later = sum;
        count++;
    }
    return later;
};

// Do not edit below this line
module.exports = fibonacci;
