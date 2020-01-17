//////////////////////////////////////////////////
// author: Dane Hansen //////////////////////////
// www.danehansen.com //////////////////////////
// version: 1.0.0 /////////////////////////////
//////////////////////////////////////////////

(function(){
	"use strict";

	function Triangle(a, b, c)
	{
		this.a = a || {x: 0, y: 0};
		this.b = b || {x: 0, y: 0};
		this.c = c || {x: 0, y: 0};
		this.corners = [a, b, c];
	}

	Triangle.containsPoint = function(a, b, c, p)
	{
		var aXDiff = p.x - a.x;
		var aYDiff = p.y - a.y;
		var d = (b.x - a.x) * aYDiff - (b.y - a.y) * aXDiff > 0;
		if((c.x - a.x) * aYDiff - (c.y - a.y) * aXDiff > 0 === d)
			return false;
		if((c.x - b.x) * (p.y - b.y) - (c.y - b.y) * (p.x - b.x) > 0 !== d)
			return false;
		return true;
	}

	Triangle.prototype.containsPoint = function(point)
	{
		return Triangle.containsPoint(this.a, this.b, this.c, point);
	}

	Triangle.area = function(a, b, c)
	{
		var sideA = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
		var sideB = Math.sqrt(Math.pow(b.x - c.x, 2) + Math.pow(b.y - c.y, 2));
		var sideC = Math.sqrt(Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2));
		var s = (sideA + sideB + sideC) / 2;
		return Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
	}

		Triangle.prototype.area = function()
		{
			return Triangle.area(this.a, this.b, this.c);
		}

	Triangle.top = function(a, b, c)
	{
		return Math.min(a.y, b.y, c.y);
	}

		Triangle.prototype.top = function()
		{
			return Triangle.top(this.a, this.b, this.c);
		}

	Triangle.bottom = function(a, b, c)
	{
		return Math.max(a.y, b.y, c.y);
	}

		Triangle.prototype.bottom = function()
		{
			return Triangle.bottom(this.a, this.b, this.c);
		}

	Triangle.left = function(a, b, c)
	{
		return Math.min(a.x, b.x, c.x);
	}

		Triangle.prototype.left = function()
		{
			return Triangle.left(this.a, this.b, this.c);
		}

	Triangle.right = function(a, b, c)
	{
		return Math.max(a.x, b.x, c.x);
	}

		Triangle.prototype.right = function()
		{
			return Triangle.right(this.a, this.b, this.c);
		}

	Triangle.width = function(a, b, c)
	{
		return Triangle.right(a, b, c) - Triangle.left(a, b, c);
	}

		Triangle.prototype.width = function()
		{
			return Triangle.width(this.a, this.b, this.c);
		}

	Triangle.height = function(a, b, c)
	{
		return Triangle.bottom(a, b, c) - Triangle.top(a, b, c);
	}

		Triangle.prototype.height = function()
		{
			return Triangle.height(this.a, this.b, this.c);
		}

	if(typeof module != "undefined")
		module.exports = Triangle;
	else if(typeof window != "undefined")
		window.Triangle = Triangle;
})();
