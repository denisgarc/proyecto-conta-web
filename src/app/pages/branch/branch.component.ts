import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/models/Inventory/Branch';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  loading: boolean = false;
  msg: string;
  success: string;
  // model: Branch = new Branch(0, '', '', true);
  source: Array<Branch> = [
    {
      'Codigo': 1,
      'Nombre': 'Casa Matriz',
      'NombreAbreviado': 'CM',
      'Estado' : true
    },
    {
      'Codigo': 2,
      'Nombre': 'Casa Matriz 2',
      'NombreAbreviado': 'CM',
      'Estado' : true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  saveBranch(): void {

  }

  dismiss(): void {

  }

  edit(branch: Branch) {
    console.log(branch, 'edit object');
  }

  delete(branch: Branch) {
    console.log(branch, 'delete object');
  }

}
