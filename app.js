var app = angular.module("myApp", []);


app.controller('mainCtrl', function($scope){
	$scope.itemDescription = '';
	$scope.revDescs = [];
	$scope.oneTimeRevs = [];
	$scope.monthlyRevs = [];

	$scope.addRevenue = function(){
   		if ($scope.itemDescription){
   			$scope.revDescs.push(this.itemDescription);  
      	}
      	if ($scope.oneTimeRev){
      		$scope.oneTimeRevs.push(this.oneTimeRev);
      	}
      	if ($scope.monthlyRev){
      		$scope.monthlyRevs.push(this.monthlyRev);
      	}
      	$scope.itemDescription="";
      	$scope.oneTimeRev="";
      	$scope.monthlyRev="";
	};

});