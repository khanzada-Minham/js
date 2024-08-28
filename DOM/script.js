// let a = document.body.firstElementChild;
// a.innerText = a.innerText + 'Hello Javascript';

// let div = document.querySelectorAll('.Box');
// div.forEach(element => {
//     element.innerText = element.innerText + 'Hello Javascript';
// })

// let div = document.querySelector('div')
// console.log(div);

// // let value = div.getAttribute('id')
// // console.log(value);

// let jsdiv = div.getAttribute("name")
// console.log(jsdiv);

// let p = document.querySelector('p');
// // console.log(p.getAttribute('class'));
// p.setAttribute('class','newClass')
// console.log(p);


// let div = document.querySelector('div');
// div.style.backgroundColor = "red";
// div.style.color = 'black'
// div.style.fontSize = '25px'
// // div.style.visibility = 'hidden'
// div.innerText = 'Hello!';

// let btn = document.createElement('button');
// btn.innerText = 'click me'
// console.log(btn);
// div.after(btn)
// btn.addEventListener('click',()=>{
//     div.style.backgroundColor = 'black';
//     div.style.color = 'white'    
// })

// let newHeading = document.createElement('h1');
// newHeading.innerHTML = '<i>Hello, I am a new Student !</i>';

// document.querySelector('body').prepend(newHeading);


// let p = document.querySelector('p');
// p.remove()


// let newBtn = document.createElement('button');
// newBtn.innerHTML =  'Click me!';
// newBtn.style.backgroundColor = 'red';
// newBtn.style.color = 'white'
// newBtn.style.width = '100px'
// newBtn.style.height = '100px'
// // newBtn.style = 'curser-Ponter'
// document.querySelector('body').append(newBtn)

// let p = document.querySelector('p')
// p.classList.add('newClass');

// let btn = document.querySelector('.btn')
// btn.addEventListener('click',(e)=>{
//     console.log('button clicked',e.type)
// })
// let handler = () =>{
//     console.log('handler called')
// }
// btn.addEventListener('click',handler)

// btn.removeEventListener('click',handler)


// let btn = document.querySelector('.btn');
// let chandeMode = "light";
// btn.addEventListener('click',()=>{
//     if(chandeMode === 'light'){
//         document.body.style.backgroundColor = '#CBE2B5'
//         chandeMode = 'dark'
//     }
//     else{
//         chandeMode = 'light'
//         document.body.style.backgroundColor = '#8D493A'
//     }
// })


// let Students = {
//     name: 'John',
//     age: 20,
//     grade: 'A',
//     marks: 97,
//     printMarks(){
//         console.log('Marks',this.marks);
//     }
// }
// Students.printMarks();


// let employee = {
//     calculateTex() {
//         console.log('Tex rate is 10%');
//     }
// }
// let Minham = {
//     Salary: 45000,
//     calculateTex() {
//         console.log('Tex rate is 20%');
//     }
// }
// Minham.__proto__ = employee;


// class toyotaCar{
//     constructor(color,year){
//         this.color = color;
//         this.year = year;
//     }
//     start(){
//         console.log('car started')
//     }
//     stop(){
//         console.log('car stoped')
//     }
//     setName(Brand){
//         this.Brand = Brand
//     }
// }


// let colora = new toyotaCar('red','2004'); 
// colora.setName('Colora')



// class person {
//     eat(){
//         console.log('eating')
//     }
//     sleep(){
//         console.log('sleeping')
//     }
// }

// class Engineer extends person{
//     constructor(branch){
//         super()
//         this.branch = branch;
//     }
//     work(){
//         super.eat()
//         console.log('Solved Problums ,build Something');
//     }
// }

// const Minham = new Engineer('IT Engineer');


// let Data = 'Knowing how to write a paragraph is incredibly important. It’s a basic aspect of writing, and it is something that everyone should know how to do';

// class College{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//      }

//      viewData(){
//         console.log('Data',Data);
//      }
// }

// class Admin extends College{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         console.log("You are a admin and you are the edit data! ❤❤");
        
//     }
// }


// let Student = new College('Minham','Minhamkhanzada@gmail.com');
// let admin = new Admin ('Admin','admin@gmail.com')



