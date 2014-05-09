'use strict';

angular.module('mean').controller('MypackageController', ['$scope', 'Global',
    function($scope, Global, Mypackage) {
        $scope.global = Global;
        $scope.mypackage = {
            name: 'mypackage'
        };
    }
]);

angular.module('mean').controller('MypackageInstallManagerController', ['$scope', 'Global', 
    function($scope, Global, Mypackage) {
        $scope.global = Global;
        $scope.mypackage = {
            name: 'mypackage'
        };


        $scope.percent = 0;

        /*Pusher.subscribe('percent', 'updated', function (item) {
			    // an item was updated. find it in our list and update it.
			    $scope.percent = item;
			  });
			 
			  var retrieveItems = function () {
			    if($scope.percent < 100){
			    	$scope.percent = $scope.percent + 1;
			    }
			  };
			 
			  $scope.updateItem = function (item) {
			    console.log('updating item');
			    item = $scope.percent + 1;
			  };
			 
			  // load the items
			  retrieveItems();*/
    }
]);