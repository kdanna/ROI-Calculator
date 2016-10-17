var app = angular.module("myApp", []);


app.controller('mainController', function($scope) {
	$scope.itemDescription = "";
	$scope.addRevenue = addRevenue;
	$scope.revDesc = [];

	function addRevenue() {
		console.log('made it to the addRev');
   		if ($scope.itemDescription){
   			$scope.revDesc.push(this.itemDescription);  
      	}
      	$scope.itemDescription="";
      	console.log($scope.revDesc);
     }

 	
});