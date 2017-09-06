import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(public location: Location) {
    }

    ngOnInit() {
    }

    isMaps(path) {
        let title = this.location.prepareExternalUrl(this.location.path());
        title = title.slice(1);
        return path !== title;
    }
}
