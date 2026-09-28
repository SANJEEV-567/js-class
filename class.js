let x =25;
let y =5;
console.log(x/y)

let workhours=35;
let workers=7;
console.log("Workhours to each Worker:",workhours/workers)

let totaldata=2000;
let familymembers=5;
console.log("The Total Data used per Member:",totaldata/=familymembers)

let index = 5;
let totalSongs = 17;
totalSongs%=index; 
console.log("the Index given to 17 Song:",totalSongs);

// let prompt = require("prompt-sync")();
// let age = prompt("Enter Your Age:");
// console.log("My age is:",age);

// Loose Equality  compares values and doesn't compares datatype whereas Srtict Equality or Inequality Compares Both.
console.log(7==70)//false
console.log(7=="7")//true
console.log(7=="07")//true
console.log(0==false)//true
console.log(null=="")//false

// let savedLanguagecode = "javascript";
// let browserLanguagecode = "python";
// let isDifferent= (savedLanguagecode!=browserLanguagecode);
// console.log("Your Language code is-",isDifferent)

// let storedId = 1234;
// let productId = "1234";
// let isMatch = storedId == productId;
// console.log("Your Id is",isMatch)

// let selectPaymentMethod = "Upi";
// let savedPaymentMethod = "Upi" ;
// let isSame = selectPaymentMethod == savedPaymentMethod;
// console.log("your selected payment method is",isSame)

// let registerDeviceType="Windows";
// let currentDeviceType="Mobile";
// isDifferent = registerDeviceType!==currentDeviceType;

let roomTemp=27;
let thresholdTemp=23;
let isComfort= roomTemp>thresholdTemp;
console.log("Turning ON Ac Required?:",isComfort)

let expectedTime=11;
let actualTime=10;
let isOnTime= expectedTime>actualTime;
console.log("Is Item Delivered on Time?:",isOnTime)

let workingHours= 10;
let thresholdHours= 8;
let requiredDailyHours= workingHours>=thresholdHours;
console.log('Is Empolyee Meets Required Daily Hours?:',requiredDailyHours)

let isEmailVerified=true;
let isPhoneVerified=true;
let isVerified= isPhoneVerified && isEmailVerified;
console.log(isVerified)

let isNewUser=true;
let hasNotPurchased=false;
let isApplicable= isNewUser || hasNotPurchased;
console.log(isApplicable)

let isLoggedin=true;
let showSignin=!isLoggedin;
console.log(showSignin)

let score=99;
let newScore=score--;
console.log(newScore,score)


