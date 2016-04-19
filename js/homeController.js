(function(){
    'use strict';

    angular.module('homeController', [])
        .controller('homeController', homeController);

    homeController.$inject = ['homeService'];

    function homeController(homeService) {

        // list everything
        var hc = this;
        hc.todaysRoutine = homeService.todaysRoutine;



        // public functions



    }

}());
