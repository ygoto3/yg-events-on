###*
@ngdoc ygShowOn
@name ygShowOn
@author
  Yusuke Goto <my.important.apes@gmail.com>
@description
  shows when it catches a given event
###

_dirName = 'ygShowOn'
_exports = {}

_exports[_dirName] = [
  ->
    restrict: "A"
    link: (iScope, iElem, iAttrs) ->
      _val = iAttrs[_dirName]

      iScope.$on _val, ->
        iElem.removeClass 'ng-hide'
        return

      return
]

module.exports = _exports
