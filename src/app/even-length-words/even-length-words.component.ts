import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-length-words',
  templateUrl: './even-length-words.component.html',
  styleUrls: ['./even-length-words.component.css']
})
export class EvenLengthWordsComponent {
 // @Input() words: string[] = [];
//  inputWord: string = '';
//  evenWords: string[] = [];
//  @Input() previousEvenWords: string[] = [];
//  @Input() words: string[] = [];

//  addWord() {
//    if (this.inputWord.length % 2 === 0) {
//      this.evenWords.push(this.inputWord);
//    }
//    this.inputWord = '';
//  }

@Input() words: string[] = [];

 
}
