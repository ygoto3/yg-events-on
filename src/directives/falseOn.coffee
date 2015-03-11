###*
@ngdoc ygFalseOn
@name ygFalseOn
@author
  Yusuke Goto <my.important.apes@gmail.com>
@description
  makes a property true when it catches a given event
###

preprocessToParse = require '../helpers/preprocessToParse'

_dirName = 'ygFalseOn'
_exports = {}

_exports["#{_dirName}"] = [
  '$parse'
  (
    $parse
  ) ->
    restrict: "A"
    link: (iScope, iElem, iAttrs) ->
      _event = iAttrs[_dirName]
      _toParse = preprocessToParse(iAttrs["#{_dirName}Targets"], false)
      _parsed = $parse(_toParse)

      iScope.$on _event, ->
        _parsed(iScope)
        return

      return
]

module.exports = _exports
