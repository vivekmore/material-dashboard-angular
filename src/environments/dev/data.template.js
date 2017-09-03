{
    carriers: [
        {
            'repeat(10)': {
                _id: '{{index()}}',
                name: {
                    first: '{{firstName()}}',
                    last: '{{surname()}}'
                },
                phone: '{{phone()}}',
                email: function (tags) {
                    return (this.name.first + '.' + this.name.last + '@carriers' + tags.domainZone()).toLowerCase();
                }
            }
        }
    ],

    customers: [
        {
            'repeat(10)': {
                _id: '{{index()}}',
                name: {
                    first: '{{firstName()}}',
                    last: '{{surname()}}'
                },
                address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(10000, 99999)}}',
                email: function (tags) {
                    return (this.name.first + '.' + this.name.last + '@customers' + tags.domainZone()).toLowerCase();
                },
                phone: '{{phone()}}'
            }
        }
    ],

    "customer-subscription": [
        {"_id": 0, "customer_id": 0, "subscription_type_id": 0, "subscription_status_id": 1, "for_date": "09/01/2017", "last_updated": "08/31/2017"},
        {"_id": 1, "customer_id": 0, "subscription_type_id": 1, "subscription_status_id": 1, "for_date": "09/01/2017", "last_updated": "08/31/2017"},
        {"_id": 2, "customer_id": 0, "subscription_type_id": 2, "subscription_status_id": 2, "for_date": "09/01/2017", "last_updated": "08/31/2017"},
        {"_id": 3, "customer_id": 0, "subscription_type_id": 3, "subscription_status_id": 2, "for_date": "09/01/2017", "last_updated": "08/31/2017"},
        {"_id": 4, "customer_id": 0, "subscription_type_id": 4, "subscription_status_id": 1, "for_date": "09/01/2017", "last_updated": "08/31/2017"},
        {"_id": 5, "customer_id": 5, "subscription_type_id": 0, "subscription_status_id": 1, "for_date": "09/01/2017", "last_updated": "08/31/2017"},
        {"_id": 6, "customer_id": 6, "subscription_type_id": 1, "subscription_status_id": 1, "for_date": "09/01/2017", "last_updated": "08/31/2017"},
        {"_id": 7, "customer_id": 7, "subscription_type_id": 2, "subscription_status_id": 1, "for_date": "09/01/2017", "last_updated": "08/31/2017"},
        {"_id": 8, "customer_id": 8, "subscription_type_id": 3, "subscription_status_id": 2, "for_date": "09/01/2017", "last_updated": "08/31/2017"},
        {"_id": 9, "customer_id": 9, "subscription_type_id": 4, "subscription_status_id": 0, "for_date": "09/01/2017", "last_updated": "08/31/2017"}
    ],

    "sources": [
        {
            "name": "WSJ",
            "_id": "1"
        },
        {
            "name": "USA",
            "_id": "2"
        },
        {
            "name": "NYT",
            "_id": "3"
        },
        {
            "name": "Barrons",
            "_id": "4"
        },
        {
            "name": "DFP",
            "_id": "5"
        },
        {
            "name": "D News",
            "_id": "6"
        }
    ],

    "subscription-type": [
        {"_id": 0, "source_id": 0, "name": "WSJ 0", "days": "mon,tue,wed,thu,fri" },
        {"_id": 1, "source_id": 0, "name": "WSJ 1", "days": "sat" },
        {"_id": 2, "source_id": 0, "name": "WSJ 2", "days": "sun" },
        {"_id": 3, "source_id": 1, "name": "USA 3", "days": "mon,tue,wed,thu,fri" },
        {"_id": 4, "source_id": 1, "name": "USA 4", "days": "sat" },
        {"_id": 5, "source_id": 1, "name": "USA 5", "days": "sun" }
    ]





}
