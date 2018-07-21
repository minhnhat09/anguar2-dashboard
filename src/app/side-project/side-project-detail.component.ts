import { Component } from '@angular/core';

// SERVICES
import { SideProjectService } from './service/side-project.service';


@Component({
    selector: 'app-side-project-detail',
    templateUrl: './side-project-detail.component.html'
})
export class SideProjectDetailComponent {
    constructor(private sideProjectService: SideProjectService
    ) {
        //
    }
}
