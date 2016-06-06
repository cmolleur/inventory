angular
  .module('mainController', ['itemsAPI'])
  .controller('MainController', ['$scope', '$http', 'itemsAPI',
    function( $scope, $http, itemsAPI ) {

      $scope.items = [];


// *******************
    $scope.getallData = function(){
      $http.get('/api/items').then(function(response){
        $scope.items = response.data.items;
        console.log("All items:", response);
      });
    }
    $scope.getallData();


    $scope.postNewItem = function(){
      var newItem = {
        item: {
          name: $scope.item.name,
          details: $scope.item.details,
          amount: $scope.item.amount
        }
      }
      $http.post('/api/items', newItem).then(function(response){
        $scope.items.push(response.data.item);
        $scope.getallData();
      });

    }

    $scope.reloadPage = function(){$window.location.reload();}

    $scope.deleteItem = function(item){
      $scope.getallData();
      var itemId = item._id;
      $http.delete('/api/items/' + itemId)
      .success(function (itemId, status, headers){
      }).then(function(){
        $scope.reloadPage();
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

    // $scope.deleteItem = function(item){
    //   itemsAPI.remove(item._id).then(function(response){
    //     if (response.status == 203) {
    //       $scope.items = $scope.items.filter(function(i){
    //         return i._id != idea._id;
    //       });
    //     }
    //   });
    // }

    }]);
