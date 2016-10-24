angular.module('friendsList').controller('mainCtrl', function($scope){
	$scope.friends = ["John", "Jane", "Moe", "Bob"];
	$scope.addFriend = function(name){
		$scope.friends.push(name);
	}
});