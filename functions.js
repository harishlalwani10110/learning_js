// function plus1(x) {
//     return x + 1;
// }

// console.log(plus1(3))

// let square = function(x) {
//     return x*x;
// }

// console.log(square(plus1(12)))

// const plus1 = x => x+1;
// const square = x => x*x;

// console.log(plus1(3))

// console.log(square(plus1(12)))

let a = [];
a.push(1,2,3);
a.reverse();

console.log(a)


points = [
    {x:0,y:0},
    {x:2,y:2}
]

points.dist = function() {
    let p1 = this[0];
    let p2 = this[1];

    let a = p1.x - p2.x;
    let b = p1.y - p2.y;
    return Math.sqrt(a*a + b*b);
}

console.log(points.dist())

console.log("Sum of array 1")

let sum =0
for(let x of a) {
    sum += x
}
console.log(sum)
