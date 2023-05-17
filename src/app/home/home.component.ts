import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/services/chart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  basicData:any
  basicOptions:any

  constructor(private chartservice:ChartService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  

  update(event:Event)
  {
    this.basicData = {
      labels: ['A','B','C'],
            datasets: [
                {
                    data: [100, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
    }
    // this.update(event)
    // console.log(this.update);
    
  }

  

}
