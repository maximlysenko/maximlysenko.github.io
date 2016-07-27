Hangman.factory("Words", function() {
    var Words = {};

    Words.words = ['HTML', 'CSS', 'JavaScript', 'Angular', 'Backbone', 'Ember', 'React'];

    Words.getRandomWord = function() {
        return this.words[Math.floor(Math.random() * this.words.length )];
    };

    return Words;
});