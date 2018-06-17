import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { RootlistDataSource } from './rootlist-datasource';
import { Root } from '../../../models/Root';

@Component({
  selector: 'app-root-list',
  templateUrl: './rootlist.component.html',
  styleUrls: ['./rootlist.component.css']
})
export class RootlistComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: RootlistDataSource;

  @Input()
  data: Root[];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'rootName'];

  ngOnInit() {
    this.dataSource = new RootlistDataSource(this.paginator, this.sort, this.data);
    console.log(this.data);
  }
}
