(function(){

angular
    .module('App')
    .controller('RootCtrl', RootCtrl);

RootCtrl.$inject = ['authService'];

function RootCtrl(authService) {
    console.log(authService.username);
    this.username = function() {
        return authService.username;
    };
}

})();