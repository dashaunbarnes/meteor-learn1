import {Component, View} from 'angular2/core';

import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'app'
})
@View({
  //  template: 'Hello World!'
  templateUrl: 'client/mathman.html'
})

export class AppComponent {

   getRandomInt = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  public operation: string = "+";
  public maxRandom: number = 10;
  public minRandom: number = 1;
  public number1: number = this.getRandomInt(this.minRandom,this.maxRandom);
  public number2: number = this.getRandomInt(this.minRandom,this.maxRandom);


  public answer: number;
  public poopAnswer: number;
  public feedback: string;



  numberofquestions: number = 0;
  numberCorrect: number = 0;
  numberIncorrect: number = 0;
  TotalQuestions: number = 1;


  constructor(){

    if (this.number1 < this.number2) {
      var temp: number = this.number2;

      this.number1 = this.number2;
      this.number2 = temp;
    }
  }


  getRealAnswer () : number {
    switch(this.operation) {
      case "+":
        console.log('Checking for addition');
        return this.number1 + this.number2;
        //break;
      case "*":
        console.log('Checking for multipllcation');
        return this.number1 * this.number2;

        case "/":
          console.log('Checking for multipllcation');
          return this.number1 / this.number2;
        case "-":
          console.log('Checking for multipllcation');
          return this.number1 - this.number2;      //break;
      default:
        console.log('Default');
        break;
    }
    return 0;
  }
  checkAnswer() {

    console.log(this.getRealAnswer());
    //('You entered ' + this.poopAnswer);


    if (this.getRealAnswer() == this.poopAnswer) {
        //alert('Correct');
        this.feedback = "nice job keep it up.  Yes the answer is " + this.getRealAnswer();
        this.maxRandom += 2;
        this.minRandom += 1;
        this.number1 = this.getRandomInt(this.minRandom,this.maxRandom);
        this.number2 = this.getRandomInt(this.minRandom,this.maxRandom);

        if (this.operation == "/") {
          this.number1 = this.number2 * this.getRandomInt(this.minRandom,this.maxRandom);
        }
        if (this.number1 < this.number2) {
          var temp: number = this.number2;

          this.number1 = this.number2;
          this.number2 = temp;
        }

        this

        this.numberCorrect = this.numberCorrect + 1;
        this.numberofquestions+1;

/*

        if (this.number1 * this.number2 == this.poopAnswer)
        {
          number1: number = this.getRandomInt(1,10);
          Number2 : number = this.getRandomInt(1,10);
        }*/
    }

    else {
      //alert('Incorrect');
      this.feedback = "try again";
      this.numberIncorrect+=1;

      this.maxRandom -= 1;
      this.minRandom -= 1;

    }
}

}

bootstrap(AppComponent);
