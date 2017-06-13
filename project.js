var app = angular.module('app', [])

app.controller('testCtrl', function($scope) {
    //$scope.name = ''
	$scope.invert = function() {
		if ($scope.name) {
			return $scope.name.split('').reverse().join('')
		} else {
			return('')
		}
	}
})
