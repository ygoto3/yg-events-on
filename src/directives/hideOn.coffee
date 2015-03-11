###*
@ngdoc ygHideOn
@name ygHideOn
@author
  Yusuke Goto <my.important.apes@gmail.com>
@description
  hides when it catches a given event
###

_dirName = 'ygHideOn'
_exports = {}

_exports[_dirName] = [
  ->
    restrict: "A"
    link: (iScope, iElem, iAttrs) ->
      _val = iAttrs[_dirName]

      iScope.$on _val, ->
        iElem.addClass 'ng-hide'
        return

      return
]

module.exports = _exports
