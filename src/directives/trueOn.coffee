###*
@ngdoc ygTrueOn
@name ygTrueOn
@author
  Yusuke Goto <my.important.apes@gmail.com>
@description
  makes a property false when it catches a given event
###

preprocessToParse = require '../helpers/preprocessToParse'

_dirName = 'ygTrueOn'
_exports = {}

_exports["#{_dirName}"] = [
  '$parse'
  (
    $parse
  ) ->
    restrict: "A"
    link: (iScope, iElem, iAttrs) ->
      _event = iAttrs[_dirName]
      _toParse = preprocessToParse(iAttrs["#{_dirName}Targets"], true)
      _parsed = $parse(_toParse)

      iScope.$on _event, ->
        _parsed(iScope)
        return

      return
]

module.exports = _exports
