 var app, deps;

  deps = ['treeGrid', 'xeditable'];

  app = angular.module('treeGridTest', deps);

    app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

  app.controller('TreeGridController', function($scope, $timeout, $http) {
    var tree;

    var tree_data = [
     {Fields:"Field1_1",February:9826675,March:318212000,
      children:[
        {Fields:"Field2_1", February:423970,March:38340000,
            children:[
                {Fields:"Field3_1", February:231,March:837442},
                {Fields:"Field3_2", February:503,March:3904657,May:22325,October:8889,
                children:[
                    {Fields:"Field4_1", February:503,March:3904657, last:111}
                ]
                }
            ]
        },
        {Fields:"Illinois", February:57914,March:12882135,
            children:[
                {Fields:"Chicago", February:234,March:2695598}]
        }
    ]
  },
  {Fields:"Texas",February:268581,March:26448193}
  ];


    $scope.tree_data = tree_data;
    $scope.my_tree = tree = {};
    $scope.expanding_property = "Fields";
    $scope.col_defs = [
    	{ field: "January", cellTemplate: '<a href="#" editable-text="row.branch[col.field]">{{row.branch[col.field]}}</a>'},
    	{ field: 'February', cellTemplate: '<a href="#" editable-text="row.branch[col.field]">{{row.branch[col.field]}},{{my_tree.tree_data}} </a>',
        cellTemplateScope: $scope.tree_data},
    	{ field: "March", cellTemplate: '<a href="#" editable-text="{{tree_data[0]}}" onbeforesave="checkName($data)">{{row.branch[col.field]}}</a>'},
        { field: "April", cellTemplate: '<a href="#" editable-text="row.branch[col.field]">{{row.branch[col.field]}}</a>'},
        { field: "May", cellTemplate: '<a href="#" editable-text="row.branch[col.field]">{{row.branch[col.field]}}</a>'},
        { field: "June", cellTemplate: '<a href="#" editable-text="row.branch[col.field]">{{row.branch[col.field]}}</a>'},
        { field: "July", cellTemplate: '<a href="#" editable-text="row.branch[col.field]">{{row.branch[col.field]}}</a>'},
        { field: "August", cellTemplate: '<a href="#" editable-text="row.branch[col.field]">{{row.branch[col.field]}}</a>'},
        { field: "September", cellTemplate: '<a href="#" editable-text="row.branch[col.field]">{{row.branch[col.field]}}</a>'},
        { field: "October", cellTemplate: '<a href="#" editable-text="row.branch[col.field]">{{row.branch[col.field]}}</a>'},
        { field: "November", cellTemplate: '<a href="#" editable-text="row.branch[col.field]">{{row.branch[col.field]}}</a>'},
        { field: "December", cellTemplate: '<a href="#" editable-text="row.branch[col.field]">{{row.branch[col.field]}}</a>'}
    ];
    $scope.my_tree_handler = function(branch){
    	console.log('you clicked on', branch, $scope)
    };


    $scope.checkName = function(data) {
        if (data !== '444') {
            return "Value should be 444";
        }
    };


    $scope.user = {
          name: 'awesome user'
      };


  });

