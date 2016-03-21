(function(){

angular
    .module('App')
    .controller('MainPageCtrl', MainPageCtrl);


function MainPageCtrl() {
    this.header = 'Main page header';
}

})();