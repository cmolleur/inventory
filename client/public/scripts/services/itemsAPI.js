angular
  .module('itemsAPI', [])
  .factory('itemsAPI', ['$http',
    function($http) {
      return {
        getAll: function(){
          return $http.get('/items');
        },

        create: function(newItem){
          return $http.post('/items', newItem);
        },

        remove: function(id){
          return $http.delete('/items/' + id);
        }

      }
    }])
