//Addition 
//1
let class1Collection = 15000;
let class2Collection = 12500;
let totalCollection = class1Collection + class2Collection;

console.log("Total collection: " + totalCollection);

//2
let morningPages = 18;
let eveningPages = 25;
let totalPages = morningPages + eveningPages;

console.log("Total pages read: " + totalPages);

//3
let mondayItems = 125;
let tuesdayItems = 178;
let totalItems = mondayItems + tuesdayItems;

console.log("Total items sold: " + totalItems);

//Substraction
//1
let totalSeats = 80;
let occupiedSeats = 53;
let emptySeats = totalSeats - occupiedSeats;

console.log("Number of empty seats: " + emptySeats);

//2
let initialMarks = 500;
let lostMarks = 35;
let finalMarks = initialMarks - lostMarks;

console.log("Final marks: " + finalMarks);

//3
let totalBoxes = 2500;
let sentBoxes = 875;
let remainingBoxes = totalBoxes - sentBoxes;

console.log("Remaining boxes: " + remainingBoxes);

//Multiplication
//1
let notebookPrice = 45;
let notebookQuantity = 8;
let totalNotebookCost = notebookPrice * notebookQuantity;

console.log("Cost of 8 notebooks: ₹" + totalNotebookCost);

//2
let bottlesPerHour = 120;
let productionHours = 6;
let totalBottlesProduced = bottlesPerHour * productionHours;

console.log("Total bottles produced in 6 hours: " + totalBottlesProduced);

//3
let rows = 7;
let plantsPerRow = 15;
let totalPlants = rows * plantsPerRow;

console.log("Total number of plants: " + totalPlants);

//Division
//1
let totalPencils = 144;
let totalStudents = 12;
let pencilsPerStudent = totalPencils / totalStudents;

console.log("Pencils received per student: " + pencilsPerStudent);

//2
let totalDistanceKm = 360;
let totalTravelHours = 6;
let averageSpeed = totalDistanceKm / totalTravelHours;

console.log("Average distance travelled per hour: " + averageSpeed + " km/h");

//3
let totalFund = 72000;
let totalDepartments = 9;
let amountPerDepartment = totalFund / totalDepartments;

console.log("Amount received by each department: ₹" + amountPerDepartment);

//Modulus
//1
let classStudents = 53;
let groupSize = 5;
let studentsLeftOver = classStudents % groupSize;

console.log("\n--- 5. MODULUS ---");
console.log("Students left over: " + studentsLeftOver);

//2
let totalCandies = 128;
let candiesPerBox = 10;
let unpackedCandies = totalCandies % candiesPerBox;

console.log("Candies left unpacked: " + unpackedCandies);

//3
let checkNumber = 17;
if (checkNumber % 2 === 0) {
    console.log(checkNumber + " is an Even number.");
} else {
    console.log(checkNumber + " is an Odd number.");
}

//Exponentiation
//1
let sideLength = 6;
let cubeVolume = sideLength ** 3;

console.log("Volume of the cube: " + cubeVolume + " cm³");

//2
let initialBacteria = 1;
let doublingHours = 4;
let bacteriaCount = initialBacteria * (2 ** doublingHours);

console.log("Number of bacteria after 4 hours: " + bacteriaCount);

//3
let cellsPerSide = 9;
let totalCells = cellsPerSide ** 2;

console.log("Total number of cells in the square arrangement: " + totalCells); 

//Part-B

//Simple Assignment =
//1
let age = 20;
console.log("Age:", age);

//2
let penPrice = 15;
console.log("Pen Price: ₹" + penPrice);

//3
let daysInWeek = 7;
console.log("Days in a week:", daysInWeek);

//4
let city = "Hyderabad";
console.log("City:", city);

//5
let piValue = 3.14159;
console.log("PI Value:", piValue);


//Add and Assign +=
//1
let studentMarks = 200;
studentMarks += 35;
console.log("Updated Marks:", studentMarks);

//2
let accountBalance = 5000;
accountBalance += 1200;
console.log("Updated Balance: ₹" + accountBalance);

//3
let batteryPercentage = 45;
batteryPercentage += 30;
console.log("Updated Battery Percentage: " + batteryPercentage + "%");

//4
let playerScore = 1250;
playerScore += 375;
console.log("Updated Score:", playerScore);

//5
let totalBooks = 840;
totalBooks += 160;
console.log("Updated Total Books:", totalBooks);


//Subtract and Assign -=
//1
let waterTankLitres = 1000;
waterTankLitres -= 375;
console.log("Remaining Water in Tank: " + waterTankLitres + " litres");

//2
let studentMoney = 500;
studentMoney -= 180;
console.log("Remaining Money: ₹" + studentMoney);

//3
let currentBattery = 90;
currentBattery -= 45;
console.log("Remaining Battery: " + currentBattery + "%");

//4
let warehouseBoxes = 2400;
warehouseBoxes -= 950;
console.log("Remaining Boxes:", warehouseBoxes);

//5
let gamePoints = 2000;
gamePoints -= 625;
console.log("Updated Points:", gamePoints);


//Multiply and Assign *=
//1
let townPopulation = 5000;
townPopulation *= 3;
console.log("Updated Population:", townPopulation);

//2
let dailyProduction = 120;
dailyProduction *= 4;
console.log("Updated Daily Production:", dailyProduction);

//3
let savingsAmount = 2000;
savingsAmount *= 2;
console.log("Updated Savings Amount: ₹" + savingsAmount);

//4
let gardenPlants = 50;
gardenPlants *= 5;
console.log("Updated Total Plants:", gardenPlants);

//5
let bonusScore = 150;
bonusScore *= 3;
console.log("Updated Score:", bonusScore);


//Divide and Assign /=
//1
let clothLength = 1200;
clothLength /= 4;
console.log("Length of One Part: " + clothLength + " metres");

//2
let companyBudget = 80000;
companyBudget /= 8;
console.log("Budget per Project: ₹" + companyBudget);

//3
let sugarGrams = 960;
sugarGrams /= 6;
console.log("Sugar in One Packet: " + sugarGrams + " grams");

//4
let tripDistance = 450;
tripDistance /= 5;
console.log("Distance per Trip: " + tripDistance + " km");

//5
let totalExamMarks = 2500;
totalExamMarks /= 10;
console.log("Marks per Student:", totalExamMarks);


//Modulus and Assign %=
//1
let candiesStock = 137;
candiesStock %= 10;
console.log("Candies Left:", candiesStock);

//2
let coachStudents = 250;
coachStudents %= 7;
console.log("Students Left:", coachStudents);

//3
let projectDays = 1000;
projectDays %= 7;
console.log("Days Left After Full Weeks:", projectDays);

//4
let hallChairs = 89;
hallChairs %= 5;
console.log("Chairs Left:", hallChairs);

//5
let loanMonths = 365;
loanMonths %= 12;
console.log("Months Left After Full Years:", loanMonths);


//Exponentiation and Assign **=
//1
let squareSide = 10;
squareSide **= 2;
console.log("Area of Square Garden: " + squareSide + " sq m");

//2
let boxEdge = 4;
boxEdge **= 3;
console.log("Volume of Cube Box: " + boxEdge + "cm cube");

//3
let sizeFactor = 3;
sizeFactor **= 2;
console.log("Total Area Growth Factor:", sizeFactor);