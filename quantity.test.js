const {Quantity} = require("./quantity");
const {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON, INCH, FOOT, YARD, FURLONG, MILE} = require("./unit");

describe ('Quantity objects....', () => {
    test('are equal when quantity and unity match', () => {
        expect(new Quantity(3, TEASPOON).equals(new Quantity(3, TEASPOON))).toBe(true);
        expect(new Quantity(4, TEASPOON).equals(new Quantity(5, TEASPOON))).toBe(false);

        expect(new Quantity(1, TEASPOON).equals(new Quantity(1, TABLESPOON))).toBe(false);
        expect(new Quantity(1, TABLESPOON).equals(new Quantity(1, TABLESPOON))).toBe(true);

        expect(new Quantity(1, TEASPOON).equals(new Quantity(1, OUNCE))).toBe(false);
        expect(new Quantity(1, TABLESPOON).equals(new Quantity(1, OUNCE))).toBe(false);
    })

    test('can be created with a helper method', () => {
        expect(TEASPOON.s(3).equals(TEASPOON.s(3))).toBe(true);
        expect(TEASPOON.s(3).equals(TEASPOON.s(6))).toBe(false);
        expect(TEASPOON.s(6).equals(TEASPOON.s(3))).toBe(false);
    })

    test ('teaspoons and tablespoons can be equal if at the correct ratio', () => {
        expect(new Quantity(1, TABLESPOON).equals(new Quantity(3, TEASPOON))).toBe(true);
        expect(new Quantity(6, TEASPOON).equals(new Quantity(2, TABLESPOON))).toBe(true);
    })

    test ('Quantities can be equal if if at the correct ratio', () => {
        expect(new Quantity(1, OUNCE).equals(new Quantity(2, TABLESPOON))).toBe(true);
        expect(new Quantity(4, TABLESPOON).equals(new Quantity(2, OUNCE))).toBe(true);

        expect(new Quantity(12, TEASPOON).equals(new Quantity(2, OUNCE))).toBe(true);
        expect(OUNCE.s(3).equals(TEASPOON.s(18))).toBe(true);

        expect(CUP.s(1).equals(OUNCE.s(8))).toBe(true);
        expect(PINT.s(1).equals(CUP.s(2))).toBe(true);
        expect(QUART.s(1).equals(PINT.s(2))).toBe(true);
        expect(GALLON.s(1).equals(QUART.s(4))).toBe(true);

        expect(GALLON.s(1).equals(TEASPOON.s(4*2*2*8*2*3))).toBe(true);
        expect(TEASPOON.s(4*2*2*8*2*3).equals(GALLON.s(1))).toBe(true);
    })

    test('Can Add quantities', () => {
        expect(TEASPOON.s(1).add(TEASPOON.s(1)).equals(TEASPOON.s(2))).toBe(true);
        expect(TEASPOON.s(2).add(TEASPOON.s(3)).equals(TEASPOON.s(5))).toBe(true);
        expect(TABLESPOON.s(4).add(TABLESPOON.s(5)).equals(TABLESPOON.s(9))).toBe(true);
        expect(TEASPOON.s(1).add(TABLESPOON.s(1)).equals(TEASPOON.s(4))).toBe(true);
        expect(GALLON.s(1).add(QUART.s(4)).equals(PINT.s(16))).toBe(true);

        expect(MILE.s(1).add(FURLONG.s(4)).equals(FURLONG.s(12))).toBe(true);
    })

    test('Can not add incompatible units', () => {
        expect(() => TEASPOON.s(1).add(INCH.es(1))).toThrow(Error);
        expect(() => GALLON.s(1).add(MILE.s(1))).toThrow(Error);
    })

    test('Lengths equality', () => {
        expect(FOOT.s(1).equals(INCH.es(12))).toBe(true);
        expect(YARD.s(1).equals(FOOT.s(3))).toBe(true);
        expect(FURLONG.s(1).equals(YARD.s(220))).toBe(true);
        expect(MILE.s(1).equals(FURLONG.s(8))).toBe(true);
    })
})