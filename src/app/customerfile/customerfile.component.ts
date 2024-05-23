import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-customerfile',
  templateUrl: './customerfile.component.html',
  styleUrl: './customerfile.component.scss'
})

export class CustomerfileComponent implements OnInit {
  items: any;
item: any;
tableData = [
  {Productname: 'Applications', Serialnumber: '200mb', folder: 'Folder', dateCode:'',vciSerialNumber:'', underWarranty:''},
  { name: 'Cloud', size: '20mb', type: 'Folder' },
  { name: 'Desktop', size: '150kb', type: 'Folder' },
  { name: 'Documents', size: '75kb', type: 'Folder' },
  { name: 'Angular', size: '25mb', type: 'Folder' },
  { name: 'editor.app', size: '25mb', type: 'Application' },
  { name: 'settings.app', size: '50mb', type: 'Application' }
];


  constructor() { }
  ngOnInit(): void { }
}
