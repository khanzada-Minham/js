// const PromicesOne = new Promise(function(resolvs,reject){
//     setTimeout (function(){
//         console.log('Async Task Completed');
//         resolvs()
//         reject()
//     },1000)

// })
// PromicesOne.then(()=>{
//     console.log('Promice Completed')
// })
// PromicesOne.catch((error)=>{
//     console.log(error,'Error Occured')
// })


// let PromicesTwo = new Promise((resolvs, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolvs({ name: 'Minham', age: 25 })
//         }
//         else {
//             reject('Error: Something Went Worng')
//         }
//     }, 1000)
// })

// PromicesTwo.then((user) => {
//     return user  
// }).then((user) => {
//     console.log('user',user.name);
// }).catch((error) => {
//     console.log(error);
// }).finally(()=>{
//     console.log('Finally Block')
// })


// let PromicesThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ name: 'Jacascript', password: '$Ab2#25' })
//         }
//         else {
//             reject('Error: Something Went Worng')
//         }
//     })
// })

// async function ConsumerPromicesFive() {
//    try {
//     const responces = await PromicesThree;
//     console.log('responces',responces);
//    } catch (error) {
//     console.log(error);
    
//    }
    
// }
// ConsumerPromicesFive()


// const PromicesFore = new Promise((resolve, reject)=>{

// })

// async function getAllUser() {
//     try {
//         let responce = await fetch('https://jsonplaceholder.typicode.com/users');
//         let responcesData = await responce.json()
//         responcesData.forEach(element => {
//         console.log(element.email);
            
//         });
        
//     } catch (error) {
//         console.log('error',error);
        
//     }
// } 
// getAllUser()


// function User(username,logincount,Islogin){
//     this.username = username;
//     this.logincount = logincount;
//     this.Islogin = Islogin;
//     return this;
// }

// const userOne = new User('Minham',12,true);
// const userTwo = new User('khanzada',11,false);
// console.log(userOne);
// console.log(userTwo);




