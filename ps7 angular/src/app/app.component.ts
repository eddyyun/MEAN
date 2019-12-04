import { Component } from '@angular/core';
import { QUOTE } from './models/quoteModel';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS7 Simple Angular App';
  quotes: QUOTE[];
  message: object;
  private selectedQuote: QUOTE[] = null;

  receiveMessage($event) {
    // form passes value on event, this info could be used for specific get request
    this.message = $event;
    console.log("Request Initiated!");
    this.getQuotes();
  }

  constructor(private quoteService: ConfigService) { }

  getQuotes(): void {
    this.quoteService.getQuotes()
      .subscribe(quotes => {
        this.quotes = quotes;
        // console.log(`Contacts: ${this.quotes}`);
        // console.log(this.quotes);
        this.selectedQuote = this.quotes;
      });
  }
}
