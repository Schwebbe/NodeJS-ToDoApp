 var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
console.log("Controller works");
    

$http.get('/').then(function(data){
    console.log("I got the data I requested!");
    $scope.customers = data;
}); 
    
$http.get('/customers').then(function(data){
    console.log("Customers !!!!!");
    $scope.customers = data;
}); 

    
$scope.addContact = function(){
    console.log($scope.addContact);
};
                 
}]);

