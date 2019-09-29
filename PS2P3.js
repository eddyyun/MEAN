function* cuber(value){
    yield Math.pow(value,3);
}

let array = [1,2,3,4,5,6,7];

console.log(array.map(x => cuber(x).next().value));
