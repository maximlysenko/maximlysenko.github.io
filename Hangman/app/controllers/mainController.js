Hangman.controller('mainController', function($scope, Letters, Words, canvasControl) {

    $scope.control = {
        currentLetter: '',
        triesLeft: 6,
        word: Words.getRandomWord(),
        wordArray: [],
        wrongLetters: [],
        lose: false,
        win: false
    };

    $scope.letters = Letters.letters;

    $scope.startNewGame = function() {
        var newWord = Words.getRandomWord();
        while (newWord === $scope.control.word) {
            newWord = Words.getRandomWord();
        }
        $scope.control.word = newWord;
        resetGame();
        canvasControl.clearRect();
    };

    for (var j = 0; j < $scope.control.word.length; j++) {
        $scope.control.wordArray.push('_');
    }

    $scope.$watch("control.currentLetter", function(newValue, oldValue) {
        var count = 0;
        if (newValue !== oldValue) {
            for (var i = 0; i < $scope.control.word.split('').length; i++) {
                if ($scope.control.word.split('')[i].toLowerCase() === newValue.toLowerCase()) {
                    $scope.control.wordArray[i] = newValue.toUpperCase();
                } else {
                    count++;
                }
            }
            if (count === $scope.control.word.length) {
                if ($scope.control.triesLeft >= 1) {
                    canvasControl.drawPart($scope.control.triesLeft);
                    $scope.control.triesLeft--;
                    if ($scope.control.wrongLetters.indexOf(newValue.toUpperCase()) == -1)
                        $scope.control.wrongLetters.push(newValue.toUpperCase());
                    if ($scope.control.triesLeft < 1)
                        $scope.control.lose = true;
                }
            }
            if ($scope.control.wordArray.indexOf('_') === -1) {
                $scope.control.win = true;
            }
        }
    });

    function resetGame() {
        $scope.control.wordArray = [];
        $scope.control.wrongLetters = [];
        $scope.control.triesLeft = 6;
        $scope.control.lose = false;
        $scope.control.win = false;
        for (var i = 0; i < $scope.control.word.length; i++) {
            $scope.control.wordArray[i] = '_';
        }
    }
});