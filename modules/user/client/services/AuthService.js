(function(){

angular
    .module('App')
    .factory('authService', authService);

// authService.$inject = ['$window'];

function authService() {

    return {
        isLogged: false,
        username: null,
    };
}

})();