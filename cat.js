function Cat(){
	this.stomache=[];
}
Cat.prototype.eat = function (mouse) {
	this.stomache.push(mouse);
}
module.exports=Cat;