import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/services';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  title: any = 'Root';
  public displayedColumns = ['id', 'rootName'];
  public roots: any;

  constructor(private _rootService: ApiserviceService) {
  }

  ngOnInit() {
    this.getAllRoots();
  }

  getAllRoots() {
    this._rootService.getAllRoots()
      .subscribe(data => {
        this.roots = data.map(function (root) {
          return root;
        });
      });

  }
}
