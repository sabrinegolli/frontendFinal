import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { UserDto } from '../../../models/UserDto';
import { ManagementUserComponent } from '../management-user/management-user.component';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})


export class UserlistComponent implements OnInit  {
  @Output() currentUserOutput = new EventEmitter<any>();
  page: number = 0;
  pageSize: number = 2;
  totalRecords: number = 0;
  users: UserDto[] = [];
  currentUser: [] =[] ; 
  searchText: string = '';

  selectedRowIndex: number = -1; 

  @Output() userSelected = new EventEmitter<UserDto>();

  constructor(private userService: UserService, private managementUserComponent: ManagementUserComponent) { }

  ngOnInit() {
    this.getUsers();

    this.userService.getCurrentUser()
    .subscribe(user => { 
      this.currentUser = user;
      this.currentUserOutput.emit(user); 

      
    });

    this.managementUserComponent.userActionEvent.subscribe(() => {
      this.getUsers();
    });
  }
 

  
  getUsers(): void {
    this.userService.getUsers(this.page, this.pageSize).subscribe(
      (data: any) => {
        this.users = data.content; 
        this.totalRecords = data.totalElements; 
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  
  selectUser(user: UserDto, index: number) {
    this.userSelected.emit(user);
    
    this.selectedRowIndex = index; 
  }



cancelSelection(): void {
  this.selectedRowIndex = -1; 
}

onPageChange(event: any) {
  this.page = event.page;
  this.pageSize = event.rows;
  this.getUsers();
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