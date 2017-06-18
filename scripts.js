function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color = color;
};
function basicData(diagonalScreen, weight, ramMemory) {
  this.diagonalScreen = diagonalScreen;
  this.weight = weight;
  this.ramMemmory = ramMemory;
};

Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + " , color is " + this.color + " and the price is " + this.price + '.');
};
basicData.prototype.printInfo = function () {
  console.log('The diagonal screen of this model is ' +  this.diagonalScreen + ', weight is ' + this.weight + ' and RAM memory is ' + this.ramMemmory + '.');
}


var iPhone6S = new Phone("Apple", 2250, "silver");
iPhone6S.printInfo();
var iPhone6S = new basicData('5,5"', '143,00 g', '2GB');
iPhone6S.printInfo();

var SamsungGalaxyS6 = new Phone("Samsung", 1750, "black");
SamsungGalaxyS6.printInfo();
var SamsungGalaxyS6 = new basicData('5,1"', '138,00 g', '3GB');
SamsungGalaxyS6.printInfo();

var OnePlusOne = new Phone("OnePlus", 2100, "black");
OnePlusOne.printInfo();
var OnePlusOne = new basicData('5,5"', '162,00 g', '3GB');
OnePlusOne.printInfo();

/*  */
