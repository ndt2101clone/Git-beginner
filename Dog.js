function Dog(){
	this.stomache=[];
}
Dog.prototype.eat = function (cat) {
	this.stomache.push(cat);
}
module.exports = Dog;