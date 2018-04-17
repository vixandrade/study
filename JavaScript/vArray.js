var vArray = function(values) {
    _values = values

    return {
        values: function() {
            return _values
        },
        doubledValues: function() {
            return _values.map((value) => value * 2)
        }
    }
}

module.exports = vArray