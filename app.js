
var app=angular.module("application",['ngRoute']);
app.controller("myController",function($http,$scope){
	 $http.get("skills.json").then(function(response) {
	        $scope.myData = response.data;	        
	    });
	 $http.get("projects.json").then(function(response) {	
	        $scope.myProjects = response.data;	        
	    });
	$scope.message="hi there from controller";
	$scope.check=true;
	$scope.hidecontainer=function(){
		$scope.check=false;
	};
	$scope.about=function(){
		$scope.check=true;
	};
	
});
app.config(function($routeProvider){
	$routeProvider
	.when("/resume",{templateUrl:'resume.html'})
	.when("/project",{templateUrl:'project.html'})
	.when("/skills",{templateUrl:'skills.html'})
	.when("/experience",{templateUrl:'exp.html'})
	
})

