app.factory('localStorage', ['$window', function($window){
    var save = function(key, value){
        $window.localStorage.setItem(key, angular.toJson(value));
    };

    var read = function(key){
        var json = $window.localStorage.getItem(key);
        return angular.fromJson(json);
    };

    return {
        save: save,
        read: read
    }
}]);