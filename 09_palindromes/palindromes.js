const palindromes = function (str) {
    return cleanStr(str).toLowerCase() == reverseStr(cleanStr(str)).toLowerCase();
};

function cleanStr(str){
    return str
            .split("")
            .filter( c=>{return (c>="A" && c<="Z") || (c>="a" && c<="z") || (c>="0" && c<="9");})
            .join("");
}
function reverseStr (str){
    return str.split("")
            .reverse()
            .join("");
}

console.log(reverseStr("Racecar!").toLowerCase());
console.log("Racecar!".toLowerCase());
console.log(palindromes("Racecar!"))

// Do not edit below this line
module.exports = palindromes;
