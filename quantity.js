class Unit{
    constructor(ratioToBaseUnit = 1, baseUnit){
        this._ratioToBaseUnit = ratioToBaseUnit;
        this._baseUnit = baseUnit;
    }

    s(amount){
        return new Quantity(amount, this)
    }

    amountInBaseUnit(amount){
        if (this._baseUnit == undefined) {
            return amount * this._ratioToBaseUnit;
        }

        return this._baseUnit.amountInBaseUnit(amount*this._ratioToBaseUnit);
    }
}

class Quantity{
    constructor(amount, unit){
        this._amount = amount;
        this._unit = unit;
    }

    equals(other){
        return this._unit.amountInBaseUnit(this._amount) == other._unit.amountInBaseUnit(other._amount)
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