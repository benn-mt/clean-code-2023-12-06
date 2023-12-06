class Quantity{
    constructor(amount, unit){
        this._amount = amount;
        this._unit = unit;
    }

    equals(other){
        return this._amount == other._amount && this._unit == other._unit;
    }
}

const TEASPOON = new Object();
TEASPOON.s = (amount) => new Quantity(amount, TEASPOON);

module.exports = {Quantity, TEASPOON}