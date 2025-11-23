interface User {
    name: string;
    age: number;
    email?: string ;
}

const jsonData = '{ "name" : "Alice", "age": 30}';

const user = JSON.parse(jsonData) as User;

console.log(`Name ${user.name}, Age: ${user.age}, Email: ${user.email ?? 'test@gmail.com'}`);

