//////////////////////////////////////////////////
// author: Dane Hansen //////////////////////////
// www.danehansen.com //////////////////////////
// version: 1.0.0 /////////////////////////////
//////////////////////////////////////////////

(function(){
	"use strict";

	function Rectangle(x, y, width, height)
	{
		this.x = x || 0;
		this.y = y || 0;
		this.width = width || 0;
		this.height = height || 0;
	}

	Rectangle.prototype.containsPoint = function(point)
	{
		return point.x >= this.x && point.x <= this.x + this.width && point.y >= this.y && point.y <= this.y + this.height;
	}

	Rectangle.prototype.corners = function()
	{
		if(this instanceof Rectangle)
			return [this.topLeft(), this.topRight(), this.bottomRight(), this.bottomLeft()];
		else
			return [Rectangle.prototype.topLeft.call(this), Rectangle.prototype.topRight.call(this), Rectangle.prototype.bottomRight.call(this), Rectangle.prototype.bottomLeft.call(this)];
	}

	Rectangle.prototype.topLeft = function()
	{
		return {x: this.x, y: this.y};
	}

	Rectangle.prototype.topRight = function()
	{
		return {x: this.x + this.width, y: this.y};
	}

	Rectangle.prototype.bottomRight = function()
	{
		return {x: this.x + this.width, y: this.y + this.height};
	}

	Rectangle.prototype.bottomLeft = function()
	{
		return {x: this.x, y: this.y + this.height};
	}

	if(typeof module != "undefined")
		module.exports = Rectangle;
	else if(typeof window != "undefined")
		window.Rectangle = Rectangle;
})();
