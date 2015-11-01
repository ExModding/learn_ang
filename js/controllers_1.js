angular.module("ngTableDemos", []);



(function() {
  "use strict";

  angular.module("ngTableDemos").factory("ngTableGroupedList", dataFactory);

  dataFactory.$inject = [];

  function dataFactory() {
    return [{"name":"Karen","age":45,"money":798,"country":"Czech Republic"},{"name":"Cat","age":49,"money":749,"country":"Czech Republic"},{"name":"Bismark","age":48,"money":672,"country":"Denmark"},{"name":"Markus","age":41,"money":695,"country":"Costa Rica"},{"name":"Anthony","age":45,"money":559,"country":"Japan"},{"name":"Alex","age":55,"money":645,"country":"Czech Republic"},{"name":"Stephane","age":57,"money":662,"country":"Japan"},{"name":"Alex","age":59,"money":523,"country":"American Samoa"},{"name":"Tony","age":56,"money":540,"country":"Canada"},{"name":"Cat","age":57,"money":746,"country":"China"},{"name":"Christian","age":59,"money":572,"country":"Canada"},{"name":"Tony","age":60,"money":649,"country":"Japan"},{"name":"Cat","age":47,"money":675,"country":"Denmark"},{"name":"Stephane","age":50,"money":674,"country":"China"},{"name":"Markus","age":40,"money":549,"country":"Portugal"},{"name":"Anthony","age":53,"money":660,"country":"Bahamas"},{"name":"Stephane","age":54,"money":549,"country":"China"},{"name":"Karen","age":50,"money":611,"country":"American Samoa"},{"name":"Therese","age":53,"money":754,"country":"China"},{"name":"Bismark","age":49,"money":791,"country":"Canada"},{"name":"Daraek","age":56,"money":640,"country":"Costa Rica"},{"name":"Tony","age":43,"money":674,"country":"Canada"},{"name":"Karen","age":47,"money":700,"country":"Portugal"},{"name":"Therese","age":47,"money":718,"country":"Czech Republic"},{"name":"Karen","age":50,"money":655,"country":"Japan"},{"name":"Daraek","age":59,"money":581,"country":"American Samoa"},{"name":"Daraek","age":60,"money":595,"country":"Portugal"},{"name":"Markus","age":44,"money":607,"country":"China"},{"name":"Simon","age":58,"money":728,"country":"Japan"},{"name":"Simon","age":49,"money":655,"country":"Bahamas"}];
  }
})();




(function() {
  "use strict";

  var app = angular.module("myApp", ["ngTable", "ngTableDemos"]);

  app.controller("demoController", demoController);

  demoController.$inject = ["NgTableParams", "ngTableGroupedList"];

  function demoController(NgTableParams, simpleList) {
    this.tableParams = new NgTableParams({
      // initial grouping
      group: "country"
    }, {
      dataset: simpleList
    });
  }

  app.controller("dynamicDemoController", dynamicDemoController);

  dynamicDemoController.$inject = ["NgTableParams", "ngTableGroupedList"];

  function dynamicDemoController(NgTableParams, simpleList) {
    this.cols = [{
      field: "country",
      title: "Country",
      sortable: "country",
      show: false,
      groupable: "country"
    }, {
      field: "name",
      title: "Name",
      sortable: "name",
      show: true,
      groupable: "name"
    }, {
      field: "age",
      title: "Age",
      sortable: "age",
      show: true,
      groupable: "age"
    }, {
      field: "money",
      title: "Money",
      sortable: "money",
      show: true
    }];

    this.tableParams = new NgTableParams({
      // initial grouping
      group: {
        country: "desc"
      }
    }, {
      dataset: simpleList,
      groupOptions: {
        isExpanded: false
      }
    });
  }
})();

(function() {
  "use strict";

  angular.module("myApp").run(configureDefaults);
  configureDefaults.$inject = ["ngTableDefaults"];

  function configureDefaults(ngTableDefaults) {
    ngTableDefaults.params.count = 5;
    ngTableDefaults.settings.counts = [];
  }
})();




