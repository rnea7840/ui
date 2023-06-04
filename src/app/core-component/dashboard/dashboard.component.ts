import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexResponsive,
  ApexLegend,
  ApexFill,
  ApexNonAxisChartSeries,
  ApexGrid,
  AnnotationLabel
} from 'ng-apexcharts';
import { CommonService } from 'src/app/core/core.index';

export type ChartOptions = {
  series: any;
  chart: any;
  responsive: any;
  plotOptions: any;
  grid: any,
  labels: any,
  dataLabels : any ;
  colors : any
};
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public routes = routes;
  NewProject = false  ;
  PlusNew = false ;
  newProjectStep = 1 ;
  projectDetails = false ;
  cvss = "V3"
  Step3Chart = [
    { analtarget:"Demo 3-java web" , ftype : "Include" , fcondition : "**.jmi" , otype:"Jar File" ,  isChecked: false },
    { analtarget:"Demo 3-java web" , ftype : "Include" , fcondition : "**.jmi" , otype:"Jar File" ,  isChecked: false },
    { analtarget:"Demo 3-java web" , ftype : "Include" , fcondition : "**.jmi" , otype:"Jar File" ,  isChecked: false },
    { analtarget:"Demo 3-java web" , ftype : "Include" , fcondition : "**.jmi" , otype:"Jar File" ,  isChecked: false },

  ]
  analysisTarget = [
    {repoType : "Git" , name : "Demo 3-java web" , defualtSetting : "https://github.com/harismuneer/Flight-Booking-System-JavaServlets_App.git, master,,/"},
    {repoType : "Git" , name : "Demo 3-java web" , defualtSetting : "https://github.com/harismuneer/Flight-Booking-System-JavaServlets_App.git, master,,/"},
    {repoType : "Git" , name : "Demo 3-java web" , defualtSetting : "https://github.com/harismuneer/Flight-Booking-System-JavaServlets_App.git, master,,/"},

  ]

  projectLanguagePercentage={
    total_percentage:60, languages: [
      {name:"Java",  color:"#188401"   , percentage:40},
      {name:"Kotlin",  color:"#F2E15D"   , percentage:20},
      {name:"Css",  color:"#554464"   , percentage:10},
      {name:"HTML",  color:"#F1DF5A"   , percentage:10},
      {name:"Typescript",  color:"#B17376"   , percentage:10},

    ]
  }

  showlanguages=[
    {name:"Java",  color:"#188401"   , percentage:40},
    {name:"Kotlin",  color:"#F2E15D"   , percentage:20},
    {name:"Css",  color:"#554464"   , percentage:10},
  ]
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public chartOptions3: Partial<ChartOptions>;
  public chartOptions4: Partial<ChartOptions>;
  public chartOptions5: Partial<ChartOptions>;

  public currency!: string;


  constructor(private common: CommonService) {
    this.chartOptions = {
      series: [41, 55, 41, 0, 17],
      colors: ['#CB0500', '#E03D04', '#F9A008','#F8E21E', '#CBCACF'],
      chart: {
        width: 380,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ],
      labels:['Critical', 'High', 'Medium' , 'Low' , 'None'],
      
    };

    this.chartOptions2 = {
      series: [44, 55, 41, 17],
      colors: ['#CB0500', '#E03D04', '#F9A008', '#CBCACF'],
      chart: {
        width: 380,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ],
      labels:['Protective', 'Permissive', 'Depricated' , 'Unknown'],
      
    };

    this.chartOptions3 = {
      series: [10, 90],
      colors: ['#9BCDB2', '#D9D9D9'],
      chart: {
        width: 300,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
          
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ],
      labels:['Files', 'Library'],
      
    };
    


    this.chartOptions4 = {
      series: [20,30, 50],
      colors: ['#CB0404', '#E03D04' ,'#F9A008'],
      chart: {
        width: 300,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
          
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ],
      labels:['Func', 'Files' , 'Comp'],
      
    };



    this.chartOptions5 = {
      series: [0,90, 10,0],
      colors: ['#CB0500', '#E03D04', '#F9A008', '#CBCACF'],
      chart: {
        width: 300,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ],
      labels:['Protective', 'Permissive', 'Depricated' , 'Unknown'],
      
    };
    this.common.currency$.subscribe((res: string) => {
      this.currency =  res;
    });
  }


  cicdDemo={
    components:[
      {
        color:"#93CAAB",
        value:"4"
      },
      {
        color:"#91B0C4",
        value:"99+"
      },
    ],
    threelayVuln:[
      {
        color:"#CC0907",
        value:"2"
      },
      {
        color:"#DF3A08",
        value:"3"
      },
      {
        color:"#FDA20A",
        value:"4"
      },
      {
        color:"#EEEEEE",
        value:"0"
      },
      {
        color:"#EEEEEE",
        value:"0"
      },
    ],
    licenses:[
      {
        color:"#EEEEEE",
        value:"0"
      },
      {
        color:"#FDA20A",
        value:"99+"
      },
      {
        color:"#FFCC0C",
        value:"4"
      },
      {
        color:"#EEEEEE",
        value:"0"
      },
    ],
    whiteblack:[
      {
        white:5,
        black:2
      }
    ],
    UserDefinedIssues:[
      {
        fn:10,
        source:20
      }
    ]
  }

  projectDetailsAnaysis={
    frictionVul:[
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
    ],
    userDvul:[
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
    ],
    LicenseIssues:[
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#FDCA15",
        value:"4"
      },
    ],
    fileVul:[
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
    ],
    fileVul2:[
      {
        color:"#D30105",
        value:"2"
      },
      {
        color:"#D74106",
        value:"3"
      },
      {
        color:"#F59F0E",
        value:"5"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
      {
        color:"#E1E1E1",
        value:"0"
      },
    ],
  }
  ngOnInit(): void {}



  SaveMoveSettings(){



  }

  Next(){
    
    this.newProjectStep != 4 ? this.newProjectStep++ : console.log("Project Last Step")
  }

  previous(){
    this.newProjectStep != 1 ? this.newProjectStep-- : console.log("First Step")
    
  }

  Complete(){
       this.NewProject = false
       this.newProjectStep = 1
       this.PlusNew = false 
       this.projectDetails = true
  }

  backDetails(){
    this.projectDetails = false
  }
  backDashboard(){
    this.NewProject = false
  }

  
  createNewProject(){
    this.NewProject = true
  }
  executeanal(){
    this.PlusNew = false
  }

  plusNew(){
    this.PlusNew = true
  }

  segmentChange(btn : any){
      this.cvss = btn
  }

  downloadReport(){}

  CompareAnaylyis(){

  }
}
