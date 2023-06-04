import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {
  public data: any = [
    {
      name: "DEVELOPER'S GROUP",
      members: "66 Memebers",
      created: "15 July 2022",
      permission: "View|Edit|Delete"
    },
    {
      name: "QA MEMBERS",
      members: "56 Memebers",
      created: "03 Jan 2023",
      permission: "View"
    },
    {
      name: "CTO MEMBERS",
      members: "66 Memebers",
      created: "30 March 2023",
      permission: "View"
    }
  ]

  isSidebarOpen = false;

  constructor(public router : Router){

  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  createNewProject(){
    this.router.navigate([routes.dashboard])
  }
}
