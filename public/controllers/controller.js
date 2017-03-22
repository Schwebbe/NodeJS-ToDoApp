var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
  console.log("Controller works");



  $http.get('/').then(function (data) {
    //console.log("I got the data I requested!");
    //$scope.todotable = data.todotable;
  });


  $scope.addItem = function (form) {
    console.log(form.todo.title);
    $http.post('/addData', form.todo).then(function successCallback(response) {
      console.log("add data to database");
    }, function errorCallback(response) {
      console.log("failed to add data");
      
    });

  };
    $scope.deleteItem = function (id) {
        console.log(id);
        $http.get('/delData?id='+ id).then(function successCallback(response) {
            console.log("deleted data from database");
        }, function errorCallback(response) {
            console.log("failed to add data");

        });

    };
    $scope.editItem = function (form) {
        console.log("hej");
        $http.get('/editData?id='+ form.listItem.id + "&title=" + form.listItem.title + "&text=" + form.listItem.text).then(function successCallback(response) {
            console.log("Data has been updated");
        }, function errorCallback(response) {
            console.log("failed to add data");

        });

    };

  $http.get('http://localhost:3000/todotable').then(function (data) {
    $scope.list = data.data
    console.log($scope.list);
  });

  /* $(document).ready(function(){
     $("deleteItem").on("click", function(){
       $(this).closest("td").remove(); 
     });
   }); */



}]);



function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("stylesheet1");
    var style2 = document.getElementById("stylesheet2");
    var style3 = document.getElementById("stylesheet3");
    var style4 = document.getElementById("stylesheet4");

    style1.onclick = function () { swapStyleSheet("style.css") };
    style2.onclick = function () { swapStyleSheet("red.css"); };
    style3.onclick = function () { swapStyleSheet("black.css") };
    style4.onclick = function () { swapStyleSheet("pruple.css"); };
}
window.onload = initate;