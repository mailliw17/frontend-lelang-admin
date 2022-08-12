import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BranchDataService } from 'src/app/_services/branch-data.service';

export interface Branch {
  id: string,
  name: string,
  type: string,
  address: string,
  province: string,
  initial: string,
  seller: string,
  dateCreated: string,
  createdBy: string,
  dateUpdated: string,
  updatedBy: string,
  dateDeleted: string,
  deletedBy: string,
  isActive: boolean
}


@Component({
  selector: 'app-cabang-penjual-home',
  templateUrl: './cabang-penjual-home.component.html',
  styleUrls: ['./cabang-penjual-home.component.css']
})
export class CabangPenjualHomeComponent implements OnInit {
  branches: Branch[] = [];
  displayedColumns: string[] = [ 'name', 'address', 'initial', 'seller', 'province', 'type', 'action'];
  dataSource = new MatTableDataSource(this.branches);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //DI 
  constructor(private branchserv: BranchDataService, private router:Router) {
  }

 

  deleteBranch(id: string) {
    this.branchserv.deleteBranch(id).subscribe(()=>{
     this.getBranch()
    })
  }

  ngOnInit(): void {
    this.getBranch();
    
  }

  getBranch() : void {
    this.branchserv.getBranch().subscribe(branch => {
      var y: any = branch
      this.branches = y.content
      this.branches.forEach((branch)=>{
        this.branchserv.getSellerId(branch.seller).subscribe(sel=>{
          branch.seller = sel.name
         
        },err=>{
          branch.seller = 'PENJUAL DELETED'
        })
      })
      this.dataSource = new MatTableDataSource(this.branches)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
