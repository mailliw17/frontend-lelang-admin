import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FAQDataService } from 'src/app/_services/faqdata.service';


export interface FAQ {
  id: string,
  question: string,
  answer: string,
  dateCreated: string,
  createdBy: string,
  dateUpdated: string,
  updatedBy: string,
  dateDeleted: string,
  deletedBy: string,
  isActive: boolean
}



@Component({
  selector: 'app-faq-home',
  templateUrl: './faq-home.component.html',
  styleUrls: ['./faq-home.component.css']
})
export class FaqHomeComponent implements OnInit {
  faq_array: FAQ[] = [];
  displayedColumns: string[] = ['question', 'answer', 'action'];
  dataSource = new MatTableDataSource(this.faq_array);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private faqserv: FAQDataService ,private route:Router) { }

  deleteFAQ(id: string) {
    console.log(id)
    this.faqserv.deleteFAQ(id).subscribe(()=>{
      this.getFAQ()
    })
  }

  ngOnInit(): void {
    this.getFAQ()
  }

  getFAQ():void {
    this.faqserv.getFAQ().subscribe(arr => {
      console.log()
      var z: any = arr
      this.faq_array = z.faqs
      this.dataSource = new MatTableDataSource(this.faq_array)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
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
