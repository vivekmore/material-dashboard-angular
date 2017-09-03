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
                address: {
                    line1: '{{integer(50, 500)}} {{street()}}',
                    line2: 'at intersection of {{street()}} and {{street()}}',
                    city: '{{city()}}',
                    state: '{{state()}}',
                    zip: '{{integer(20000, 90000)}}'
                },
                email: function (tags) {
                    return (this.name.first + '.' + this.name.last + '@customers' + tags.domainZone()).toLowerCase();
                },
                phone: '{{phone()}}'
            }
        }
    ],

    customer_subscriptions: [
        {
            'repeat(10)': {
                _id: '{{index()}}',
                customer_id: '{{integer(0,10)}}',
                subscription_type_id: '{{integer(0,20)}}',
                subscription_status_id: '{{random(0,1,2)}}',
                for_date: '{{date(new Date(2017, 8, 1), new Date())}}',
                last_updated: '{{date(new Date(), new Date())}}'
            }
        }
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

    subscription_types: [
        {
            'repeat(15)': {
                _id: '{{index()}}',
                source_id: '{{integer(0,6)}}',
                name: '{{random("WSJ", "USA", "NYT", "Barrons", "Detroit Free Press", "Detroit News")}} {{integer(10,99)}}',
                days: '{{random("mon,tue,wed,thu,fri", "sat", "sun", "mon,tue,wed,thu,fri,sat,sun", "sat,sun")}}'
            }
        }
    ]

}
