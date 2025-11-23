var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        User.totalUsers++;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.getTotalUsers = function () {
        return User.totalUsers;
    };
    User.totalUsers = 0;
    return User;
}());
console.log(User.totalUsers, " Users at start");
var user1 = new User('Alice');
var user2 = new User('Bob');
console.log(user1.getName());
console.log(user2.getName());
console.log(User.totalUsers, "Users at end");
var newTotal = User.totalUsers = 20;
console.log('Testing : ', newTotal);
console.log(User.getTotalUsers(), " Total Users ");
