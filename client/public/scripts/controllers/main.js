angular
  .module('mainController', ['itemsAPI'])
  .controller('MainController', ['$scope', '$http', 'itemsAPI',
    function( $scope, $http, itemsAPI ) {

      $scope.items = [];


// *******************
    $scope.getallData = function(){
      $http.get('/api/items').then(function(response){
        $scope.items = response.data.items;
        console.log("All items:", response.data.items);
      });
    }
    $scope.getallData();


    $scope.postNewItem = function(){
      var newItem = {
        item: {
          name: $scope.item.name,
          details: $scope.item.ingredients,
          amount: $scope.item.image
        }
      }
      $http.post('/api/items', newItem).then(function(response){
        $scope.items.push(response.data.item);
        console.log("Item pushed", response.data);
      });

    }
    // $scope.createItem = function(item){
    //
    //   var newItem = {
    //     item : {
    //       name: item.name,
    //       details: item.details,
    //       amount: item.amount
    //     }
    //   }
    //
    //   itemsAPI.create(newItem).then(function(response){
    //     $scope.items.push(response.data);
    //     console.log("Data has been pushed!");
    //     console.log(response);
    //   });
    //
    //   itemsAPI.getAll().then(function(response){
    //     $scope.items = response.data.items;
    //   });
    //
    // }

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
