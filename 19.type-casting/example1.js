var _a;
var jsonData = '{ "name" : "Alice", "age": 30}';
var user = JSON.parse(jsonData);
console.log("Name ".concat(user.name, ", Age: ").concat(user.age, ", Email: ").concat((_a = user.email) !== null && _a !== void 0 ? _a : 'test@gmail.com'));
