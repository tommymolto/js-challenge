
function main(args){
    let modArray = args.map(x => x * x );
    modArray = modArray.sort( (a, b) => a - b);
    return modArray;
}

array = [1, 2, 3, 5, 6, 8, 9];
array2 = [-2, -1];
array3 = [-10, -5, 0, 5, 10];

console.log(main(array));
console.log(main(array2));
console.log(main(array3));
