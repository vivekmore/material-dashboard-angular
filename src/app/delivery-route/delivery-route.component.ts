import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-route',
  templateUrl: './delivery-route.component.html',
  styleUrls: ['./delivery-route.component.scss']
})
export class DeliveryRouteComponent implements OnInit {

  deliveryRoutes: any[] = [
        {
            'count': 158,
            'section': 'Duffield Street',
            'name': 'Masthope',
            '_id': 1
        },
        {
            'count': 184,
            'section': 'Nautilus Avenue',
            'name': 'Rutherford',
            '_id': 2
        },
        {
            'count': 177,
            'section': 'Boardwalk ',
            'name': 'Chalfant',
            '_id': 3
        },
        {
            'count': 96,
            'section': 'Clifford Place',
            'name': 'Muir',
            '_id': 4
        },
        {
            'count': 80,
            'section': 'Tapscott Street',
            'name': 'Bedias',
            '_id': 5
        },
        {
            'count': 61,
            'section': 'Oxford Street',
            'name': 'Wright',
            '_id': 6
        },
        {
            'count': 196,
            'section': 'Erskine Loop',
            'name': 'Advance',
            '_id': 7
        },
        {
            'count': 167,
            'section': 'Homecrest Avenue',
            'name': 'Bannock',
            '_id': 8
        },
        {
            'count': 65,
            'section': 'Alabama Avenue',
            'name': 'Cornucopia',
            '_id': 9
        },
        {
            'count': 182,
            'section': 'Falmouth Street',
            'name': 'Maxville',
            '_id': 10
        }
    ];

  constructor() { }

  ngOnInit() {
  }

}
