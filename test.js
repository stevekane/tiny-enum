var test = require('tape')
var Enum = require('./index')

test('Enum', function (t) {
  var e = new Enum('FOO', 'BAR', 'BAZ')
  var val = e.FOO

  t.true(val.FOO)
  t.false(val.BAR)
  t.false(val.BAZ)
  t.end()
})

test('Real world example', function (t) {
  var MOUSE_STATE = new Enum('UP', 'DOWN', 'JUST_UP', 'JUST_DOWN')
  var state = MOUSE_STATE.DOWN

  if (state.DOWN) t.true(true)

  state = MOUSE_STATE.JUST_UP

  if (state.DOWN) t.false(false)

  t.true(state.JUST_UP)
  t.end()
})

test('values are immutable (if supported by runtime)', function (t) {
  var MOUSE_STATE = new Enum('UP', 'DOWN', 'JUST_UP', 'JUST_DOWN')

  MOUSE_STATE.BAR = 'BAR'

  t.same(MOUSE_STATE.BAR, undefined)
  t.end()
})
