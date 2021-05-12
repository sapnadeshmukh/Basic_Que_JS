// Template Literals
// Multiline string

var str=`hello
my name
is sapna.`
console.log(str);

// String Interpolation
var str="Hello"
console.log(`${str } world`);
console.log(str+"World")


var i;
for(i=1;i<=10;i++){
    console.log(`${i} This is count.`)
}


// spread operator
// with list
let numbers=[1,2,3,4,5]
let emp=[1,8,7,6,5]
console.log([...numbers,...emp])

function sum(a,...b){
    console.log(a,b)
}
sum(5,8,7,9);

// with object
var details={
    name:"Moni",
    age:78,
    class:12,
    height:5,
    address:"banglore"

}
var{age,...detail}=details
console.log(age);
console.log(detail);



// // Rest Operator
let a,b,rest;
[a,b,...rest]=[10,30,67,89,45,66];
console.log(a);
console.log(b);
console.log(rest);


function add(a,b=90){
    console.log(a+b)
}
add(1)
add(1,2)


// type of function
// Expressions and Declaration
// Expression:
// 1.Named function
function add(a,b){
    var c=a+b;
    return c;
}
console.log(add(3,5));

// // 2.Anonymous
(function(){
    console.log("saaaaaaaaaaaaa");
})();

// // 3.Immediately invoked function Expression or self invoked function
var student=function(){
    console.log("HIIIIIIIIIIIIII")
}
student();

var sum= function add(a,b){
    return a+b
}
console.log(sum(4,5))



// // Arrow Function

var hello=function(){
    return "Hello World";
}
console.log(hello())



var hello =(a)=>{
    return "welcome",a
}
console.log(hello("poonam"))

// // Fill
var numbers1=[1,2,3,4,5,6,7,8,9,10]
numbers1.fill(7,2,7)
console.log(numbers1)

// // filter

var num=[2,3,4,5,6,8,23]
var f=num.filter(function(a){
    return a>=5
})
console.log(f)

// // filter with arrow function
var num3=[2,4,5,6,7,8]
var all=num3.filter(number =>number>5)
console.log(all)



// // filter with object
var class1=[
    {name:"soham",
    age:21},
    {name:"abhi",
    age:5},
    {name:"rakhi",
    age:8 }

]
var a=class1.filter(i => i["age"]>5);
console.log(a)

// // forEach
var num=[1,4,7,8,9]
num.forEach(function(b){
    console.log(b)
})

// // forEachwith arrow function
var num=[1,3,4,6,7,89,89]
var c=num.forEach(numbers =>{

    return(numbers)
 } )
console.log(c)

// // map
var num1=[1,3,4,6,7,89,89]
var d=num1.map(numbers =>{
    return(numbers)
 } )
console.log(d)

// // Reduce
var number=[4,5,3,6]
var sum=number.reduce(function(a,num){
    return a+num})
console.log(sum)


// // this keyword
function too(a){
    var a=10;
    console.log(a);
}
too(34);


function too(a){
    this.a=10;
    console.log(a);
}
too(34);

function too(a){
    var a=10;
    console.log(this.a);
}
too(34);


var a=12;
function sum(){
    this.a=90
    console.log(a)
}
sum()

const test = {
    prop: 42,
    func: function() {
      return this.prop;
    },
  };
  
console.log(test.func());



// hoisting

a = "Poonam"
console.log(a) 


let a=3;
function add(){
    a=4;
    console.log(a)
}
add();
console.log(a)




// // splice
var numbers=[4,6,7
    ,8,9,22,45];
numbers.splice(2,0,50,60)
console.log(numbers)


// // slice
var num=[5,6,7,8,3,7,8];
b=num.slice(2,6)
console.log(b)

// var can be redeclared and reupdate
// declare
var s="Hii"
var s="bye"

// update
var s="bye"
s="hii"


// let can be  not redeclared and reupdate
// declare
let gree="colour"

let gree="asdf"

reupdate
let gree="colour"

gree="asdf"

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"

hello = (val) => "Hello " + val; 


hello = () => {
  return "Hello World!";
} 
hello = () => "Hello World!"; 
hello = (val) => "Hello " + val; 
hello = val => "Hello " + val; 
console.log(hello("sapnaDi"));
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
// 
// myCar = new Car("Ford", 2014);
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);



console.log(myCar1.year +" "+ myCar2.year)


// convert string to object
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 

console.log(typeof(text))
var obj = JSON.parse(text);
console.log(typeof(obj))


var x =
"Hello World!"; 
var x = "Hello\
World!"; 
console.log(x)
function myFunction(a) {
  var power = 10 
  return a * power
}




function myFunction(a) {
  var
  power = 10; 
  return a * power;
} 

function myFunction(a) {
  var
  power = 10; 
  return
  a * power;
} 
function myFunction(a) {
  var
  power = 10; 
  return;
  a * power;
} 
console.log(myFunction(5));





