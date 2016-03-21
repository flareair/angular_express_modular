(function(){

angular
    .module('App')
    .controller('ProfilePageCtrl', ProfilePageCtrl);


ProfilePageCtrl.inject = ['userService'];

function ProfilePageCtrl(userService) {
    var vm = this;
    vm.header = 'Profile page';
    vm.user = {};

    activate();

    function activate() {
        userService.getProfile().then(function(res) {
            console.log(res.data);
            vm.user = res.data;
            console.log(vm.user.name);
            return vm.user;
        });
    }


}

})();