import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SideProjectListComponent } from './side-project-list.component';
import { NgxMdModule } from 'ngx-md';
@NgModule({
  imports: [
    FormsModule,
    NgxMdModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: SideProjectListComponent
      }
    ])
  ],
  declarations: [
    SideProjectListComponent
  ],
  providers: []
})
export class SideProjectModule { }
