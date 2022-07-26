let studentNames = ["jason","john","bobby"]

let teachers = [
    {
        name: "damian",
        subjects: "arrays,javascript,mongodb"
    },
    {
        name: "jonathan",
        subjects: "arrays,javascript"
    }
]

// sort()
// const sortedStudentNames = studentNames.sort();
// console.log(sortedStudentNames)

// filter()
const filteredStudentNames = studentNames.filter(
    // function (student) {
    //     return student === "bobby" 
    // }
    // (student) => {
    //     return student === "bobby"
    // }
    // (student) => student === "bobby"
    (student) => true // don't do this
)
// console.log(filteredStudentNames)


// studentNames = studentNames.filter((student)=> true)

// const bobby = studentNames.find((student) => student === "bobby")
// console.log(bobby)

// const someBobby = studentNames.some((student)=> student === "bobby")
// console.log("Do we have at least a bobby?",someBobby)

// const everyBobby = studentNames.every((student)=> student === "bobby")
// console.log("Everyone's a bobby?",everyBobby)

// studentNames.forEach((student) => {
//     console.log(student)
// })

// const giveMeTheName = (ddd) => {
//     return ddd.name
// }

// const justTheNames = teachers.map((ddd) => {
//     return ddd.name
// })
// console.log(justTheNames)

let numbers = [10,20,32,4,5,6,7,8,9,0,4,4,56,6,-1,-2]

let totals = numbers.reduce((total,val,index,array) => {
    return total + val;
},0)

let total = 0
for (let i = 0; i < numbers.length;i++) {
    total += numbers[i]
}

total = numbers.reduce((accumulator,thisNum) => accumulator+thisNum,0)

total = numbers.reduce((accumulator,thisNum,index,array) =>{ 

    if (index < 5)
    {
        return accumulator + thisNum
    } else {
        return accumulator
    }
    
},0)
console.log(total)

