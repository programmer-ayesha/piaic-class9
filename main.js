// function hello(name:string){
//     console.log("hello world")
// }
// // function fun(name:string){
// //     console.log(name)
// }
// // // let a ="hello world"
// function world(x:string,callback:any){
//     hello("hello ayesha")
// //     // let a ="hello sarmad"
// //     callback(x)
// }
// world("hello sarmad",fun)
// // world(a)
function fun(name) {
    console.log(name);
}
function hello(text, callback) {
    callback("hello sarmad");
    callback(text);
}
hello("hello sarmad", fun);
// function printsecond(){}
// console.log("first",)
// function printsecond(){
//     console.log("second")
// }
// setTimeout(printsecond,2000)
// console.log("third")
// console.log("first")
// setTimeout(() =>console.log("second"),0)
// // setTimeout(()=>{
// // },1000)
// //java sript pori filr ke andar synchrnoue fun hain
// //java sript sab se phele synchronous fun perform krta hai
// for(let i = 0; i < 100000000;i++){
//     let b = 0
// }
// console.log("third")
// setTimeout(() => {
//     console.log("user profile")
//     setTimeout(() =>{
//         console.log(("user post"))
//         setTimeout(() =>{
//             console.log("user comment")
//         },1000)
//     },2000)
// }, 3000,);
// let mypromise = new Promise((resolve,reeject) =>{
//     console.log("promise pending ....")
//     setTimeout(() =>{
//         // console.log("promise resolve")
//         // resolve(["sarmad","yash"])
//         reeject("data fetch error")
//         console.log("promise rejected")
//     },2000)
// })
// // mypromise.then((res) =>(console.log(res)))
// mypromise.then((res) => (console.log(res))).catch((err) =>(console.log(err)))
// let mypromise = new Promise((resolve,reeject) =>{
//     console.log("promise pending ....")
//     setTimeout(() =>{
//     //    let data=["sarmad","yash"]
//        let data=""
//        if(data){
//         console.log("resolve promise")
//         resolve(data)
//        }else{
//         console.log("promise rejected")
//         reeject ("data fetch error")
//         console.log("hello reject")
//        }
//     },2000)
// })
// mypromise.then((res) => (console.log(res))).catch((err) =>(console.log(err)))
// //jsonplceholder
// //promise
// let data = fetch("")
// .then((res) => res.json())
// .then((res) => console.log(res))
// // .catch((err) =>console.log(err))
// .catch((err) =>console.log(err))
// console.log(data)
// async function datafetch(){
//     let fetchdata = await fetch()
//     console.log(fetchdata)
//     let data =await  fetchdata.json()
//     console.log(data)
// }
// datafetch()
