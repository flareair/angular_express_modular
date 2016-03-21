(function(){

angular
    .module('App')
    .controller('UserPageCtrl', UserPageCtrl);


function UserPageCtrl() {
    this.header = 'User Page header';
}

})();