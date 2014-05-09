'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('mypackage example page', {
            url: '/mypackage/example',
            templateUrl: 'mypackage/views/index.html'
        }).state('mypackage installmanager', {
            url: '/mypackage/installmanager',
            templateUrl: 'mypackage/views/installmanager.html'
        });

        //PusherServiceProvider.setToken('APP_ID').setOptions({});
    }
]);
