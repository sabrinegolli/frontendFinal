import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SetupDisplayData } from '../../../models/SetupDisplayData';
import { SetupService } from '../../../services/setup.service';
import { SetupManagmentComponent } from '../setup-managment/setup-managment.component';
import { TypeSetupService } from '../../../services/type-setup.service';

@Component({
  selector: 'app-setup-list',
  templateUrl: './setup-list.component.html',
  styleUrl: './setup-list.component.scss'
})

export class SetupListComponent implements OnInit {
  setups: SetupDisplayData[] = [];
  selectedRowIndex: number = -1;
  totalRecords: number = 0;
  searchText: string = '';
  page: number = 0;
  typeSetup:any;
  pageSize: number = 2;
  @Output() setupSelected = new EventEmitter<SetupDisplayData>();
  constructor(private setupService: SetupService, private typeSetupService:TypeSetupService, private setupManagment: SetupManagmentComponent ) {}
  ngOnInit() : void {
    this.fetchSetups();
    this.setupManagment.setupActionEvent.subscribe(() => {
      this.fetchSetups();
    });
  
  }

  
  fetchSetups(): void {
    this.setupService.getSetups().subscribe(
      (data: any) => {
        this.setups = data;
        console.log('setup works',this.setups)
        this.totalRecords = data.length; // Assuming data comes as an array
      },
      (error) => {
        console.error('Error fetching setups:', error);}
    );
  }
  
  selectSetup(setup: SetupDisplayData, index: number): void {
    this.selectedRowIndex = index;
    this.setupSelected.emit(setup);
    console.log("selected agence",setup)
  }

  cancelSelection(): void {
    this.selectedRowIndex = -1; 
  }
  getPages(): number[] {
  const totalPages = Math.ceil(this.totalRecords / this.pageSize);
  return Array(totalPages).fill(0).map((x, i) => i + 1);
}

  onPageChange(event: any): void {
    this.page = event.page;
    this.pageSize = event.rows;
    this.fetchSetups();
  }
  getFirstEntryNumber(): number {
    return this.page * this.pageSize + 1;
  }
  getLastEntryNumber(): number {
    return Math.min((this.page + 1) * this.pageSize, this.totalRecords);
  }
}