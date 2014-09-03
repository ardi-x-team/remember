/* globals angular */
'use strict';

/* Controllers */
angular.module('myApp.controllers')
  .controller('AutoCompleteSearch', ['$scope', '$http', function($scope, $http) {
    var search = this;
    search.result = [];

    $scope.change = function() {
      search.keyword = $scope.keyword;
      
      if (search.keyword != '') {
        $http.get('/api/search?keyword=' + search.keyword, {})
          .success(function(data) {
            if (typeof data.data.hits !== 'undefined') {
              search.result = data.data.hits.hits;
            }
          });
      }
    };
  }]);

