function flatten(arr = []) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result = result.concat(item);
        }
    }

    return result;
}

console.log(flatten([1, 3, [4],
    [5]
]));
console.log(flatten([1, 3, [4],
    [5]
]));