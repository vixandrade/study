const mockInts = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const vixArray = {
    init: function(values) {
        this.values = values
        return this
    },
    reduce: function (rInit, reduceCallback) {
        return this._reducer(rInit, this.values, reduceCallback)
    },
    _reducer: function (rInit, rValues, reduceCallback) {
        if (rValues.length == 0)
            return rInit
        else {
            rInit = reduceCallback(rInit, rValues[0])
            return this._reducer(rInit, rValues.slice(1), reduceCallback)
        }
    },
    map: function (mapCallback) {
        return this._mapper([], this.values, mapCallback)
    },
    _mapper: function (mResult, mValues, mapCallback) {
        if (mValues.length == 0) {
            return mResult
        } else {
            mResult.push(mapCallback(mValues[0]))
            return this._mapper(mResult, mValues.slice(1), mapCallback)
        }
    },
    filter: function (filterCallback) {
        return this._filter([], this.values, filterCallback)
    },
    _filter: function (fResult, fValues, filterCallback) {
        if (fValues.length == 0)
            return fResult
        else {
            if (filterCallback(fValues[0]))
                fResult.push(fValues[0])
            return this._filter(fResult, fValues.slice(1), filterCallback)
        }
    }
}

const myVixArray = Object.create(vixArray).init(mockInts)

const vSum = myVixArray.reduce(0, (sum, value) => sum + value )

const vDiff = myVixArray.reduce(0, (diff, value) => diff - value )

const vDoubleArray = myVixArray.map((value) => value * 2 )

const vEvenNumbers = myVixArray.filter((value) => value % 2 == 0 )

console.log("Sum with reduce:", vSum)
console.log("Difference with reduce:", vDiff)
console.log("Array of doubled values with map:", vDoubleArray)
console.log("Array of odd numbers with map:", vEvenNumbers)