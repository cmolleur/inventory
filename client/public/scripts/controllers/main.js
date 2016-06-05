angular
  .module('mainController', ['itemsAPI'])
  .controller('MainController', ['$scope', '$http', 'itemsAPI',
    function( $scope, $http, itemsAPI ) {

      $scope.items = [];


// *******************

    $scope.createItem = function(item){

      var newItem = {
        item : {
          name: item.name,
          details: item.details,
          amount: item.amount
        }
      }

      itemsAPI.create(newItem).then(function(response){
        $scope.items.push(response.data);
        console.log("Data has been pushed!");
      });

      itemsAPI.getAll().then(function(response){
        $scope.items = response.data.items;
      });

    }

    $scope.deleteItem = function(idea){
      itemsAPI.remove(item._id).then(function(response){
        console.log("Removed");
        if (response.status == 203) {
          $scope.items = $scope.items.filter(function(i){
            return i._id != idea._id;
          });

        }
      });
    }

    }]);
