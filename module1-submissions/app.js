(function () {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ["$scope"]

function LunchCheckController($scope) {
  $scope.clearMessage = function () {
    $scope.errorMessage = ""
  }
  $scope.checkIfTooMuch = function () {
    $scope.messageClass = "message"
    if ($scope.lunchMenu == '') {
      $scope.errorMessage = "Please enter data first";
      $scope.messageClass = "redMessage";
      return;
    }
    var lunchItems = $scope.lunchMenu.split(',')
    var count = 0
    for (var item in lunchItems) {
      if (lunchItems[item] == '') {
        continue;
      }
      count ++;
    }

    if (count <= 3) {
      $scope.errorMessage = "Enjoy";
      $scope.messageClass = "greenMessage";
      return;
    }

    $scope.errorMessage = "Too much";
    $scope.messageClass = "redMessage";
  };
};

})();
