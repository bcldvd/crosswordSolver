app.factory("Words", function($http, $q) {
    var all = function () {

        var d = $q.defer();

        $http.get('api/words-fr.txt')
            .success(function(data, status, headers, config) {
                if (data && status === 200) {
                    console.log('got');
                    d.resolve(data);
                }
            });

        return d.promise;
    };

    return {
        all: all
    }
});