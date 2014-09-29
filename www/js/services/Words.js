app.factory("Words", function($resource, $q) {
    var words = null;
    var all = function () {
        if (!words) {
            words = $resource('api/words.json').query();
        }
        return words;
    };

    return {
        all: all
    }
});