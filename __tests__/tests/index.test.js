const { isAlphaNumeric } = require('../../index'); // Adjust the path as necessary

test('valid alphanumeric strings return true', () => {
	expect(isAlphaNumeric('abc123')).toBe(true);
});

test('invalid strings return false', () => {
	expect(isAlphaNumeric('abc123!')).toBe(false);
});