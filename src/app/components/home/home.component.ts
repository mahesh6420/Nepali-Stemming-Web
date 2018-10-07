import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FinalResult } from '../../models/FinalResult';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: any = 'Home';
  myForm: FormGroup;
  spinner: any = false;
  public result: any;
  public startTime: any;
  public endTime: any;
  public pyResult: any;
  public finalResult: any;
  public mappedResult: any;
  resultTable: any;
  displayedColumns = ['posTag', 'word', 'root', 'suffix'];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      inputText: new FormControl()
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.spinner = true;
      this.http.post('http://localhost:5001', { 'inputText': this.myForm.value.inputText })
      .subscribe(data => {
        this.result = data;
        this.startTime = this.result.startTime;
        this.endTime = this.result.endTime;
        this.pyResult = this.result.pyResult;

        // this.finalResult = [<FinalResult>JSON.parse(this.pyResult)];
        console.log(this.pyResult);
        this.spinner = false;
      });
    }
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

}
