import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { DeliveryRouteComponent } from './delivery-route/delivery-route.component';
import { DeliveryRouteDetailsComponent } from './delivery-route/delivery-route-details/delivery-route-details.component';

const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user-profile', redirectTo: 'user-profile/4', pathMatch: 'full'},
    {path: 'user-profile/:customerId', component: UserProfileComponent},
    {path: 'table-list', component: TableListComponent},
    {path: 'delivery-route', component: DeliveryRouteComponent},
    {path: 'delivery-route-details', component: DeliveryRouteDetailsComponent},
    {path: 'typography', component: TypographyComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'upgrade', component: UpgradeComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: []
})
export class AppRoutingModule {
}
