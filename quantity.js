class Unit{
    constructor(relativeRatio = 1, relativeUnit){
        if (relativeUnit){
            this._ratioToBaseUnit = relativeRatio * relativeUnit._ratioToBaseUnit;
            this._baseUnit = relativeUnit._baseUnit;
        } else {
            this._ratioToBaseUnit = relativeRatio;
        }
    }

    s(amount){
        return new Quantity(amount, this)
    }

    convertedAmount(otherAmount, otherUnit){
        return otherAmount * otherUnit._ratioToBaseUnit / this._ratioToBaseUnit;
    }
}

class Quantity{
    constructor(amount, unit){
        this._amount = amount;
        this._unit = unit;
    }

    equals(other){
        return this._amount == this._unit.convertedAmount(other._amount, other._unit)
    }

    add(other){
        return new Quantity(this._amount + this._unit.convertedAmount(other._amount, other._unit), this._unit);
    }
}

const TEASPOON = new Unit();
const TABLESPOON = new Unit(3, TEASPOON);
const OUNCE = new Unit(2, TABLESPOON);
const CUP = new Unit(8, OUNCE);
const PINT = new Unit(2, CUP);
const QUART = new Unit(2, PINT);
const GALLON = new Unit(4, QUART);

module.exports = {Quantity, TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON}