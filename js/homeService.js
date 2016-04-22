(function(){
    'use strict';

    angular.module('homeService', [])
        .service('homeService', homeService);

    homeService.$inject = [];

    function homeService() {

        // variable definitions
        var hs = this;
        hs.todaysRoutine = {};
        hs.routines = [];
        hs.exercises = [];
        hs.users = [];
        hs.completed = [];
        hs.routineId = 0;
        hs.curUserId = 1;
        hs.schedule = [1, 3, 5];
        hs.curWeight = {weight: 195};

        // function definitions
        hs.getData = getData;
        hs.fRoutine = fRoutine;

        getData();

        // public functions
        function fRoutine(notes) {
            var myCompletedRoutine = {};
            myCompletedRoutine.date = new Date();
            myCompletedRoutine.user_id = hs.curUserId;
            myCompletedRoutine.routine_id = hs.todaysRoutine.id;
            myCompletedRoutine.notes = notes;

            hs.completed.push(myCompletedRoutine);

            hs.users[0].cur_weight = hs.curWeight.weight;

            console.log(hs.completed);
            console.log(hs.users[0]);
        }

        function getData() {
            // Manual Setup.
            hs.routines = [{
                id: 1,
                name: "Beginner Core I",
                exercises: [1, 2, 3, 4, 5],
                sets: 3,
                rest: 60
            },{
                id: 2,
                name: "Beginner Core II",
                exercises: [5, 6, 7, 8, 9, 10],
                sets: 3,
                rest: 60
            }];

            hs.exercises = [{
                id: 1,
                name: "Tummy Vacuums",
                reps: "5-second holds",
                rep_num: 8
            }, {
                id: 2,
                name: "Clam Shells",
                reps: "10-second holds per side",
                rep_num: 10
            }, {
                id: 3,
                name: "Dead Bugs",
                reps: "per side",
                rep_num: 8
            }, {
                id: 4,
                name: "Band Anti-Rotation",
                reps: "10-second holds per side",
                rep_num: 8
            }, {
                id: 5,
                name: "Bird Dog",
                reps: "10-second holds per side",
                rep_num: 8
            }, {
                id: 6,
                name: "Spider Plank Crunch",
                reps: "Repeat once for each leg",
                rep_num: 5
            }, {
                id: 7,
                name: "Modified Bicycle Crunch",
                reps: "Continue for one minute",
                rep_num: 5
            }, {
                id: 8,
                name: "Sit-Ups",
                reps: "Continue for one minute",
                rep_num: 5
            }, {
                id: 9,
                name: "Seated Leg Lifts",
                reps: "Continue for one minute",
                rep_num: 5
            }, {
                id: 10,
                name: "Standing Bicycle Crunches",
                reps: "Do once for each leg",
                rep_num: 5
            }];

            hs.users = [{
                id: 1,
                name: "Brandon O'Very",
                start_weight: 195,
                cur_weight: 195
            }];


            hs.completed = [];

            // TODO: Pull data from database


            // Create the todaysRoutine database by collating all data together.
            createRoutine();

        }


        // private functions
        function createRoutine() {
            // set the name, sets & rest of today's routine
            hs.todaysRoutine.id = hs.routines[hs.routineId].id;
            hs.todaysRoutine.name = hs.routines[hs.routineId].name;
            hs.todaysRoutine.sets = hs.routines[hs.routineId].sets;
            hs.todaysRoutine.rest = hs.routines[hs.routineId].rest;

            // set up which exercises go with this routine.
            hs.todaysRoutine.exercises = [];
            var exercises = hs.routines[hs.routineId].exercises;
            for (var i = 0; i < exercises.length; i++) {
                for (var j = 0; j < hs.exercises.length; j++) {
                    if (exercises[i] == hs.exercises[j].id) {
                        hs.todaysRoutine.exercises.push(hs.exercises[j]);
                    }
                }
            }
        }

    }

}());
