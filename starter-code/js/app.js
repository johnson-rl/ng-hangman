console.log('app.js loaded!');

// initialize the application
angular
  .module("hangmanApp", [])
  .controller("HangmanController", HangmanController);

var wordArray = [
  'elephant',
  'giraffe',
  'ninjakitty',
  'monkey',
  'zebra',
  'nakedmolerat'
];

  function HangmanController () {
    var vm = this;
    vm.guessedLetter = '';
    vm.win = 0;
    vm.loss = 0;
    vm.startGame = function (){
      var wordChoice = Math.round(Math.random()*5);
      vm.game = new HangmanGame(wordArray[wordChoice]);
    };
    vm.guessTheLetter = function (){
      vm.game.guess(vm.guessedLetter);
      vm.guessedLetter = '';
      if(vm.game.gameWon===true){vm.win++};
      if(vm.game.gameWon===false){
        vm.loss++;
        vm.game.gameWon = null;
      };
    }
    vm.startGame();
  }
