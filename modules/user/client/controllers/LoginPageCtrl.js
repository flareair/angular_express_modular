(function(){

angular
    .module('App')
    .controller('LoginPageCtrl', LoginPageCtrl);


LoginPageCtrl.$ingect = ['userService', 'authService', '$window', '$location'];

function LoginPageCtrl(userService, authService, $window, $location) {
    var vm = this;

    vm.logIn = function logIn(username, password) {
        userService.logIn(username, password)
            .then(function(res) {
                authService.isLogged = true;
                authService.username = res.data.username;
                $window.sessionStorage.token = res.data.token;
                $window.sessionStorage.username = authService.username;
                $location.path('/users/profile');
                // console.log(res);
            })
            .catch(function(err) {
                console.error(err);
            });
    };
}

})();