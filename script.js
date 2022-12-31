function adder(num) {
    let add = 0
    return function sum(num) {
        return add += num
    }
}

const closer = adder();

console.log(closer(5));
console.log(closer(5));
console.log(closer(5));
console.log(closer(5));
console.log(closer(5));