// let arrSV = [
//   {
//     ma: 1,
//     ten: "Khai",
//   },
// ];

// function * themSV (sv){
//     yield [...arrSV,sv];

//     yield "Them sinh vien thanh cong";

//     return "Da chay xong"
// };

// function main (){
//     let sinhVien = {
//         ma: 1,
//         ten: "Thanh",
//       };

//     const iterator = themSV(sinhVien);

//     console.log("iterator",iterator.next())
//     console.log("iterator",iterator.next())

//     console.log("iterator",iterator.next())

// }

// main()

//saga fork






//callback function

let button = document.getElementById("btn");
let input = document.getElementById("input");




const printInput= (event)=>{
    console.log(event.target.value);
}

const printName= (event)=>{
    console.log(event.target);
}

input.addEventListener("change", printInput);
button.addEventListener("click", printName);
