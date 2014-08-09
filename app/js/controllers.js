'use strict';

/* Controllers */

var moodSlidersApp = angular.module('moodSlidersApp', ['ngCookies', 'ngSlider']);

moodSlidersApp.controller('MoodSliderCtrl', ['$scope','$cookies','$http', '$log', function($scope, $cookies, $http, $log) {

  if($cookies.hugSlider) {
    $scope.hugSlider = $cookies.hugSlider;
  }
  if($cookies.hugSlider) {
    $scope.hungerSlider = $cookies.hungerSlider;
  }
  if($cookies.hugSlider) {
    $scope.funSlider = $cookies.funSlider;
  }
  if($cookies.hugSlider) {
    $scope.socialSlider = $cookies.socialSlider;
  }
  if($cookies.hugSlider) {
    $scope.energySlider = $cookies.energySlider;
  }
  if($cookies.hugSlider) {
    $scope.comfortSlider = $cookies.comfortSlider;
  }

  $scope.hugOptions = {
    from: 1,
    to: 100,
    step: 1,
    scale: [0, '|', 50, '|' , 100],
    dimension: " %"
  };
  $scope.hungerOptions = {
    from: 1,
    to: 100,
    step: 1,
    scale: [0, '|', 50, '|' , 100],
    dimension: " %"
  };
  $scope.funOptions = {
    from: 1,
    to: 100,
    step: 1,
    scale: [0, '|', 50, '|' , 100],
    dimension: " %"
  };
  $scope.socialOptions = {
    from: 1,
    to: 100,
    step: 1,
    scale: [0, '|', 50, '|' , 100],
    dimension: " %"
  };
  $scope.energyOptions = {
    from: 1,
    to: 100,
    step: 1,
    scale: [0, '|', 50, '|' , 100],
    dimension: " %"
  };
  $scope.comfortOptions = {
    from: 1,
    to: 100,
    step: 1,
    scale: [0, '|', 50, '|' , 100],
    dimension: " %"
  };

  $scope.hugChange = function() {
    $cookies.hugSlider = $scope.hugSlider
  };
  $scope.hungerChange = function() {
    $cookies.hungerSlider = $scope.hungerSlider
  };
  $scope.funChange = function() {
    $cookies.funSlider = $scope.funSlider
  };
  $scope.socialChange = function() {
    $cookies.socialSlider = $scope.socialSlider
  };
  $scope.energyChange = function() {
    $cookies.energySlider = $scope.energySlider
  };
  $scope.comfortChange = function() {
    $cookies.comfortSlider = $scope.comfortSlider
  };

}]);
