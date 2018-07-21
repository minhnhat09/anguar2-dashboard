import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SideProjectListComponent } from './side-project-list.component';
import { NgxMdModule } from 'ngx-md';

// COMPONENTS
import { SideProjectEditComponent } from './side-project-edit.component';
import { SideProjectDetailComponent } from './side-project-detail.component';
@NgModule({
  imports: [
    FormsModule,
    NgxMdModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: SideProjectListComponent
      },
      {
        path: 'side-project-edit',
        component: SideProjectEditComponent
      },
      {
        path: 'side-project-detail',
        component: SideProjectDetailComponent
      },
    ])
  ],
  declarations: [
    SideProjectListComponent,
    SideProjectEditComponent,
    SideProjectDetailComponent
  ],
  providers: []
})
export class SideProjectModule { }
