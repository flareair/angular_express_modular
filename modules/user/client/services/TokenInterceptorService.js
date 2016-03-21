(function(){

angular
    .module('App')
    .factory('tokenInterceptorService', tokenInterceptorService);

tokenInterceptorService.$inject = ['$q', '$window', '$location', 'authService'];

function tokenInterceptorService($q, $window, $location, authService) {

    return {
        request: request,
        requestError: requestError,
        response: response,
        responseError: responseError
    };

    function request(config) {
        config.headers = config.headers || {};
        if ($window.sessionStorage.token) {
            config.headers['x-access-token'] = $window.sessionStorage.token;

            // authService.isLogged = true;
        }
        console.log('interceptor ', authService.isLogged);
        return config;
    }

    function requestError(rejection) {
        return $q.reject(rejection);
    }

    function response(res) {
        if (res !== null && res.status == 200 && $window.sessionStorage.token && !authService.isLogged) {
            authService.isLogged = true;
            if ($window.sessionStorage.username) {
                authService.username = $window.sessionStorage.username;
            }
        }
        console.log('Username ',authService.username);
        return res || $q.when(res);
    }

    function responseError(rejection) {
        if (rejection !== null && rejection.status === 401 && ($window.sessionStorage.token || authService.isLogged)) {

            delete $window.sessionStorage.token;
            delete $window.sessionStorage.username;
            authService.isLogged = false;
            authService.username = null;
            $location.path("/users/login");
        }

        return $q.reject(rejection);
    }

}

})();