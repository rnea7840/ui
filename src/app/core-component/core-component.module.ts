import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreComponentRoutingModule } from './core-component-routing.module';
import { CoreComponentComponent } from './core-component.component';

import { SidebarOneComponent } from '../common-component/sidebar-one/sidebar-one.component';
import { sharedModule } from '../shared/shared.module';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  declarations: [
    CoreComponentComponent,
    SidebarOneComponent,
    GroupsComponent,
  ],
  imports: [CommonModule, CoreComponentRoutingModule, sharedModule],
  providers: [],
})
export class CoreComponentModule {}
