import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  ChartConfiguration,
  Legend,
  LinearScale,
  PieController,
  Tooltip
} from 'chart.js';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  @Input() chartData: any;
  @Input() chartBarColors: Array<string> | undefined
  @ViewChild('canvas') canvas: ElementRef | undefined;
  
  chartConfig: ChartConfiguration | undefined;
  chart: Chart | undefined

  constructor() {
    Chart.register(
      BarElement,
      BarController,
      CategoryScale,
      LinearScale,
      PieController,
      ArcElement,
      Legend,
      Tooltip
    )
  }

  ngOnInit(): void {
    this.createPreviewChart()
  }

  //creating bar chart
  createPreviewChart(): void {
    const chartConfig: ChartConfiguration = this.previewBarChartConfig();
    this.chart = new Chart("canvas", chartConfig)
  }

  //bar graph values
  previewBarChartConfig(): ChartConfiguration {
    return {
      type: 'bar',
      data: this.chartData.data,
      options: this.chartData.options
    }
  }
}