function myFunction(name, time){
    console.log( name + " sleeping from " + time);
}
myFunction("rahat", "11");
myFunction("emon", "10");
myFunction("pagla", "9");




function myFunction(a, b) {
    var result = a*b;
    return result;
}

console.log(myFunction(6,6));

   

function myFunction(a, b) {
  return a * b;       
}

console.log(myFunction(9, 9));

let Spiderman = {
  firstName : "Emon",
  lastName  : "Ahmad",
  age       : 21,

  fullName: function (){
    return this.firstName + " " + this.lastName;
    
  }
}
Spiderman.fullName();
console.log(Spiderman.age);


const avengers = ["ironman","hulk","thor","captain america"];

console.log(avengers.indexOf(3))

const ages = [3, 10, 18, 20];

ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
};
console.log(checkAge(20))