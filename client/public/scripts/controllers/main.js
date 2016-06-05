angular
  .module('mainController', ['itemsAPI'])
  .controller('MainController', ['$scope', '$http', 'itemsAPI',
    function( $scope, $http, itemsAPI ) {

      $scope.items = [];
      // $scope.itemData = '';

      $scope.createItem = function(post){
        var newItem = {
          item : {
            name: post.name,
            details: post.details,
            amount: post.amount
          }
        }

        itemsAPI.create(newItem).then(function(response){
          console.log(response);
          $scope.items.push(response.data);
        })

        itemsAPI.getAll().then(function(response){
          $scope.items = response.data;
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

    }]);
