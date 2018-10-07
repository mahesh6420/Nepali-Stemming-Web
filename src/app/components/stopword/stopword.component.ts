import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/services';

@Component({
  selector: 'app-stopword',
  templateUrl: './stopword.component.html',
  styleUrls: ['./stopword.component.scss']
})
export class StopwordComponent implements OnInit {

  title: any = 'Stopword';
  public stopWords: any;
  public displayedColumns = ['id', 'stopWordName'];
  constructor(private _suffixService: ApiserviceService) {
  }

  ngOnInit() {
    this.getAllStopWords();

  }

  getAllStopWords() {
    this._suffixService.getAllStopWords()
      .subscribe(data => {
        this.stopWords = data.map(function (stopWord) {
          return stopWord;
        });
      });
  }

}
