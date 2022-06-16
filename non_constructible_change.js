
function main(args){
    let max = args.reduce((a, b) => 
        a +b
    , 0);
   return max;
}


array = [5, 7, 1, 1, 2, 3, 22];
array2 = [1, 1, 1, 1, 1];
array3 = [1, 5, 1, 1, 1, 10, 15, 20, 100];

console.log(main(array));
console.log(main(array2));
console.log(main(array3));