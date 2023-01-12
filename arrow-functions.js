/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
/* function addTwoNumbers(a,b) {
    //Code block
    return a + b;
}

let sum = addTwoNumbers(3,5);
console.log(sum);*/

// Arrow Function With Parameters
/*const addTwoNumbers = (a,b) => {
    //Code block
    return a + b;
}

let sum = addTwoNumbers(3,5);
console.log(sum);*/

/*
// Single Line Arrow Function With Parameters

// const addTwoNumbers = (a,b) => (a + b); //Note: also valid
const addTwoNumbers = (a,b) => a + b;

let sum = addTwoNumbers(6,4);
console.log(sum);

// Implicit Returns where there is only 1 parameter
const saySomething = message => console.log(message);

saySomething('Hello there!!');

// No parameters at all
const sayHello = () => console.log('hello');

sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multiple string!
    <p>`
)

console.log(returnMultipleLines());

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let totalPoints = 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if (subject in arr[i]['results']) {
            totalPoints += arr[i]['results'][subject];
            count++;
        }
    }
    return totalPoints / count;
}

let averageMarks = averagePoints(students, 'english');
console.log(averageMarks);

//Spread stuff //This avoids changing the orginal array we copied from

//Copying an array
let arr1 = [1,2,3];
let arr3 = [4,5,6];
let arr4 = [...arr3];

arr4.push(7);

console.log("Third Array:",arr3); //Note the Third array remains untouched
console.log("Fourth Array:", arr4); 

//Copying an Object
let obj1 = {a: 1, b: 2, c:3};
let obj2 = {...obj1, d:4};
let obj3 = {...obj1, b:5};

console.log("First Object:", obj1); //Note the First Object remains untouched
console.log("Second Object:", obj2); 
console.log("Third Object:", obj3); // Note First object still remians the same but object 3 has a changed value for b.

//Copying only part of an array or object
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);
*/
/*
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];

let subjects = [...students[0].subjects];

const update = (item, val) => [...item, val];

let updatedSubjects = update(subjects, 'Electronics');

console.log(updatedSubjects);

console.log(students[0]); 

// Rest stuff is the opposite of spread

// Regular function call
const sumAll = (a, b,c) => a + b + c;
let sum = sumAll(1,2,3);
console.log("Sum:", sum); 

//Extra arguments are ignored

let sum2 = sumAll(1,2,3,4,5,6);
console.log("Sum2:", sum2); // Notice that the last 3 parameters were ignored

// Function using rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
        for (let i of rest) {
            sum += i;
        }
        return sum;
}

let sum3 = sumRest(1,2,3,4,5,6);
console.log("Sum3:", sum3);  // Now the remaining parameters are squashed in
/*
let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);
const updateSortReverse = (arr, ...letters) => [...arr, ...letters].sort().reverse();
let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
console.log(reverseSort);
console.log(mixedLetters);



//Destructuring Arrays
let ages = [30,26,27];
//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john,mary,joe);

let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (arr, student) => {
    for(let itm of arr) {
        if(itm.name == student) {
          return itm.subjects;
        }
    }
};

let [first, second, ...rest] = makeList(students, 'John');
console.log(first, second, rest);



//map() filter() reduce()
// These work on arrays. Can be any type of array but must be an array
// They can do the same as For loop or while loop but with less code

['Hello','World','!']
[1,2,3,4,5]
[{mike:'Developer', angela:'Designer'}]
[[1,2,3],[4,5,6],[7,8,9]]

//map()

let nums = [1,2,3,4,5];

//For loop
let results1 = [];
for (let num of nums) {
    results1.push(num * 2);
}

console.log("Results 1:",results1)

// map equivelant
// this is ok but not great const results2 = nums.map(function (num) {return num * 2});
const results2 = nums.map(num => num * 2); //simplified by arrow

console.log("Results 2:", results2)

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

// single line, used different variable names so as not to clash with those below.
let [John, ...Rest] = students.map(itm => [itm.name, itm.results]);
console.log(John);
console.log(Rest);

console.log('\n');
// Or create function first and use in map
const mapper = (itm) => [itm.name, itm.results];
let [john, ...rest] = students.map(mapper);
console.log(john);
console.log(rest);
//filter()

let nums = [1,2,3,4,5,6,7,8,9,10];
let evens = nums.filter(n => n % 2 === 0);
console.log(evens);

let names = ['mike', 'jill', 'matt', 'jenny'];
let mNames = names.filter(name => name.charAt(0) === 'm');
console.log(mNames);

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 84, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 67, english: 87, art: 95},
    }
];


const topMaths = students.filter(itm => itm.results.maths >= 90);
console.log(topMaths);

//reduce()
const nums = [0, 1,2,3,4];
let sum = nums.reduce((acc,curr) => acc + curr, 0);
console.log(sum);

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const biggest = students.reduce((acc, cur) => {
    acc = acc.max > cur.results.english ? acc: {name:cur.name, max:cur.results.english};
    return acc;
    }, {name: '', max: 0});
console.log(biggest);

*/

/* Using destructuring 
const biggest = students.reduce(({max, name}, {name:n, results:{english}}) => {
    if(max < english) {
        acc = {name:n, max: english};
    }
    return acc;
    }, {name: '', max: 0});
    
console.log(biggest);
*/
