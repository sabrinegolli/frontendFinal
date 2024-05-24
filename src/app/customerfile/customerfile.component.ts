import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-customerfile',
  templateUrl: './customerfile.component.html',
  styleUrl: './customerfile.component.scss'
})

export class CustomerfileComponent implements OnInit {
cancelForm() {
throw new Error('Method not implemented.');
}
  items: any;
item: any;
isEditingCustomer: any;


  constructor() { }
  ngOnInit(): void { }
}
