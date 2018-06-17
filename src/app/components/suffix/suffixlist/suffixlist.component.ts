import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SuffixlistDataSource } from './suffixlist-datasource';

@Component({
  selector: 'app-suffix-list',
  templateUrl: './suffixlist.component.html',
  styleUrls: ['./suffixlist.component.css']
})
export class SuffixlistComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SuffixlistDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new SuffixlistDataSource(this.paginator, this.sort);
  }
}
