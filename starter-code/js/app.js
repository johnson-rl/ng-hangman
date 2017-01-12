console.log('app.js loaded!');

// initialize the application
angular
  .module("hangmanApp", [])
  .controller("HangmanController", HangmanController);

  function HangmanController () {
    var vm = this;
    vm.guessedLetter = ''
    vm.game = new HangmanGame('elephant');
    console.log(vm.game)
    vm.guessTheLetter = function (){
      vm.game.guess(vm.guessedLetter)
      vm.guessedLetter = ''
    }
    vm.one=true
  }
