import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const config = {
    apiKey: 'AIzaSyCefC7rLVzJz8gi1Al4xQqbJE6psSX25SU',
    authDomain: 'newspaper-fb45c.firebaseapp.com',
    databaseURL: 'https://newspaper-fb45c.firebaseio.com',
    projectId: 'newspaper-fb45c',
    storageBucket: '',
    messagingSenderId: '641791000406'
};

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(config),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
