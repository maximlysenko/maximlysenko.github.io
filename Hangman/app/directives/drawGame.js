Hangman.directive("drawGame", function() {
    return {
        restrict: 'A',
        template: '<canvas width="350" height="350" id="canvas"></canvas>',
        link: function(scope, el, attr) {
            var draw = document.getElementById('canvas'),
                context = draw.getContext('2d');

            // bot horizontal
            context.fillRect(10, 320, 280, 6);
            // vertical
            context.fillRect(50, 10, 6, 310);
            // top horizontal
            context.fillRect(35, 25, 170, 6);
            // small vertical
            context.fillRect(205, 25, 6, 30);
            context.save();
            // rotated bot left
            context.translate(50, 282);
            context.rotate(40 * Math.PI / 180);
            context.fillRect(0, 0, 6, 50);
            context.restore();
            context.save();
            // rotated bot right
            context.translate(52, 287);
            context.rotate(-40 * Math.PI / 180);
            context.fillRect(0,0,6,50);
            context.restore();
            context.save();
            // rotated top
            context.translate(95, 13);
            context.rotate(45 * Math.PI / 180);
            context.fillRect(0,0,6,85);
            context.restore();
        }
    }
});