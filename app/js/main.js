var app = angular.module('userEditor', []);
var users = [
	{
		name: "Lesh Leshenko",
		email: "ssyschik@lesh.co",
		comment: ""
	},
	{
		name: "Aerendyl Wysarel",
		email: "TheMercifulGamer@gmail.com",
		comment: "Phasellus accumsan odio sit amet elit luctus luctus."
	},
	{
		name: "Goren Glynmenor",
		email: "TheKindheartedGamer@gmail.com",
		comment: "Morbi sit amet velit sed lorem pretium pellentesque."
	},
	{
		name: "Aimar Falee",
		email: "TheFeignedLoser@gmail.com",
		comment: "Duis dignissim metus dignissim felis convallis tempus."
	},
];
	app.controller('TabController', function($scope) {
		$scope.users = users;
		$scope.current = {};
		$scope.previous = {};

		$scope.deleteUser = function(tab) {
			if (confirm('Вы действительно хотите удалить пользователя '+ tab.name +'?')) {
				$scope.users.splice($scope.users.indexOf(tab),1);
				$scope.current = $scope.previous;
			}
		};

		$scope.addUser = function() {

		};

		$scope.setTab = function(tab) {
			if ($scope.previous != $scope.current)
				$scope.previous = $scope.current;
			$scope.current = tab;
		};

		$scope.isActive = function(tab) {
			return $scope.current === tab
		};
	});
