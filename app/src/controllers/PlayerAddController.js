app.controller('bookAddController', ['$scope', '$location', 'Foots', function($scope, $location, Foots){

  $scope.viewName = " Add Player";

  $scope.addPlayer = function(){
    console.log($scope.foot);
    Foots.save($scope.foot);
    $location.path("/show");
  }

}]);
