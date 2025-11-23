var concatStrings = function (a, b, c) {
    if (c === void 0) { c = "cat"; }
    return a + b + c;
};
console.log(concatStrings("a", "b", "c"));
console.log(concatStrings("a", "b"));
