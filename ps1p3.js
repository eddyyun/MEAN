const callback = (string1, lambda) => lambda(string1);

const mstring = "supercalifragilisticexpialidocious";

let object1 = {
    originalString: " ",
    modifiedString: " ",
    numberReplaced: 0,
    length: 0
};

let result = callback(mstring, spliter => mstring.split(/(?=c)/g));

console.log(result);

let result2 = callback(mstring, strinfo => {

    object1.originalString = mstring;
    object1.modifiedString = mstring.replace(/a/g, "A");
    object1.numberReplaced = mstring.match(/a/g).length;
    object1.length = object1.modifiedString.length;
    return object1;

});

console.log(result2);