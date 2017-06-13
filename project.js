var app = angular.module('app', [])

app.controller('testCtrl', function($scope) {
	$scope.name = 'stranger'
	$scope.inv = true
	$scope.invert = function() {
		var res = ''
		if (!$scope.inv) {
			res = $scope.name
		} else if ($scope.name) {
			res = $scope.name.split('').reverse().join('')
		}
		return res
	}
})
