import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first_project';

  constructor() { }

  words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
    "kiwi", "lemon", "mango", "nectarine", "orange", "peach", "quince", "raspberry",
    "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yam", "zucchini",
    "abacus", "bicycle", "cat", "dog", "elephant", "frog", "giraffe", "house", "igloo",
    "jacket", "kite", "lion", "mountain", "notebook", "octopus", "penguin", "quilt",
    "robot", "sunflower", "train", "umbrella", "vulture", "whale", "xylophone", "yacht",
    "zebra", "airplane", "book", "camera", "drum", "engine", "flower", "glove", "hat",
    "insect", "jungle", "key", "lamp", "moon", "notebook", "orange", "parrot", "queen",
    "rose", "star", "tree", "unicorn", "violin", "windmill", "xylophone", "yellow", "zebra",
    "ant", "ball", "candle", "dolphin", "egg", "fire", "gift", "honey", "ice", "juice",
    "kite", "lemon", "mango", "nest", "ocean", "pencil", "quill", "ring", "sun", "tent"]

  index = Math.floor(Math.random() * this.words.length);
  word = this.words[this.index]
  typeWords = "";
  scoreValue = 0;
  timeCountdown = 60;

  buttons = [
    {
      top: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    },
    {
      middle: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    },
    {
      bottom: ["Z", "X", "C", "V", "B", "N", "M"],
    },
  ];

  startGame() {
    this.scoreValue = 0;
    this.timeCountdown = 60;
    this.randomWord();
    this.timerHandle();
    this.scoreHandle();
  }

  timerHandle() {
    let timeInterval = setInterval(() => {
      this.timeCountdown--;
      if (this.timeCountdown == 0) {
        clearInterval(timeInterval);
        alert("Game Over! Your score is " + this.scoreValue)
      }
    }
      , 1000);
  }

  randomWord() {
    this.index = Math.floor(Math.random() * this.words.length);
    this.word = this.words[this.index];
  }

  checkWord() {
    if (this.typeWords == this.words[this.index]) {
      this.scoreValue++;
      this.randomWord();
      this.typeWords = "";
    } else {
      this.scoreHandle();
      this.randomWord();
      this.typeWords = "";
    }
  }

  scoreHandle() {
    if (this.scoreValue > 0) {
      this.scoreValue--;
    } else {
      this.scoreValue = 0;
    }
  }

  @HostListener('document:keypress', ['$event'])
  enterHandler(event: KeyboardEvent) {
    if (event.key == "Enter") {
      this.checkWord();
    }

  }
}
