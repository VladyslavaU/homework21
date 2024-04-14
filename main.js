console.log('Sample JavaScript #3 HW #15');

console.log('task 1')

function increment() {
    let counter = 0;
    return function (num) {
        counter = typeof num === 'undefined' ? counter : num;
        return counter++;
    }
}

const counter = increment();

console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter(500));
console.log(counter());
console.log(counter(0));
console.log(counter());

console.log('task 2')

function count() {
    let counter = 0;

    function increment() {
        counter++;
    }

    function decrement() {
        counter--;
    }

    function value(n) {
        counter = typeof n === 'undefined' ? counter : n;
        return counter;
    }

    return {
        increment,
        decrement,
        value
    }
}

const counting = count();

console.log(counting.value());

counting.increment();
counting.increment();
counting.increment();

console.log(counting.value());

counting.decrement();
counting.decrement();

console.log(counting.value());
console.log(counting.value(100));

counting.decrement();

console.log(counting.value());
console.log(counting.value(200));

counting.increment();

console.log(counting.value());

console.log('task 3');

function myPow(a, b, callback) {
    return callback(a, b, calculatePow(a, b, a));
}

function calculatePow(a, b, res) {
    return b > 1 ? calculatePow(a, b - 1, res * a) : res;
}

function myPrint(a, b, res) {
    return a + '^' + b + '=' + res;
}

console.log(myPow(3, 4, myPrint));
console.log(myPow(2, 3, myPrint));

console.log('task 4-6');

function fullInfo() {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}

let yearNow = new Date().getFullYear();
let car = {
    engine: 2000,
    model: 'Lacetti',
    name: 'Chevrolet',
    year: 2010,
    info: fullInfo,
    get used() {
        return this.year !== yearNow ? 'used' : 'new';
    },
    set used(value) {
        if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
};
let car2 = {
    engine: 5000,
    model: 'FX50 AWD',
    name: 'Infinite',
    year: 2019,
    info: fullInfo,
    get used() {
        return yearNow - this.year ? 'used' : 'new';
    },
    set used(value) {
        if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
};

console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2010, used
car.used = 'new';
console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- год изменен
car.used = 'used';
console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- изменения не выполняются
console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new
car.used = 'used';
console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new -- изменения не выполняются


function myMax(arr) {
    let max = arr[0];
    return Math.max.apply(max, arr);
}

let list = [12, 23, 100, 34, 56, 9, 233];
console.log(myMax(list));

console.log('Task 8')

function myMul(a, b) {
    return a * b;
}

let myDouble = myMul.bind(null, 2);
let myTriple = myMul.bind(null, 3);

console.log(myDouble(3));
console.log(myDouble(4));
console.log(myDouble(5));
console.log(myTriple(3));
console.log(myTriple(4));
console.log(myTriple(5));

console.log('Task 9')

function myUniq(arr) {
    return new Set(arr);
}

 let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
 let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];
 console.log(myUniq(notUniqNums));
 console.log(myUniq(notUniqStrings));