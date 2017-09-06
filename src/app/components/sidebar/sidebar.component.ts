import { Component, OnInit } from '@angular/core';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    cssClass: string;
}

export const ROUTES: RouteInfo[] = [
    {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', cssClass: ''},
    {path: 'user-profile', title: 'User Profile', icon: 'person', cssClass: ''},
    {path: 'table-list', title: 'Customers', icon: 'content_paste', cssClass: ''},
    {path: 'delivery-route', title: 'Delivery Routes', icon: 'map', cssClass: ''},
    {path: 'icons', title: 'Icons', icon: 'bubble_chart', cssClass: ''},
    {path: 'notifications', title: 'Notifications', icon: 'notifications', cssClass: ''}
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    menuItems: any[];

    constructor() {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isMobileMenu() {
        return $(window).width() <= 991;
    }
}
