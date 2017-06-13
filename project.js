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

app.controller('testCtrl2', function($scope) {
	$scope.word = 'word'
	$scope.permut = function(string) {
		if (string.length < 2) return string; // This is our break condition

		var permutations = []; // This array will hold our permutations

		for (var i=0; i<string.length; i++) {
			var char = string[i];

			// Cause we don't want any duplicates:
			if (string.indexOf(char) != i) // if char was used already
				continue;           // skip it this time

			var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

			for (var subPermutation of $scope.permut(remainingString))
				permutations.push(char + subPermutation)

		}
		return permutations;
	}
})
