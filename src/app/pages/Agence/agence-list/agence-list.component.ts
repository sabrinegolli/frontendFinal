// agence-list.component.ts
import { Component, EventEmitter, Input, OnInit, Output,ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AgenceService } from '../../../services/agence.service';
import { Agence } from '../../../models/Agence';
import { AgenceManagmentComponent } from '../agence-managment/agence-managment.component';



@Component({
  selector: 'app-agence-list',
  templateUrl: './agence-list.component.html',
  styleUrl: './agence-list.component.scss'
})


    export class AgenceListComponent implements OnInit {  
      page: number = 0;
      pageSize: number = 2;
      totalRecords: number = 0;
      searchText: string = '';
      agences: Agence[] = [];
      selectedRowIndex: number = -1;
      @Output() agenceSelected = new EventEmitter<Agence>();
    
      constructor(private agenceService: AgenceService , private agenceManagmentComponent: AgenceManagmentComponent) { }
    
      ngOnInit(): void {
        this.fetchAgences();
        this.agenceManagmentComponent.agenceActionEvent.subscribe(() => {
          this.fetchAgences();
        });
      }


    
      // fetchAgences() {
      //   this.agenceService.getAllAgences().subscribe(agences => this.agences = agences);
      // }
    
        
      fetchAgences(): void {
    this.agenceService.getAllAgences().subscribe(
      (data: any) => {
        this.agences = data; 
        console.log('fcsqfqsf',this.agences)
        this.totalRecords = data.totalElements; 
      },
      (error) => {
        console.error('Error fetching agences:', error);
      }
    );
  }
  
      selectAgence(agence: Agence, index: number) {
        this.selectedRowIndex = index;
        this.agenceSelected.emit(agence);
        console.log("selected agence",agence)
   
      }
      

cancelSelection(): void {
  this.selectedRowIndex = -1; 
}


onPageChange(event: any) {
  this.page = event.page;
  this.pageSize = event.rows;
  this. fetchAgences();
}
getPages(): number[] {
  const totalPages = Math.ceil(this.totalRecords / this.pageSize);
  return Array(totalPages).fill(0).map((x, i) => i + 1);
}

getFirstEntryNumber(): number {
  if (this.totalRecords === 0) {
    return 0;
  }
  return this.page * this.pageSize + 1;
}

getLastEntryNumber(): number {
  const lastEntryNumber = this.page * this.pageSize + this.pageSize;
  return Math.min(lastEntryNumber, this.totalRecords);
}


    }
    