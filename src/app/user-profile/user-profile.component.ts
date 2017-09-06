import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    customer$: FirebaseObjectObservable<Customer>;
    customer: Customer;

    constructor(private angularFireDatabase: AngularFireDatabase,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        const customerId = this.activatedRoute.snapshot.params.customerId;
        this.angularFireDatabase
            .object(`/customers/${customerId}`)
            .subscribe((c: Customer) => {
                console.log('c:', c);
                this.customer = c;
            });
    }

    updateCustomer() {
        this.customer$.set(this.customer);
    }
}
