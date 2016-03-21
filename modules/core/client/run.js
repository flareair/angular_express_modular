(function() {


angular
    .module('App')
    .run(onRun);


onRun.$inject = ['$rootScope', '$location', '$window', 'authService'];

function onRun($rootScope, $location, $window, authService) {

    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
        if (nextRoute && nextRoute.access.requiredLogin && !authService.isLogged && !$window.sessionStorage.token) {
            $location.path('/users/login');
        }
    });
}

})();