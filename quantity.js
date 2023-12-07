class Quantity{
    constructor(amount, unit){
        this._amount = amount;
        this._unit = unit;
    }

    equals(other){
        return this._amount == this._unit.convertedAmount(other._amount, other._unit)
    }

    add(other){
        if (!this._unit.isCompatiableWith(other._unit)) throw new Error("Can not add incompatible units together");
        return new Quantity(this._amount + this._unit.convertedAmount(other._amount, other._unit), this._unit);
    }
}

module.exports = {Quantity}