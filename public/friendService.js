angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      return $http({
          url: "/api/login",
          method: 'POST',
          data: user
      })
    },

    getFriends: function() {

    	return $http({
        url: "/api/profiles",
        method: 'GET'
      }).then(function(response) {
        console.log(response.data);
        return response.data
      })
    }
  }
});
