const {Quantity} = require("./quantity");

class Unit{
    constructor(relativeRatio = 1, relativeUnit){
        if (relativeUnit){
            this._ratioToBaseUnit = relativeRatio * relativeUnit._ratioToBaseUnit;
            this._baseUnit = relativeUnit._baseUnit;
        } else {
            this._ratioToBaseUnit = relativeRatio;
            this._baseUnit = new Object();
        }
    }

    s(amount){
        return new Quantity(amount, this)
    }

    es(amount){
        return this.s(amount);
    }

    convertedAmount(otherAmount, otherUnit){
        return otherAmount * otherUnit._ratioToBaseUnit / this._ratioToBaseUnit;
    }

    isCompatiableWith(other){
        return this._baseUnit == other._baseUnit;
    }
}

const TEASPOON = new Unit();
const TABLESPOON = new Unit(3, TEASPOON);
const OUNCE = new Unit(2, TABLESPOON);
const CUP = new Unit(8, OUNCE);
const PINT = new Unit(2, CUP);
const QUART = new Unit(2, PINT);
const GALLON = new Unit(4, QUART);

const INCH = new Unit();
const FOOT = new Unit(12, INCH);
const YARD = new Unit(3, FOOT);
const FURLONG = new Unit(220, YARD);
const MILE = new Unit(8, FURLONG);

module.exports = {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON, INCH, FOOT, YARD, FURLONG, MILE}