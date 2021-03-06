import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'app-table-list',
    templateUrl: './table-list.component.html',
    styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

    customers: FirebaseListObservable<Customer[]>;

    constructor(private angularFireDatabase: AngularFireDatabase) {
    }

    ngOnInit() {
        this.customers = this.angularFireDatabase.list('/customers');
    }

}
