app.controller('mainCtrl', function($scope, Words, $element, $compile, $http, $log) {
    //$scope.allWords = Words.all();

    console.clear();

    $scope.allWords = [
        'a',
        'un',
        'bon',
        'test',
        'et',
        'une',
        'petite',
        'liste',
        'de',
        'mots'];
    $scope.words = {};
    $scope.possibleWords = [];

    // Sort words by length
    angular.forEach($scope.allWords, function(word) {
        if(!$scope.words[word.length]) {
            $scope.words[word.length] = [];
        }
        $scope.words[word.length].push(word);
    });

    $log.debug($scope.words);


    // Check predicate
    $scope.checkPredicate = function (input) {
        // Empty possible Words list
        $scope.possibleWords = [];

        // Try every word of the same size
        angular.forEach($scope.words[input.length], function(word) {
            $log.debug('Test sur les mots de ' + input.length + ' lettre(s)');

            var index = 0,
                possibleMatch = true;

            // Test every letter from word
            angular.forEach(input, function(letter) {
               $log.debug('Lettre à tester : ', letter);

                // If it does not match or we have a joker, go to the next letter
                if(!possibleMatch || letter === '*') {
                    index += 1;
                    return;
                }

                $log.debug('Tester contre : ', word[index]);

                if(letter !== word[index]) {
                    possibleMatch = false;
                }
                $log.debug('Match ?', possibleMatch);
                index += 1;
            });

            if(possibleMatch) {
                $scope.possibleWords.push(word);
            }

        });
    };
});