import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public router : Router) { }
  segments: string[] = ['General', 'SAST', 'KICS', 'SCA', 'SMC', 'Organizations', 'Settings'];
  ngOnInit(): void {
  }
  activeSegment: string = 'SAST';

  handleClick(segment: string): void {
    console.log("clicked")
    this.activeSegment = segment;
    if (segment !== 'SAST') {      
    }
  }


  createNewProject(){
    this.router.navigate([routes.dashboard])
  }
}
