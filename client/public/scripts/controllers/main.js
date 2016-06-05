angular
  .module('mainController', ['itemsAPI'])
  .controller('MainController', ['$scope', '$http', 'itemsAPI',
    function( $scope, $http, itemsAPI ) {

      $scope.items = [];


      $scope.createItem = function(){
        var newItem = {
          item : {
            name: $scope.name,
            details: $scope.details,
            amount: $scope.amount
          }
        }
        $http.post('/api/items', newItem).then(function(response){
          console.log(response);
          $scope.items.push(response.data.item);
        });

      }


      $scope.removeItem = function(item){

        itemsAPI.remove(item._id).then(function(response){
          if (response.status == 203) {
            $scope.items = $scope.items.filter(function(i){
              return i._id != item._id;
            });
          }
        });
      }


      // $scope.getallItems = function(){
      //   $http.get('/api/items').then(function(response){
      //     $scope.items = response.data.items;
      //   });
      // }
      // $scope.getallItems();
      //
      //
      //
      // $scope.getItemData = function(){
      //   var newItem = {
      //     item: {
      //       name: $scope.item.name,
      //       details: $scope.item.details,
      //       amount: $scope.item.amount
      //     }
      //   }
      //   $http.post('/api/items', newItem).then(function(response){
      //     $scope.items.push(response.data.item);
      //   });
      //
      // }
      //
      // $scope.deleteItem = function(item){
      //   var itemId = item.id;
      //   $http.delete('/api/items/' + drinkId)
      //   .success(function (drinkId,status,headers){
      //     console.log("Drink Deleted");
      //   }).then(function(){
      //     $scope.getAllDrinks();
      //   });
      // }

    }]);
