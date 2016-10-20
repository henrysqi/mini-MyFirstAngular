angular.module('friendsList').controller('mainCtrl', function($scope){
	$scope.friends = ["John", "Jane", "Moe", "Schmoe"];
	$scope.addFriend = function(name){
		$scope.friends.push(name);
	}
});