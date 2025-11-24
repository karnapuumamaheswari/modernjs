// 1. Template Literals + Expressions
console.log(`5 + 7 = ${5 + 7}`);

const multiLine = `Line 1
Line 2
Line 3`;
console.log(multiLine);

const firstName = "John";
const lastName = "Doe";
console.log(`${firstName} ${lastName}`);


// 2. Arrow Functions & this
const square = n => n * n;
console.log(square(5));

const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test(); 

const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test();


// 3. Rest, Spread & Copying Objects
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(3, 7, 2));


// 4. Destructuring & Optional Chaining
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

const info = {};
console.log(info?.user?.name);



// 5. Scoping 
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

for (let j = 0; j < 3; j++) {}


// 6. Ternary Operator – Practice
const speed = kmph > 60 ? "Fast" : "Normal";

const type = age >= 18 ? "Adult" : "Minor";

const numberCheck =
  num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";


// 7. Spread, Rest & Arrays
const nums = [1, 2, 3];
const added = [...nums, 4, 5];
console.log(added);

const arrA = ["x", "y"];
const arrB = ["z"];
const combined = [...arrA, ...arrB];
console.log(combined);

const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));


// 8. Object Destructuring & Shorthand
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);

const id2 = 101;
const role = "admin";
const user2 = { id2, role };
console.log(user2);

const name = "Uma";
const age = 20;
const person = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};
person.greet();


// 9. Template Literals
console.log(`Today is: ${new Date().toDateString()}`);

const NAME = "Alex";
const SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// 10. Arrow Function Shorthands
const add = (a, b) => a + b;

const isAdult = age => age >= 18;

const double = n => n * 2;


// 11. Spread Operator 
const arrOriginal = [1, 2, 3];
const arrClone = [...arrOriginal];
console.log(arrClone);

const arrExtended = [100, ...arrOriginal];
console.log(arrExtended);

const userA = { name: "Sam", age: 20 };
const userB = { age: 25 };
const mergedUser = { ...userA, ...userB };
console.log(mergedUser);


// 12. Optional Chaining
const userObj = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(userObj?.address?.city);

console.log(userObj?.job?.title);

const data = {};
console.log(data?.missing?.value);
