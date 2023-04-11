import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Exercise';
  evenWords: string[] =[];
  oddWords: string[] = [];

  // onTextSubmitted(text: string) {
  //   const words = text.trim().split(' ');
  //   this.evenWords = words.filter(word => word.length % 2 === 0);
  //   this.oddWords = words.filter(word => word.length % 2 !== 0);
  // }

  onTextSubmitted(text: string) {
    if (text.length % 2 === 0) {
      this.evenWords.push(text);
    } else if (text.length % 2 !== 0) {
      this.oddWords.push(text);
    }
  }
}
