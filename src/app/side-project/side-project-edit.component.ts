import { Component } from '@angular/core';

// SERVICES
import { SideProjectService } from './service/side-project.service';


@Component({
    selector: 'app-side-project-edit',
    templateUrl: './side-project-edit.component.html'
})
export class SideProjectEditComponent {
    constructor(private sideProjectService: SideProjectService
    ) {
        //
    }
}
