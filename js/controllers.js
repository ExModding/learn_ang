// Code goes here


var myApp = angular.module('myApp', []);


//controllers

myApp.controller ('VotesCtrl', function ($scope, Votes) {
    $scope.votes  = Votes;

    $scope.expand = function(vote) {
       vote.show = !vote.show;
    }
});