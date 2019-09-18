const strarray = ["4+2", "5*7", '6-1', '9/2'];

for (let counter=0; counter<4; counter++){
    const expression = strarray[counter];

    let exparr = expression.split("");

    let operator =  (left, mid, right) => eval(left + mid + right);

    console.log(`${expression} = ${operator(exparr[0],exparr[1],exparr[2])}`);

}

