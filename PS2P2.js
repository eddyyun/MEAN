function* sentenceSplit(value){
    let sentence = value;
    let word = sentence.split(' ');
    for (let count= 0; count < word.length; count+=1){
        yield word[count];
    }
}

let word = sentenceSplit("All I know is something like a bird within her sang");

for (let counter= 0; counter < 11; counter+=1){
    console.log(word.next().value);
}





