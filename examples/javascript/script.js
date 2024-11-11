// const person = {
//     name: 'alice',
//     age: 30,
//     nameOfaperson: function(){
//         console.log('Hello' + this.age)
//     }
// }
// person.nameOfaperson()
// const classDetails = {
//     number0fBoys: 30,
//     numberOfGirls: 15,
//     totalNumberofGirls: function(){
//         document.getElementById('result').innerHTML = this.number0fBoys + ' ' + this.numberOfGirls
//         // console.log('Hello,' + this.numberOfGirls)
//     }
// }
// classDetails.nameofClassTeacher= 'Mr wole';
// console.log(classDetails.nameofClassTeacher )
// classDetails.totalNumberofGirls() 
// const student = [
//     {name:"demola", age:50},
//     {name:"dominic", age:40},
//     {name:"larry", age:60},
    
// ];
// document.getElementById('result').innerHTML = student[0].name + student[0].age;
// console.log(student[0].name)
// console.log(student[0].age)
const book = {
    Javascript:{
        title: 'Javascript Basics',
        author: 'Mrs Ib',
        year: 2025,
    },
    English:{
        title: 'English Basics',
        author: 'Mrs Dominic',
        year: 2026
    },
    Mathematics:{
        title: 'Math Basics',
        author: 'Mrs Dre',
        year: 2028,
    }

}
// const book = [
//     {
//         title: 'Javascript Basics',
//         author: 'Mrs Ib',
//         year: 2025,
//     },
//     {
//         title: 'English Basics',
//         author: 'Mrs Dominic',
//         year: 2026
//     },
//     {
//         title: 'Math Basics',
//         author: 'Mrs Dre',
//         year: 2028,
//     }
// ]

let output = '';
for (let key in book.Mathematics;key + ':' + book.Mathematics[key] + book.Javascript[key] + book.English[key] + '<br>';
}
document.getElementById('result').innerHTML = output;
