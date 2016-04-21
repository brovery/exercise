(function(){
    'use strict';

    angular.module('homeController', [])
        .controller('homeController', homeController);

    homeController.$inject = ['homeService'];

    function homeController(homeService) {

        // list everything
        var hc = this;
        hc.todaysRoutine = homeService.todaysRoutine;
        hc.fRoutine = fRoutine;



        // public functions

        function fRoutine() {
            homeService.fRoutine();
        }


    }

}());
