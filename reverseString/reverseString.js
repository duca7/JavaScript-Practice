function reverseString(s) {

    let result = [];
    for (let i = s.length - 1; i >= 0; i--) {
        result.push(s[i]);
    }
    return result.join('');

}

console.log(reverseString("hello"));
console.log(reverseString("hom nay la cn"));