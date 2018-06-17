import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { StopwordlistDataSource } from './stopwordlist-datasource';

@Component({
  selector: 'app-stopword-list',
  templateUrl: './stopwordlist.component.html',
  styleUrls: ['./stopwordlist.component.css']
})
export class StopwordlistComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: StopwordlistDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new StopwordlistDataSource(this.paginator, this.sort);
  }
}
