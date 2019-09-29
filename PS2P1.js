function* fib(start = 0, end = 100, step = 1) {
    let a = 0;
    let b = 1;
    let temp;
    for (let i = start; i < end; i += step) {
        yield a;
        temp = b;
        b = b + a;
        a = temp;
    }
}

let bob = fib();

function* evenSearch(){
    while(true) {
        let current = bob.next().value;
        if (current % 2 == 0)
            yield current;
    }
}



let answer = evenSearch();

console.log(answer.next().value);
console.log(answer.next().value);
console.log(answer.next().value);
console.log(answer.next().value);
console.log(answer.next().value);
console.log(answer.next().value);
