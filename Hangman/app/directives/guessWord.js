Hangman.directive("guessWord", function() {
    return {
        restrict: 'A',
        link: function(scope, el, attr) {
            scope.$watch("control.wordArray", function(newValue, oldValue) {
                el.html(newValue.join(''));
            }, true);
        }
    }
});