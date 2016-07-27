Hangman.directive("button", function() {
    return {
        restrict: 'A',
        link: function(scope, el, attr) {
            el.bind('mousedown', function() {
                this.classList.add('clicked');
            });
            el.bind('mouseup', function() {
                this.classList.remove('clicked');
                scope.control.currentLetter = this.innerText;
                scope.$apply();
            });
        }
    }
});