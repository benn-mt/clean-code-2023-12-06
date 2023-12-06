const {Quantity, TEASPOON, TABLESPOON, OUNCE} = require("./quantity");

describe ('Quantity objects....', () => {
    test('are equal when quantity and unity match', () => {
        expect(new Quantity(3, TEASPOON).equals(new Quantity(3, TEASPOON))).toBe(true);
        expect(new Quantity(4, TEASPOON).equals(new Quantity(5, TEASPOON))).toBe(false);

        expect(new Quantity(1, TEASPOON).equals(new Quantity(1, TABLESPOON))).toBe(false);
        expect(new Quantity(1, TABLESPOON).equals(new Quantity(1, TABLESPOON))).toBe(true);

        expect(new Quantity(1, TABLESPOON).equals(new Quantity(1, OUNCE))).toBe(false);
    })

    test('can be created with a helper method', () => {
        expect(TEASPOON.s(3).equals(TEASPOON.s(3))).toBe(true);
        expect(TEASPOON.s(3).equals(TEASPOON.s(6))).toBe(false);
        expect(TEASPOON.s(6).equals(TEASPOON.s(3))).toBe(false);
    })
})