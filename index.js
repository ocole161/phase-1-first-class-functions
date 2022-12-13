function receivesAFunction(cb) {
    return cb()
}

function returnsANamedFunction() {
    return function one() {1}
}

function returnsAnAnonymousFunction() {
    return function () {1}
}