const mockInts = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
const mockPeople = [
    { name: "Vix", age: 24, quote: "" },
    { name: "Doctor", age: 900, quote: "BARCELONA!" },
    { name: "MPJ", age: 30, quote: "Good Monday Morning!" }
]
const mockTasks = [
    [ "Vix", "Study JavaScript", "doing" ],
    [ "MPJ", "Post a video every Monday", "pending" ],
    [ "Doctor", "End the Time War", "done" ],
    [ "Vix", "Fix Redis issue", "done" ],
    [ "Vix", "Cook lunch", "pending" ],
    [ "Doctor", "Get rid of Daleks" ]
]

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
    },
    find: function (findCallback) {
        return this._find(this.values, findCallback)
    },
    _find: function (fValues, findCallback) {
        if (fValues.length == 0)
            return null
        else if (findCallback(fValues[0]))
            return fValues[0]
        else
            return this._find(fValues.slice(1), findCallback)
    }
}

const person = {
    init: function (name, age, quote) {
        this.name = name
        this.age = age
        this.quote = quote
        return this
    },
    speak: function () { console.log(this.quote) }
}

const task = {
    init: function (owner, description, status) {
        this.owner = owner,
        this.description = description,
        this.status = status
        return this
    },
    setStatus: function (newStatus) { this.status = newStatus }
}

const vInts = Object.create(vixArray).init(mockInts)
const vPeople = Object.create(vixArray).init(mockPeople)

const vSum = vInts.reduce(0, (sum, value) => sum + value )

const vDiff = vInts.reduce(0, (diff, value) => diff - value )

const vDoubleArray = vInts.map((value) => value * 2 )

const vEvenNumbers = vInts.filter((value) => value % 2 == 0 )

const vPeopleAge = vPeople.reduce(0, (sum, person) => sum + person.age )

const vDoctor = vPeople.find((person) => person.name === "Doctor" )

console.log("Sum with reduce:", vSum)
console.log("Difference with reduce:", vDiff)
console.log("Array of doubled values with map:", vDoubleArray)
console.log("Array of even numbers with map:", vEvenNumbers)
console.log("Sum of ages in people aray:", vPeopleAge)
console.log("Doctor object with find:", vDoctor)