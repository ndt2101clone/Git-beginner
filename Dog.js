function Dog(name){
	this.stomache=[];
	this.name = name;
}
Dog.prototype.eat = function (cat) {
	this.stomache.push(cat);
}
Dog.prototype.sayHi = function () {
	console.log("Hello world , I'am dog and my name is "+ chalk.yellow(this.name));
}
module.exports = Dog;