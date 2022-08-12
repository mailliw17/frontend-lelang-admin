import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

// created by jason
export interface Organizer {
  id: string,
  name: string,
  industry: string,
  address: string,
  phoneNum: string,
  fax: string,
  date_created: string,
  created_by: string,
  date_updated: string,
  updated_by: string,
  date_deleted: string,
  deleted_by: string,
  is_active: boolean

}

const READ_ORGANIZER_API = 'http://10.1.137.50:8762/getAll'
const DELETE_ORGANIZER_API = 'http://10.1.137.50:8762/delete/'

@Component({
  selector: 'app-penyelenggara-home',
  templateUrl: './penyelenggara-home.component.html',
  styleUrls: ['./penyelenggara-home.component.css']
})
export class PenyelenggaraHomeComponent implements OnInit {

  // token for get anything data
  httpOptions_base = {
    headers: new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.token.getToken()}`
    )
  }

  displayedColumns: string[] = [ 'name', 'address', 'phoneNum', 'fax', 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //DI 
  constructor(
    private http: HttpClient,
    private router: Router,
    private token: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.getAllData()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllData() {
    this.http.get<any>(READ_ORGANIZER_API, this.httpOptions_base)
      .subscribe(isi => {
        this.dataSource = new MatTableDataSource(isi.content)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
      },
        err => {
          alert("Error fetching data")
         
        }
      )
  }

  deleteOrganizer(id: string) {
    this.http.delete<any>(DELETE_ORGANIZER_API + id, this.httpOptions_base)
      .subscribe(isi => {
       
        this.getAllData()
      },
        err => {
          alert("Error while deleting")
          
        }
      )
  }

}
