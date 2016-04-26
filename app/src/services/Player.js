//foots service


'use strict';

app.factory('Foots', ['$resource', function($resource){
   return $resource('/api/foots/:id', {id:'@_id'},
     {
       'update': {method: 'PUT'}
     }
   );
}]);
