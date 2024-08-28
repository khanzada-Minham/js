// let strString = `Minham-khanzada`
// console.log(`My name is ${strString}`);

// let Obj = {
//     name: "khanzada",
//     age: 20
// }
// console.log(`My name is ${Obj.name}`);

// let firstName = "Minham ";
// let lastName = "khanzada";
// let fullname = [... firstName, ...lastName]
// console.log(fullname);
// console.log(fullName.padStart(50));
// console.log(fullName.slice(4 , 10));

// let changeArray = fullName.split();
// changeArray.name = 'Minham';
// console.log(typeof changeArray);
// console.log(changeArray.name);


// let fName = 'Minjam';
// console.log(fName.replace('j','h'));

// let str = 'Minham';
// console.log(str.charAt(3));


// let str = 'MinhamKhanzada';
// console.log(str.length);
// let lenght = 
// let newStr = '@' + str + str.length
// console.log(newStr);
// console.log(`@${str}${str.length}`);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr.indexOf);

// console.log(marks);

// let heros = ['Ironman', 'hulk', 'spiderman', 'Minham', 'Thor'];
// console.log(heros[0]);
// console.log(heros[1]);
// console.log(heros[2]);
// console.log(heros[3]);
// console.log(heros[4]);
// console.log(heros);

// heros[2] = 'Minham';
// console.log(heros);
// for(let i = 0; i < heros.length ; i++){
//     console.log(heros[i]);
// }

// heros.forEach((x)=>{
//     console.log('Heros-Name',x);
// })

// for(let hero of heros){
//     console.log('hero',hero);
// }

// for(let hero in heros){
//     console.log(hero[hero]);
// }


// let marks = [44, 66, 77, 99, 29, 55];


// for (let i = 0; i < marks.length; i++) {
// console.log(marks[i] + marks[i] * marks.length);
// }


// let num1 = [10];
// let sum = 10
// for (let abc of num1) {
//     console.log(abc += sum);
// }





// let marks = [44, 66, 77, 99, 29, 55];
// let sum = 0;

// for (let i = 0; i < marks.length; i++) {
//     sum += marks[i]
// }
// console.log(sum * marks.length);


// let price = [250, 645, 300, 900, 50];
// let sum = 0;

// for (const Plus of price) {
//     sum += Plus
// }
// console.log(sum );


// let marks = [44, 66, 77, 99, 29, 55];
// let sum = 0;
// for (let i = 0; i < marks.length; i++) {
//     console.log(marks[i] ,`+`);
//     sum += marks[i]
// }
// console.log(sum);


// let arr = ['Minham','Aliyan','Mohir','Sanan','Atshal'];
// for(let Name of arr){
// }

// let marks = [33, 66, 43, 66, 78, 90, 84, 97];
//     console.log(`Minham is Total CGPA ${marks[7]}%`);

// let marks = [33,44,99,100];
// marks[2] = 80;
// console.log(marks);

// let arr = ['Minham','Aliyan','Mohir','Sanan','Atshal'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); 
// }
// for(let pro of arr){
//     console.log(pro);

// }

// for (const key in arr) {
//    console.log(key.);

// }

// let marks = [33, 66, 43, 66, 78, 90, 84, 97];
// let sum = 0;

// for (let i = 0; i < marks.length; i++) {
//     sum = sum + marks[i]
// }
// console.log(sum / marks.length);


// let item = [250, 640, 300, 900, 500]
// let discount = 50;

// for (let i = 0; i < item.length; i++) { 
//     let val = item[i] / 10;
//     item[i] -= val
// }
// console.log(item);
// let item = [250, 640, 300, 900, 500];
// let i = 0;

// for (let value of item) {
//     let offer = value / 10;
//     item[i] = item[i] - offer
//     i++;
// }

// console.log(item);



// let item = [250, 640, 300, 900, 500];
// let item1 = [550, 440, 300, 200, 100];
// let deleteValue =  item.pop()
// console.log(deleteValue);
// item.push(852,789,604,99);
// item.shift()
// item.unshift(33356)
// console.log(item.indexOf(640))
// console.log(item.lastIndexOf(640))

// console.log(item.toString);
// let newArray = [...item,...item1];
// console.log(newArray);


// let newArray = item.slice(0,2)
// console.log(newArray);
// let newArray = item.splice(0, 3,101,102,103)
// console.log(newArray);
// console.log(item);



// let compaines = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netfilx'];
// // compaines.splice(2, 1, "Ola");
// compaines.push('Amazon');
// console.log(compaines);

// addTwoNumber = (x, y) => {
//     return x + y
// }

// console.log(addTwoNumber(44, 58));


// function addVowels(str){
//     let count = 0;
//     for (const vowels of str) {
//         if(vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u"){
//             count++;
//         }
//     }
//     return count;

// }

// let abc = addVowels("MinhamKhanzada");
// console.log(abc);


// let arrow = (str) =>{
//     let count = 0;
//     for (const vowels of str) {
//         if( vowels === 'a' || vowels === 'e' || vowels === 'i' || vowels === 'o' || vowels === 'u'){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(arrow('Why We Use Service In Angular | Why Do We Need Services In Angular | Service Angular Hindi/Urdu'));


// let cityName = ['Karach','Lahor','Islamabad','Multan','Queita'];
// cityName.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

// let Numbr = [2, 4, 5, 6];
// Numbr.forEach((item)=>{
//     console.log(item * item);     
// })

// let arr = [1, 2, 3, 4, 5, 6,];
// arr.forEach((x,index) => {
//     console.log(x,index);
// })

// let arr = [1, 2, 3, 4, 5, 6,];
// let newArray = arr.map((item)=>{
//     return item * 20;
// })
// console.log(newArray);

// let arr = [1, 2, 3, 4, 5, 6,];
// let itemArray = arr.filter((item)=>{
//     return item > 2
// })
// console.log(itemArray);

// let arr = [1, 12, 93, 47, 555, 600,];
// let nweReduces = arr.reduce((privious,current)=>{
//     return privious > current ? privious : current
// })
// console.log(nweReduces);



// let arr = [1, 2, 3, 4, 56, 7, 8, 99, 80];
// let newArr = arr.map((item) => {
//     return item * 2;
// })
// console.log('newArr',newArr);
// console.log('arr',arr);


// let filterArr = [44, 55, 66, 456, 852, 741, 8, 205, 951, 102];
// let newFilter = filterArr.filter((item) => {
//     return item > 100
// })

// console.log(newFilter);

// let reduce = [1, 2, 3, 4];
// let newReduce = reduce.reduce((item,value)=>{
//     return item + value
// })
// console.log(newReduce);


// let studentMarks = [84, 67, 61, 89, 91, 92, 98, 69, 50, 40];
// let result = studentMarks.filter((item)=>{
//     return item > 90;
// })
// console.log(result);

// let user = 5;
// let storData = [];

// for (let i = 1; i <= user; i++) {
//     storData[i - 1] = i

// }
// let calculation = storData.reduce((item, value) => {
//     return item * value;
// })
// console.log('calculation',calculation);


// let a = [];
// let b = []
// console.log(a==b);
// console.log(a===b);


// let arr = 50;
// let newArr = [];
// for (let i = 1; i <= arr; i++) {
//     newArr[i - 1] = i;  
// }
// console.log(newArr);


// let x = [1, 2, 3, 4]
// let y = [...x, 5, 6]
// console.log(y);


// const addNumber = (a,b,c,...other) =>{
//     console.log(a,b,c,other);

// }

// addNumber(1,2,3,4,5,6,7)


// let number = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 == 0) {
//         console.log(number[i]);
//     }   
// }


// for (let i = 1; i < 11; i++) {   
//     console.log(`2 x ${i} = ${i * 2}`);

// }



// function  lengthConverter(kilometers){
//     console.log(`${kilometers}: kilometers to convert of miles: ${kilometers * 0.62137}`);
// }
// lengthConverter(200);



// let array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i] + array[i]);
// }


// let array = [1, 2, 3, 4, 5];
// function reverses(){
//     for (let i = array.length; i > 0 ; i--) {
//         console.log(i);
// }
// }
// reverses()



// let anotherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let newArray = [1, 2, 9,11, 3, 4, 6, 10, 12, 5, 8, 7];
// for (let i = 0; i < newArray.length; i++) {
//    for (let j = 0; j < anotherArray.length; j++) {   
//     if (newArray[i] == anotherArray[j]) {
//         // console.log(newArray[i]);
//         console.log([i][j]);

//        } 
//    }
// }



// class User {

//     constructor(name,email,password) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     UserName(){
//         return `${this.name.toUpperCase()}`
//     }
//     userEmail(){
//         return this.email
//     }
//     encryptPassword(){
//         return `#$@!%&${this.password}@%!%18#3!3$WNos8d0@)`
//     }
// }

// const Student = new User('Minham','Minham@gmail.com','Minham')

// console.log(Student.UserName());
// console.log(Student.userEmail());
// console.log(Student.encryptPassword());





// let a = 'b' + 'a' +  +'a'  + 'a' ;
// console.log(a);


// function sum(a, b) {
//     console.log(`${a} + ${b} = ${a + b}`);
// }

// function calculater(a, b, sum) {
//     sum(a, b)

// }
// calculater(5, 6, sum);

// let Hello  = () =>{
//     console.log('Hello')
// }
// setTimeout(Hello,3000)


// let age  = 19;
// if(age >= 18){
//     if(age > 50){
//         console.log('You are old')
//     }
//     else{
//         console.log('You are young')
//     }
// }
// else{
//     console.log('hello')
// }


// for (let i = 0; i < 5; i++) {
//     let str = ''
//     for (let j = 0; j < 5; j++) {
//         str = str + j
//     }
//     console.log(i,str); 
// }

// Callbacks Hell;


// function getData(dataID) {
//      return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('DataID',dataID);
//             resolve(200)
//         },3000)
//      })
// }
// 
// (async()=>{
//     await getData(102);
//     await getData(103);
//     await getData(104);
//     console.log('end');
// })()

// getData(102, () => {
//     getData(103, () => {
//         getData(104, () => {
//             getData(105,()=>{
//                 console.log('end')
//             })
//         })
//     })
// })


// Promise


// let promise = new Promise((resolve,reject)=>{
//   console.log('promices');
//   resolve('data')
// })
// console.log('promise',promise);


// function getData(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Faching Data 1');
//             resolve('success');
//         },5000)

//     })
// }
// let promise = getData();
// promise.then((result) => {
//     console.log('Promices is fullfilled',result);

// })
// promise.catch((error)=>{
//     console.log('error')
// })



// function getData(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Data ');
//             resolve('success');
//         },4000)
//     })
// }
// function getData1(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Data ');
//             resolve('success');
//         },4000)
//     })
// }

// console.log('Faching Data...');
//  getData().then((result)=>{
//     console.log('Faching Data1 ....');
// }).then((result)=>{
// getData1().then((result)=>{})
// })


// Async Await ;

// function Api (){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('Wather');
//             resolve(200);
//         },2000)
//     })
// }

// async function apiWating(){
//     await Api()
//     await Api()
// }



// let arr = ['apple',34,6,{name:'Minham',age:24},['hello']];
// console.log(arr[3].name);


// const arr = ['a', 'b', 'c', 'b', 'd', 'e'];
// console.log(arr.at(-2));


// let a = [1, 2, 3, 4, 5];
// console.warn(...a);

// let arr = ['minham','hussain','khanzada'];
// let [,x] = arr;
// console.log(x);


// let data = {name:'minham',age:25};
// let {age} = data;
// console.log(age);


// let arr = [2, 6, 4, 5, 3, 1];
// let str = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//         if(i>j){

//         }
//     }
//     console.log(str);
// }


// let arr = '        Minhamkhanzada';

// console.log(array);

const Start = document.querySelector('#Start');
const Stop = document.querySelector('#Storp');
let IntervalID;


function rendomColler() {
    let hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

function CollerGernater() {
    Start.addEventListener('click', () => {
        if (!IntervalID) {
            IntervalID = setInterval(() => {
                document.body.style.backgroundColor = rendomColler()
            }, 1000);
        }

    })
    Stop.addEventListener('click', () => {
        clearInterval(IntervalID);
        IntervalID = null

    })
}

CollerGernater();
