(function(){

angular
    .module('App')
    .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/core/partials/index',
        controller: 'MainPageCtrl',
        controllerAs: 'mainpage',
        access: {requiredLogin: false}
    })
    .when('/about', {
        templateUrl: '/core/partials/about',
        controller: 'AboutPageCtrl',
        controllerAs: 'aboutpage',
        access: {requiredLogin: false},
    })
    .when('/users', {
        templateUrl: '/users/partials/index',
        controller: 'UserPageCtrl',
        controllerAs: 'userpage',
        access: {requiredLogin: false},
    })
    .when('/users/login', {
        templateUrl: '/users/partials/login',
        controller: 'LoginPageCtrl',
        controllerAs: 'loginpage',
        access: {requiredLogin: false},
    })
    .when('/users/profile', {
        templateUrl: '/users/partials/profile',
        controller: 'ProfilePageCtrl',
        controllerAs: 'profilepage',
        access: {requiredLogin: true},
    })
    .when('/404', {
        templateUrl: '/core/partials/404',
        access: {requiredLogin: false},
    })
    .otherwise({
        redirectTo: '/404'
    });

    $locationProvider.html5Mode(true);
}

})();