import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/services';

@Component({
  selector: 'app-suffix',
  templateUrl: './suffix.component.html',
  styleUrls: ['./suffix.component.scss']
})
export class SuffixComponent implements OnInit {
  title: any = 'Suffix';
  suffixes: any;
  displayedColumns = ['id', 'suffixName'];
  constructor(private _suffixService: ApiserviceService) {
  }

  ngOnInit() {
    this.getAllSuffixes();
  }

  getAllSuffixes() {
    this._suffixService.getAllSuffixes().subscribe(data => {
    this.suffixes = data.map(function(suffix) {
      return suffix;
    });
   });
  }
}

