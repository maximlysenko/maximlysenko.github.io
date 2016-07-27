Hangman.factory("canvasControl", function() {
    var draw = document.getElementById('canvas'),
        ctx = draw.getContext('2d');

    return {
        clearRect: function() {
            ctx.clearRect(150,55,250,250);
        },
        drawPart: function(tries) {
            if (draw.getContext) {

                ctx.beginPath();
                ctx.lineWidth = 4;
                ctx.save();

                switch (tries) {
                    // head
                    case(6):
                        ctx.arc(208, 87, 30, 0, 2*Math.PI);
                        ctx.stroke();
                        break;
                    // body
                    case(5):
                        ctx.rect(208, 117, 0, 100);
                        ctx.stroke();
                        break;
                    // left arm
                    case(4):
                        ctx.translate(208, 135);
                        ctx.rotate(40 * Math.PI / 180);
                        ctx.rect(0, 0, 0, 70);
                        ctx.stroke();
                        ctx.restore();
                        break;
                    //right arm
                    case(3):
                        ctx.translate(208, 135);
                        ctx.rotate(-40 * Math.PI / 180);
                        ctx.rect(0, 0, 0, 70);
                        ctx.stroke();
                        ctx.restore();
                        break;
                    // left leg
                    case(2):
                        ctx.translate(208, 213);
                        ctx.rotate(40 * Math.PI / 180);
                        ctx.rect(0, 0, 0, 80);
                        ctx.stroke();
                        ctx.restore();
                        break;
                    // right leg
                    case(1):
                        ctx.translate(208, 213);
                        ctx.rotate(-40 * Math.PI / 180);
                        ctx.rect(0, 0, 0, 80);
                        ctx.stroke();
                        ctx.restore();
                        break;
                    default:
                        console.error('error');
                        break;
                }
            }
        }
    }
});