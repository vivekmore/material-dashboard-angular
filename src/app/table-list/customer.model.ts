interface Customer {
    _id: string;
    name: Name;
    address: Address;
    phone: string;
    email: string;
}

interface Address {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
}
