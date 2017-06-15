var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log) {

    $log.log('logのテスト');
    $log.debug('debugのテスト');
    $log.info('infoのテスト');
    $log.warn('warn!!のテスト');
    $log.error('例外が発生しました');
});