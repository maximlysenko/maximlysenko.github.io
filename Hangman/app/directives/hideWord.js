Hangman.directive("hideWord", function() {
    return {
        restrict: 'A',
        link: function(scope, el, attr) {
            scope.$watch("control.word", function() {
                var text = el.html().split('');

                for (var i = 0; i < text.length; i++) {
                    text[i] = '_';
                }

                el.html(text.join(''));
            });
        }
    }
});