(function(){

angular
    .module('App')
    .controller('RootCtrl', RootCtrl);

RootCtrl.$inject = ['authService', '$window', '$location'];

function RootCtrl(authService, $window, $location) {
    console.log(authService.username);
    this.username = function() {
        return authService.username;
    };

    this.logOut = function() {
        authService.isLogged = false;
        authService.username = null;
        delete $window.sessionStorage.token;
        delete $window.sessionStorage.username;
        $location.path('/');
    };
}

})();