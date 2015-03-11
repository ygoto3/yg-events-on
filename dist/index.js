(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/**
@ngdoc ygFalseOn
@name ygFalseOn
@author
  Yusuke Goto <my.important.apes@gmail.com>
@description
  makes a property true when it catches a given event
 */
var _dirName, _exports, preprocessToParse;

preprocessToParse = require('../helpers/preprocessToParse');

_dirName = 'ygFalseOn';

_exports = {};

_exports["" + _dirName] = [
  '$parse', function($parse) {
    return {
      restrict: "A",
      link: function(iScope, iElem, iAttrs) {
        var _event, _parsed, _toParse;
        _event = iAttrs[_dirName];
        _toParse = preprocessToParse(iAttrs[_dirName + "Targets"], false);
        _parsed = $parse(_toParse);
        iScope.$on(_event, function() {
          _parsed(iScope);
        });
      }
    };
  }
];

module.exports = _exports;



},{"../helpers/preprocessToParse":5}],2:[function(require,module,exports){

/**
@ngdoc ygHideOn
@name ygHideOn
@author
  Yusuke Goto <my.important.apes@gmail.com>
@description
  hides when it catches a given event
 */
var _dirName, _exports;

_dirName = 'ygHideOn';

_exports = {};

_exports[_dirName] = [
  function() {
    return {
      restrict: "A",
      link: function(iScope, iElem, iAttrs) {
        var _val;
        _val = iAttrs[_dirName];
        iScope.$on(_val, function() {
          iElem.addClass('ng-hide');
        });
      }
    };
  }
];

module.exports = _exports;



},{}],3:[function(require,module,exports){

/**
@ngdoc ygShowOn
@name ygShowOn
@author
  Yusuke Goto <my.important.apes@gmail.com>
@description
  shows when it catches a given event
 */
var _dirName, _exports;

_dirName = 'ygShowOn';

_exports = {};

_exports[_dirName] = [
  function() {
    return {
      restrict: "A",
      link: function(iScope, iElem, iAttrs) {
        var _val;
        _val = iAttrs[_dirName];
        iScope.$on(_val, function() {
          iElem.removeClass('ng-hide');
        });
      }
    };
  }
];

module.exports = _exports;



},{}],4:[function(require,module,exports){

/**
@ngdoc ygTrueOn
@name ygTrueOn
@author
  Yusuke Goto <my.important.apes@gmail.com>
@description
  makes a property false when it catches a given event
 */
var _dirName, _exports, preprocessToParse;

preprocessToParse = require('../helpers/preprocessToParse');

_dirName = 'ygTrueOn';

_exports = {};

_exports["" + _dirName] = [
  '$parse', function($parse) {
    return {
      restrict: "A",
      link: function(iScope, iElem, iAttrs) {
        var _event, _parsed, _toParse;
        _event = iAttrs[_dirName];
        _toParse = preprocessToParse(iAttrs[_dirName + "Targets"], true);
        _parsed = $parse(_toParse);
        iScope.$on(_event, function() {
          _parsed(iScope);
        });
      }
    };
  }
];

module.exports = _exports;



},{"../helpers/preprocessToParse":5}],5:[function(require,module,exports){
module.exports = function(targets, destBoolean) {
  var _props, _toParse, i, len, prop;
  _props = targets.split(' ');
  _toParse = [];
  for (i = 0, len = _props.length; i < len; i++) {
    prop = _props[i];
    _toParse.push(prop + " = " + destBoolean + ";");
  }
  return _toParse.join('');
};



},{}],6:[function(require,module,exports){
angular.module("yg-events-on", []).directive(require('./directives/hideOn')).directive(require('./directives/showOn')).directive(require('./directives/falseOn')).directive(require('./directives/trueOn'));



},{"./directives/falseOn":1,"./directives/hideOn":2,"./directives/showOn":3,"./directives/trueOn":4}]},{},[6])