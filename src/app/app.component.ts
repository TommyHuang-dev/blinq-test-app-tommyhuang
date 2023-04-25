import { Component } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blinq-test-app';

  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  enbId = "";
  plmnId = "";
  isValid = true

  ngOnInit() { 
    this.enbId = ''
    this.plmnId = ''
  }

  checkValid() {
    console.log(this.enbId)
    console.log(this.plmnId)

    if (this.enbId.length === 0 || this.plmnId.length > 6 || this.plmnId.length < 5) {
      this.isValid = false
    }
    let enbVal: number = Number(this.enbId)
    let plmnVal: number = Number(this.plmnId)
    if (isNaN(enbVal) || isNaN(plmnVal)) {
      this.isValid = false
    }
    if (0 <= enbVal && enbVal <= 268435455) {
      this.isValid = true
    } else {
      this.isValid = false
    }
  }

  dailyMeanTemp: ChartOptions = {
    series: [
      {
        name: "Record high (°C)",
        data: [16.1, 19.1, 26.7, 32.2, 34.4, 36.7, 40.6, 38.9, 37.8, 30.8, 23.9, 19.9]
      },
      {
        name: "Daily mean (°C)",
        data: [-3.7, -2.6, 1.4, 7.9, 14.1, 19.4, 22.3, 21.5, 17.2, 10.7, 4.9, -0.5]
      },
      {
        name: "Record low (°C)",
        data: [-32.8, -31.7, -26.7, -15.0, -3.9, -2.2, 3.9, 4.4, -2.2, -8.9, -20.6, -30.0]
      }
    ],
    chart: {
      height: 350,
      type: "line"
    },
    title: {
      text: "Temperature"
    },
    xaxis: {
      categories: this.months
    }
  };

  avgSnow: ChartOptions = {
    series: [
      {
        name: "Average rainfall (mm)",
        data: [29.1, 29.7, 33.6, 61.1, 82.0, 70.9, 63.9, 81.1, 84.7, 64.3, 75.4, 38.2]
      },
      {
        name: "Average snowfall (cm)",
        data: [37.2, 27.0, 19.8, 5.0, 0, 0, 0, 0, 0, 0.1, 8.3, 24.1]
      }
    ],
    chart: {
      height: 350,
      type: "bar"
    },
    title: {
      text: "Precipitation"
    },
    xaxis: {
      categories: this.months
    }
  };
}
