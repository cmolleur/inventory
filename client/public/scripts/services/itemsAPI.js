angular
  .module('itemsAPI', [])
  .factory('itemsAPI', ['$http',
    function($http) {
      return {
        getAll: function(){
          return $http.get('/api/items');
        },

        create: function(newItem){
          return $http.post('/api/items', newItem);
        },

        remove: function(id){
          return $http.delete('/items/' + id);
        }

      }
    }])
