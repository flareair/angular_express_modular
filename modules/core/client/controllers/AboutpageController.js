(function(){

angular
    .module('App')
    .controller('AboutPageCtrl', AboutPageCtrl);


function AboutPageCtrl() {
    this.header = 'About this site';
}

})();