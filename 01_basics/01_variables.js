const aId = 144; //cannot be changed
// aId = 2;

let aEmail = "abc@gmail.com"; //can be changed; we will use this in modern code
// aEmail="sdsvsv";
// console.log(aEmail);

var aPassword = "svnsjbv"; //can be changed, we will not use due to scope {} 
// aPassword = "wsfvs";
// console.log(aPassword);

aCity = "kolkata"; // can be changed
// aCity ="Howrah";
// console.log(aCity);
let aCountry;  //undefined

console.table([aId,aEmail,aPassword,aCity,aCountry]);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

