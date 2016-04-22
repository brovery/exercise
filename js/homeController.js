(function(){
    'use strict';

    angular.module('homeController', [])
        .controller('homeController', homeController);

    homeController.$inject = ['homeService'];

    function homeController(homeService) {

        // list everything
        var hc = this;
        hc.todaysRoutine = homeService.todaysRoutine;
        hc.routineNotes = "";
        hc.curWeight = homeService.curWeight;
        hc.fRoutine = fRoutine;

        console.log(hc.curWeight);

        // public functions

        function fRoutine() {
            homeService.fRoutine(hc.routineNotes);
        }


    }

}());
