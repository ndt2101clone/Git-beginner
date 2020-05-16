function Mouse(kind){
	this.kind=kind;
	this.dead=false;
}
Mouse.prototype.die = function () {
	this.dead=true;
}
module.exports=Mouse;