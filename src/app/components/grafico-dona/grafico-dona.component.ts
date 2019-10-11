import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('Labels') doughnutChartLabels: string[] = [];
  @Input('Data') doughnutChartData: number[] = [];
  @Input('CharType') doughnutChartType: string = '';
  @Input('Leyenda') doughnutLeyenda: string = '';

  constructor() { }

  ngOnInit() {
  }

}
