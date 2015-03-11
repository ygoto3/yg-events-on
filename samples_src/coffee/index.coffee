angular.module 'samples', ['yg-events-on']
.controller 'SampleCtrl', [
  '$scope'
  (
    $scope
  ) ->
    $scope.flag = false
    return
]
.controller 'SampleActionsCtrl', [
  '$scope'
  '$rootScope'
  (
    $scope
    $rootScope
  ) ->
    $scope.broadcastHide = ->
      $rootScope.$broadcast 'event:hide'
      return

    $scope.broadcastShow = ->
      $rootScope.$broadcast 'event:show'
      return

    $scope.broadcastFalse = ->
      $rootScope.$broadcast 'event:false'
      return

    $scope.broadcastTrue = ->
      $rootScope.$broadcast 'event:true'
      return

    return
]
