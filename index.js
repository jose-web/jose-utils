function isAlphaNumeric(str) {
    return /^[a-z0-9]+$/i.test(str)
}

module.exports = {
    isAlphaNumeric
};