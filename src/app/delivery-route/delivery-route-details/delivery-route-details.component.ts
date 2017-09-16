import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-delivery-route-details',
    templateUrl: './delivery-route-details.component.html'
})
export class DeliveryRouteDetailsComponent implements OnInit {

    deliveryPoints = [];

    constructor() {
    }

    ngOnInit() {
        for (let i = 0; i < 10; i++) {
            const deliveryPoint = {
                address: `${100 + i} Lake Dr SE`,
                subscriptions: [
                    {name: 'WSJ', count: Math.random() * 4},
                    {name: 'DFP', count: Math.random() * 3},
                    {name: 'NYT', count: Math.random()}
                ],
                notes: 'DW to Rt of Hydrant'
            };
            this.deliveryPoints.push(deliveryPoint);
        }
    }

}
