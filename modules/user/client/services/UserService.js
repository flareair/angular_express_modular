(function(){

angular
    .module('App')
    .factory('userService', userService);

userService.$inject = ['$http'];

function userService($http) {
    return {
        logIn: logIn,
        getProfile: getProfile
    };

    function logIn(username, password) {
        return $http.post('/users/login', {
            username: username,
            password: password
        });
    }


    function getProfile() {
        return $http.get('/users/getprofile');
    }
}

})();