let num: number = 123_456_789;
let names: string = "Riaaz";
let isTrue: boolean = true;

//any

let newArr: any[] = [];

function render(doc: any) {
  console.log(doc);
}

// array

let numbers: number[] = [1, 2, 3];

let arr: number[] = [];

// numbers.forEach((n)=>n.)

//tuples
//only use like key value pairs .push() problem
let persons: [number, string] = [199, "hello"];

//enum
//use PascalCase
const enum Size {
  Small = 1,
  Medium = 2,
  Large,
}
console.log(Size.Large); // automatically give the value 3 to Size.Large

//function return

function sample(number: number, price = 2022): number {
  //default parameter
  // let x; undeclared this get x
  if (price > 5000) {
    return number * 10;
  } else {
    return number;
  }
}

sample(19_990);

//type Alias

type Employee = {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
};

//objects

let employee: Employee = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  },
};
employee.name = "mosh";

//union types
function kiloGran(weight: number | string): number {
  if (typeof weight === "number") return weight * 2;
  else return parseInt(weight) * 4;
}
kiloGran(10);
kiloGran("100");

//intersection types

type Draggable = {
  //not specified name Draggable
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//type Alias
type setQuantity = 50 | 100;
type Metre = "cm" | "inch";
//literal types

let quantity: setQuantity = 50;
let metre: Metre = "cm";

//Nullable Types

function greet(name: string | null) {
  if (name) console.log(name.toUpperCase())
  else console.log('!who');

}
greet(null);

//optional chaining

type Customer = {
    birthday?:Date
}
function getCustomer(id:number):Customer | null | undefined{
  return id === 0 ?null : {birthday: new Date()}
}

let customer = getCustomer(10)
console.log(customer?.birthday?.getFullYear())

//log call 
let log: any = null;
log?.('a')