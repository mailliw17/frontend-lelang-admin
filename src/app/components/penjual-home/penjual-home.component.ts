import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LelangDataService } from 'src/app/_services/lelang-data.service';
import { PenjualDataService } from 'src/app/_services/penjual-data.service';

export interface Seller {
  id: string,
  name: string,
  industry: string,
  address: string,
  phoneNum: string,
  fax: string,
  dateCreated: string,
  dateUpdated: string,
  updatedBy: string,
  dateDeleted: string,
  deletedBy: string,
  isActive: boolean

}



@Component({
  selector: 'app-penjual-home',
  templateUrl: './penjual-home.component.html',
  styleUrls: ['./penjual-home.component.css']
})
export class PenjualHomeComponent implements OnInit {

  sellers: Seller[] = [];
  displayedColumns: string[] = [ 'name', 'address', 'industry', 'phoneNum', 'fax', 'action'];
  dataSource = new MatTableDataSource(this.sellers);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  deleteSeller(id: string) {
    
    this.sellerserv.deleteSeller(id).subscribe(()=>{
      this.getSeller()
    })
  }
  constructor(private sellerserv:PenjualDataService, private router:Router) {
  }

  ngOnInit(): void {
    this.getSeller()
  }

  getSeller() : void {
    this.sellerserv.getSeller().subscribe(seller => {
      var x: any = seller
      this.sellers = x.content
      this.dataSource = new MatTableDataSource(this.sellers)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log(this.sellers)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
