import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/services';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  title: any = 'Root';
  public roots: any;
  constructor(private _rootService: ApiserviceService) {
  }

  ngOnInit() {
    this.setAllRoots();
    console.log(this.roots);
    this.roots = this.roots.map(function (root) {
    });
  }

  setAllRoots() {
    this._rootService.getAllRoots()
      .subscribe(data => this.roots = data);
  }
}
