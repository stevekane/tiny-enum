module.exports = Enum

var freeze = Object.freeze || function () {}

function Enum () {
  var args = Array.prototype.slice.call(arguments, 0)

  for (var i = 0, k; i < args.length; i++) {
    k = {}
    this[args[i]] = k

    for (var j = 0; j < args.length; j++) defProp(k, args[j], args[i])
    freeze(k)
  }
  freeze(this)
}

function defProp (target, arg1, arg2) {
  Object.defineProperty(target, arg1, {
    value: arg1 === arg2
  })
}
