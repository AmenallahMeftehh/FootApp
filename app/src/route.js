app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    //routes for home
    .when('/home',{
      templateUrl: '/app/src/templates/home.html'
      // controller: 'footIndexController'
    })
    //routes for foots
    .when('/show',{
      templateUrl: '/app/src/templates/Player/show.html',
      controller: 'footIndexController'
    })
    .when('/add',{
      templateUrl: '/app/src/templates/Player/add.html',
      controller: 'footAddController'
    })
    .when('/details/:id',{
      templateUrl: '/app/src/templates/Player/details.html',
      controller: 'footDetailsController'
    })
    .when('/edit/:id',{
      templateUrl: '/app/src/templates/Player/edit.html',
      controller: 'footEditController'
    })
    //routes for cart
    .when('/cart/show',{
      templateUrl: '/app/src/templates/Show/show.html',
      controller: 'showDetailsController'
    })
    //routes for sign in , sign up
    .when('/login/signin',{
      templateUrl: '/app/src/templates/login/signin.html',
      controller: 'signInController'
    })
    .when('/login/signup',{
      templateUrl: '/app/src/templates/login/signup.html',
      controller: 'signUpController'
    })
    //the case when the url don't have a rule
    .otherwise({redirectTo: '/home'});
}]);
