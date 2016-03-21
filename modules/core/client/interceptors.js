(function(){

angular
    .module('App')
    .config(interceptors);

interceptors.$inject = ['$httpProvider'];

function interceptors($httpProvider) {
    $httpProvider.interceptors.push('tokenInterceptorService');
}

})();