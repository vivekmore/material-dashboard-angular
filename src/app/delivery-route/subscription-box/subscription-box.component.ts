import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-subscription-box',
    templateUrl: './subscription-box.component.html'
})
export class SubscriptionBoxComponent implements OnInit {

    @Input() subscription: any;

    constructor() {
    }

    ngOnInit() {
    }

    range(): any[] {
        const res = [];
        for (let i = 0; i < this.subscription.count; i++) {
            res.push(i);
        }
        return res;
    }

}
