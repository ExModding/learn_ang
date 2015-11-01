// Code goes here


var webApp = angular.module('webApp', []);


//controllers

webApp.controller ('VotesCtrl', function ($scope, Votes) {
    $scope.votes  = Votes;

    $scope.expand = function(vote) {
       vote.show = !vote.show;
    }
});


//services


webApp.factory('Votes', [function() {

    //temporary repository till integration with DB this will be translated into restful get query
    var votes = [
        {
            id: '1',
            created: 1381583344653,
            updated: '222212',
            ratingID: '4',
            rate: 5,
            ip: '198.168.0.0',
            status: 'Approved',
            show : false,
            folder:[
                {
                    id: '1',
                    created: 1381583344653,
                    updated: '222212',
                    ratingID: '4',
                    rate: 5,
                    ip: '198.168.0.0',
                    status: 'Approved',
                },
                {
                    id: '111',
                    created: 1381583344653,
                    updated: '222212',
                    ratingID: '4',
                    rate: 5,
                    ip: '198.168.0.0',
                    status: 'Approved'
                }
              ]
        },
        {
            id: '2',
            created: 1382387322693,
            updated: '222212',
            ratingID: '3',
            rate: 1,
            ip: '198.168.0.1',
            status: 'Approved',
            show : false,
            folder:[
                {
                    id: '2',
                    created: 1382387322693,
                    updated: '222212',
                    ratingID: '3',
                    rate: 1,
                    ip: '198.168.0.1',
                    status: 'Approved',
                },
                {
                    id: '22',
                    created: 1382387322693,
                    updated: '222212',
                    ratingID: '3',
                    rate: 1,
                    ip: '198.168.0.1',
                    status: 'Approved'
                },
                {
                    id: '222',
                    created: 1382387327693,
                    updated: '222212',
                    ratingID: '3',
                    rate: 1,
                    ip: '198.168.0.1',
                    status: 'Approved'
                },
              ],
              file:[
              {
                id: '231',
                created: 1392387327693,
                updated: '222212',
                ratingID: '1',
                rate: 1,
                ip: '198.168.2.1',
                status: 'Approved'
              }
            ]
        }
    ];

    return votes;


}]);

