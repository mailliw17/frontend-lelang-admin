import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

const READ_OPERATOR_API = 'http://10.1.137.50:8760/admin/v1/getAll?role=operator'
const DELETE_OPERATOR_API = 'http://10.1.137.50:8760/admin/v1/delete/'
const GET_OPERATOR_BYID_API = 'http://10.1.137.50:8080/auth/user/v1/'

@Component({
  selector: 'app-operator-home',
  templateUrl: './operator-home.component.html',
  styleUrls: ['./operator-home.component.css']
})
export class OperatorHomeComponent implements OnInit {

  // token for get anything data
  httpOptions_base = {
    headers: new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.token.getToken()}`
    )
  }

  displayedColumns: string[] = [ 'nama', 'username', 'email', 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
    this.http.get<any>(READ_OPERATOR_API, this.httpOptions_base)
      .subscribe(isi => {
        this.dataSource = new MatTableDataSource(isi.content)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
      },
        err => {
          alert(err.error.message)
          console.log(err)
        }
      )
  }

  deleteOperator(id: string) {
    this.http.delete<any>(DELETE_OPERATOR_API + id, this.httpOptions_base)
      .subscribe(isi => {
        
        this.getAllData()
      },
        err => {
          alert(err.error.message)
          console.log(err)
        }
      )
  }

}
